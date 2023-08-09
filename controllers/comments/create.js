import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
	try {
		console.log(req.body)
		const comment = await Comment.create(req.body);
		return res.status(201).json({
			success: true,
			message: 'created comment',
			response: comment,
		})

	} catch (error) {
		return next();
	}
};