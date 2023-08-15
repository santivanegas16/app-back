import Manga from '../../models/Manga.js';

export default async (req, res, next) => {
    try {
        console.log(req.body)
        const queries = { author_id: req.body.author_id };
        if (req.query.category) { queries.category_id = req.query.category.split(',') }

        let all = await Manga.find(queries, "title cover_photo description").populate("category_id", "name color hover -_id")
        if (all.length > 0) {
            return res.status(200).json({
                response: all,
                success: true,
                message: 'Mangas found!'
            })
        } else {
            return res.satatus(404).json({
                success: false,
                response: null,
                message: 'mangas not found'
            })
        }
    } catch (error) {
        next(error)
    }
}