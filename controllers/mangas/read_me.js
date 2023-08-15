import Manga from '../../models/Manga.js';

// export default async (req, res, next) => {
//     try {
//         console.log(req.body)
//         const queries = { author_id: req.body.author_id };
//         if (req.query.category) { queries.category_id = req.query.category.split(',') }

//         let all = await Manga.find(queries, "title cover_photo description").populate("category_id", "name color hover -_id")
//         if (all.length > 0) {
//             return res.status(200).json({
//                 response: all,
//                 success: true,
//                 message: 'Mangas found!'
//             })
//         } else {
//             return res.satatus(404).json({
//                 success: false,
//                 response: null,
//                 message: 'mangas not found'
//             })
//         }
//     } catch (error) {
//         next(error)
//     }
// }

export default async (req, res, next) => {
    try {
        const queries = { author_id: req.body.author_id };
        const ordering = { title: 1 };
        const pagination = { page: 1, limit: 4 };
        
        if (req.query.category) { queries.category_id = req.query.category.split(',')} 
        if (req.query.title) { queries.title = new RegExp(req.query.title.trim(), 'i') }
        if (req.query.sort) { ordering.title = Number(req.query.sort) }
        if (req.query.page) { pagination.page = Number(req.query.page) }
        if (req.query.quantity) { pagination.limit = Number(req.query.quantity) }

        const skip = pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0;
        const limit = pagination.limit > 0 ? pagination.limit : 4;
        const allMangas = await Manga.countDocuments(queries);
        
        const pages = Math.ceil(allMangas / pagination.limit);
        const prev = pagination.page === 1 ? null : pagination.page - 1;
        const next = pagination.page === pages ? null : pagination.page + 1;
        
        const mangas = await Manga.find(queries, "title cover_photo description").populate("category_id", "name color hover -_id").skip(skip).limit(limit).sort(ordering);
        
        if (mangas.length != 0) {
            return res.status(200).json({ response: { mangas, prev, next }, message: 'mangas found!' })
        } else {
            return res.status(404).json({ response: null, message: 'mangas not found' })
        }
    } catch (error) {
        return next();
    }
}