import Chapter from '../../models/Chapter.js'

export default async ( req, res, next ) => {

    try {

        const chapters = await Chapter.find({ manga_id: req.query.manga_id })
        
        return res.status(200).json({
            success: true,
            response: chapters,
            message: "Chapters found",
        })

    } catch (error) {
        return next(error)
    }

}