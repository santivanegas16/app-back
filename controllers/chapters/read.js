// import Chapter from '../../models/Chapter.js';

// export default async (req, res) => {
//     try {
//         let all = await Chapter.find()
//         if (all) {
//             return res.status(200).json({
//                 response: all,
//                 message: 'chapter found'
//             })
//         } else {
//             return res.status(404).json({
//                 response: null,
//                 message: 'chapter not found'
//             });
//         }
//     } catch (error) {
//         return res.status(500).json({
//             response: null,
//             error: 'error'
//         })
//     }
// }

import Chapter from '../../models/Chapter.js';

export default async (req, res) => {
    try {
        const{manga_id,page} = req.query;
        const limit =6;
        const pageNumber = parseInt(page) || 1;

        // Filtro por manga_id
        const mangaFilter = { manga_id };

        // Contar la cantidad total de capítulos que coinciden con el manga_id
        const totalChapters = await Chapter.countDocuments(mangaFilter);

        
        // Calcular el total de páginas
        const totalPages = Math.ceil(totalChapters / limit);

        // Calcular el desplazamiento (skip) para la paginación
        const skip = (pageNumber - 1) * limit;

        // Obtener los capítulos de la página actual
        const chapters = await Chapter.find(mangaFilter)
        .select('-_id -__v') // Excluir campos que no se renderizarán en la vista
        .sort({ order: 1 }) // Ordenar por orden ascendente
        .skip(skip)
        .limit(limit);

        // Configurar las propiedades estándar y la propiedad 'chapters' en la respuesta
        const response = {
        totalPages,
        currentPage: pageNumber,
        chapters,
        };

        // Configurar las propiedades 'prev' y 'next' en la respuesta
        if (pageNumber > 1) {
        response.prev = pageNumber - 1;
        }
        if (pageNumber < totalPages) {
        response.next = pageNumber + 1;
        }
        
        res.status(200).json({response, message: "Chapters found"});

    } catch (error) {
        next(error)
    }
    }