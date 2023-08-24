import Chapter from '../../models/Chapter.js'

export default async ( req, res, next ) => {

    try {

        const chapters = await Chapter.find({ manga_id: req.query.manga_id,  })
        
        if ( chapters ) {
            return res.status(200).json({
                success: true,
                response: chapters,
                message: "Chapters found",
            })
        } 
        return res.status(404).json({
            success: false,
            response: null,
            message: "Chapters not found",
        })

    } catch (error) {
        return next(error)
    }

}