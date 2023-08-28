import Reaction from "../../models/Reaction.js";

export default async (req, res, next) => {
    try {
        
        const opposite_reaction = await Reaction.findOne({
            manga_id: req.body.manga_id,
            user_id: req.user._id,
            name: req.body.name
        })
        if (opposite_reaction) {
            const destroy = await Reaction.findOneAndDelete({
                manga_id: req.body.manga_id,
                user_id: req.user._id,
                name: req.body.name
            })
            return res.status(200).json({
                success: false,
                response: destroy,
                message: 'Destroyed'
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