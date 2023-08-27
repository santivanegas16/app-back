import Comment from '../../models/Comment.js';

export default async (req, res, next) => {
    try {
        let one = await Comment.findByIdAndDelete(req.params.id)
        if(one){
            return res.status(200).json({
                success : true,
                messages : "deleted",
                response : one._id
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