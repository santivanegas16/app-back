import Chapter from "../models/Chapter.js";

export default async (req, res, next) => {
	let order = 1;
	const chapter = await Chapter.findOne({ manga_id: req.body.manga_id }).sort({ order: '-1' });
	if (chapter) {
		req.body.order = chapter.order + 1;
	} else {
		req.body.order = order;
	}
	return next();
	// try {
	// 	let nextOrder = 1;
	// 	if (req.body.order === null) {
	// 		const lastChapter = await Chapter.findOne({ manga_id: req.body.manga_id })
	// 			.sort({ order: -1 });

	// 		if (
	// 			lastChapter &&
	// 			lastChapter.order !== null &&
	// 			lastChapter.order !== undefined
	// 		) {
	// 			nextOrder = lastChapter.order + 1;
	// 		}

	// 		req.body.order = nextOrder;
	// 	}

	// 	return next();
	// } catch (error) {
	// 	return next();
	// }
};

// let order = 1;
// const chapter = Chapter.findOne({ manga_id: req.body.manga_id }).sort({ order: '-1' });
// if (chapter) {
// 	req.body.order = one.order + 1;
// } else {
// 	req.body.order = order;
// }
// return next();