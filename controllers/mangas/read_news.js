import Manga from "../../models/Manga.js"

export default async (req, res, next) => {
    try {
        let all = await Manga.find({ author_id: req.author._id })
        if (all.length < 4) {
            return res.status(200).json({
                success: true,
                response: { mangas: all, logo: "www.google.com" },
                message: 'Mangas found!'
            })
        } else if (all.length >= 4 && all.length < 8) {
            
            return res.status(200).json({
                success: true,
                response: { all: all },
                message: 'Mangas found!'
            })
        } else if (all.length >= 8) {
            return res.status(200).json({
                success: true,
                response: { old: all, new: all },
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