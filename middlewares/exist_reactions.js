import Reaction from "../models/Reaction.js";

export default async (req, res, next) => {
    try {
        const isLike = req.body.name == 'like' ? 'dislike' : 'like';
        console.log(isLike);
        const existReaction = await Reaction.findOne({
            manga_id: req.body.manga_id,
            user_id: req.user._id,
            name: isLike
        })
        if (existReaction) {
            await Reaction.findOneAndDelete({
                manga_id: req.body.manga_id,
                user_id: req.user._id,
                name: isLike
            })
            return next()
        }
        return next()
    } catch (error) {
        next(error);
    }
}