import Comment from '../../models/Comment.js';

export default async (req, res, next) => {
    try {
        let one = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        )
        if(one){
            return res.status(200).json({
                success : true,
                messages : "updated",
                response : one
            })
        } else {
            return res.status(404).json({
                success : false,
                messages : "not found",
                response : null
            })
        }
    } catch (error) {
        next(error)
    }
}