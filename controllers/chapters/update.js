import Chapter from "../../models/Chapter.js";

export default async (req,res,next) => {

    try {
        
        // const id = req.params.id

        

        const one = await Chapter.findByIdAndUpdate( req.params.id, req.body,{new:true} )

        // const one = await Chapter.findOneAndUpdate(
        //     { _id: req.params.id },
        //     req.body
        // )

        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Chapter found",
            })
        } 
        return res.status(404).json({
            success: false,
            response: null,
            message: "Chapter not found",
        })

    } catch (error) {
        next(error)
    }

}