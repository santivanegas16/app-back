import Reaction from "../../models/Reaction.js";

export default async (req, res, next) => {
    try {

        const existReaction = await Reaction.findOne({
            manga_id: req.body.manga_id,
            user_id: req.user._id
        })
        if (existReaction) {
            const reactionDelete = await Reaction.findOneAndDelete({
                manga_id: req.body.manga_id,
                user_id: req.user._id
            })
            return res.status(200).json({
                success: true,
                response: reactionDelete,
                message: 'deleted'
            })
        } else {
            req.body.user_id = req.user._id
            const reaction = await Reaction.create(req.body)
            return res.status(200).json({
                success: true,
                response: reaction,
                message: 'created'
            })
        }
    } catch (error) {
        next(error)
    }
}