import Comment from '../models/Comment.js'

export default async (req, res, next) => {
	if (req.user) {
		const comment = await Comment.findOne({ _id: req.params.id, user_id: req.user._id })
		if (comment) {
			return next();
		}
	}
	return res.status(403).json({
		success: false,
		response: null,
		messages: ['Not authorized!']
	})

}
