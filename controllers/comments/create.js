import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
	try {
		const comment = await Comment.create(req.body);
		console.log(req.user)
		return res.status(201).json({
			success: true,
			message: 'created comment',
			response: {
				"comment" : comment,
				"user" : req.user
			}
		})

	} catch (error) {
		return next();
	}
};