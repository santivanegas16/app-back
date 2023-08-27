import Reaction from "../../models/Reaction.js";

export default async (req, res, next) => {
    try {
        if (req.query.name) {
            const queries = { user_id: req.user._id, name: req.query.name };
            console.log(queries);
            const reactions = await Reaction.findOne(queries);
            if (reactions) {
                return res.status(200).json({
                    success: true,
                    response: reactions,
                    message: 'found'
                });
            }else{
                return res.status(404).json({
                    success: false,
                    response: null,
                    message: 'not found'
                });
            }
           
        } else if (req.query.manga_id || req.query.user_id) {
            const queries = {};
            if (req.query.manga_id) {
                queries.manga_id = req.query.manga_id;
            }
            if (req.query.user_id) {
                queries.user_id = req.query.user_id;
            }

            const reactions = await Reaction.find({ manga_id: queries.manga_id });
            const likes = reactions.filter(each => each.name === 'like').length;
            const dislikes = reactions.filter(each => each.name === 'dislike').length;
            let likeUser = false;
            let dislikeUser = false;

            if (queries.user_id) {
                const reacted = await Reaction.findOne(queries);
                if (reacted.name === 'like') {
                    likeUser = true;
                } else {
                    dislikeUser = true;
                }
            }

            return res.status(200).json({
                success: true,
                response: {
                    reactions: {
                        likes,
                        dislikes
                    },
                    reacted: {
                        like: likeUser,
                        dislike: dislikeUser
                    }
                },
                message: 'found'
            });
        } else {
            return res.status(400).json({
                success: false,
                response: null,
                message: 'not found'
            });
        }
    } catch (error) {
        next(error);
    }
};