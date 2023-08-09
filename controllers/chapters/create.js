import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
	try {
		const chapter = await Chapter.create(req.body);
		return res.status(201).json({
			success: true,
			message: 'created chapter',
			response: chapter
		})

	} catch (error) {
		return next();
	}
};