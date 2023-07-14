import Author from "../../models/Author.js"

export default async (req, res, next) => {
    try {
        let all = await Author
            .findOne({ user_id: req.user._id }, "-_id name last_name city country photo")
            .populate("user_id", "email photo role -_id")
        if (all) {
            return res.status(200).json({
                success: true,
                response: {profile: all},
                message: 'author found!'
            })
        }
        else {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'author not found'
            })
        }
    } catch (error) {
        next(error)
    }
}