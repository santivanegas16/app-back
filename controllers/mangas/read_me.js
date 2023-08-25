import Manga from '../../models/Manga.js';

export default async (req, res, next) => {
    try {
        const queries = { author_id: req.body.author_id };
       /*  const ordering = { title: 1 };
        const pagination = { page: 1, limit: 4 };
 
        if (req.query.category) { queries.category_id = req.query.category.split(',') }
        if (req.query.sort) { ordering.title = Number(req.query.sort) }
        if (req.query.page) { pagination.page = Number(req.query.page) }
        if (req.query.quantity) { pagination.limit = Number(req.query.quantity) }

        const skip = pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0;
        const limit = pagination.limit > 0 ? pagination.limit : 4;
        const allMangas = await Manga.countDocuments(queries);

        const pages = Math.ceil(allMangas / pagination.limit);
        const prev = pagination.page === 1 ? null : pagination.page - 1;
        const next = pagination.page === pages ? null : pagination.page + 1;
 */
        const all = await Manga.find({author_id: req.body.author_id} , "title cover_photo description").populate("category_id");
        let mangaByCategory = {}
        for (let each of all) {
            if (mangaByCategory[each.category_id.name]) {
                mangaByCategory[each.category_id.name].push(each)
            }else{
                mangaByCategory[each.category_id.name]=[each]
            }
        }
            return res.status(200).json({ 
                response: mangaByCategory, 
                success: true,
                message: 'mangas found!' })
        
    } catch (error) {
       next();
    }
}