import Chapter from "../../models/Chapter.js";

export default async (req,res,next) => {

    try {
        
        // const id = req.params.id

        const cHapter = await Chapter.findByIdAndUpdate( req.params.id, req.body,{new:true} )

        // const chapter = await Chapter.find({ manga_id: req.query.manga_id })

        if (cHapter) {
            return res.status(200).json({
                success: true,
                response: cHapter,
                message: "Chapter found",
            })
        } else{
            return res.status(200).json({
                success: false,
                response: null,
                message: "Chapter not found",
            })
        }

    } catch (error) {
        next(error)
    }

}