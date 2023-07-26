import Manga from "../../models/Manga.js"

export default async (req, res, next) => {
    try {
        let all = await Manga.find({ author_id: req.author._id })
        const datosOrdenados = all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (all.length < 4) {
            return res.status(200).json({
                success: true,
                response: { logo: "/img/logo.png" },
                message: 'Mangas found!'
            })
        } else if (all.length >= 4 && all.length < 8) {       
            const masViejos = datosOrdenados.slice(-2);
            const masNuevos = datosOrdenados.slice(0, 2);
            const resultado = [...masNuevos, ...masViejos];    
            return res.status(200).json({
                success: true,
                response: { all : resultado },
                message: 'Mangas found!'
            })
        } else if (all.length >= 8) {
            const masViejos = datosOrdenados.slice(-4);
            const masNuevos = datosOrdenados.slice(0, 4);
            return res.status(200).json({
                success: true,
                response: { new: masNuevos, old: masViejos },
                message: 'Mangas found!'
            })
        }
        else {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'Mangas not found'
            })
        }
    } catch (error) {
        next(error)
    }
}