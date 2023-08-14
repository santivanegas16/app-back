import Reaction from "../../models/Reaction.js";

export default async (req, res, next) => {
    try {
        const queries = {}
        if (req.query.manga_id) {
            queries.manga_id = req.query.manga_id
        }
        if (req.query.user_id) {
            queries.user_id = req.query.user_id
        }
        const reactions = await Reaction.find({ manga_id: queries.manga_id })
        const likes = reactions.filter(each=>each.name==='like').length
        const dislikes = reactions.filter(each=>each.name==='dislike').length
        let likeUser = false
        let dislikeUser = false
        if (queries.user_id) {
            const reacted = await Reaction.find(queries)
            reacted.name === 'like' ? likeUser=true : dislikeUser=true
        }

        return res.status(200).json({
            success: true,
            response: {
                reactions:{
                    likes,
                    dislikes
                },
                reacted:{
                    like: likeUser,
                    dislike: dislikeUser
                }
            },
            message: 'found'
        })
    } catch (error) {
        next(error)
    }
}