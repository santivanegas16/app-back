import Chapter from "../../models/Chapter.js";
// import next_order from "../../middlewares/next_order.js";

export default async (req, res, next) => {
	try {
		const chapter = await Chapter.create(req.body);
		return res.status(201).json({
			success: true,
			message: 'created chapter',
			response: chapter
		})
		// await next_order(req, res, async (nextOrder) => {
		// 	let data = req.body;
		// 	if (data.order === null) {
		// 		// Asignar el valor de order obtenido del middleware
		// 		data.order = nextOrder;
		// 	}

		// 	let one = await Chapter.create(data);
		// 	return res.status(201).json({
		// 		response: one,
		// 		message: "created",
		// 	});
		// });
	} catch (error) {
		return next();
	}
};