import Reaction from "../../models/Reaction.js";

export default async (req,res,next) => {
    try {
        const queries = { user_id: req.user._id}
        if (req.query.name) {
            queries.name = req.query.name
        }
        const reactions = await Reaction.find(queries)
        return res.status(200).json({
            succes: true,
            response: reactions,
            message: 'found'
        })
    } catch (error) {
        next(error)
    }
}