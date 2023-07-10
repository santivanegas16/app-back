/* middleware needed to verify that the author/publisher who
   wants to create a chapter is the same owner who created the manga
*/
import Manga from '../models/Manga.js'

export default async (req, res, next) => {
	if (req.author) {
		const manga = await Manga.findOne({ _id: req.body.manga_id, author_id: req.author.id })
		if (manga) {
			return next();
		}
	}
	if (req.company) {
		const manga = await Manga.findOne({ _id: req.body.manga_id, company_id: req.company.id })
		if (manga) {
			return next();
		}
	}

	return res.status(400).json({
		success: false,
		response: null,
		messages: ['Not authorized!']
	})
	// try {
	// 	const { manga_id } = req.body

	// 	let manga = await Manga.findOne({
	// 		_id: manga_id
	// 	})
	// 	console.log(manga.company_id);
	// 	console.log(req.company._id);


	// 	let author_rid = req.author._id
	// 	let company_rid = req.company._id

	// 	if (author_rid === manga.author_id) {
	// 		return next()
	// 	}

	// 	if (company_rid === manga.company_id) {
	// 		return next()
	// 	}

	// 	return res.status(400).json({
	// 		response: null,
	// 		messages: ['Not authorized!']
	// 	})

	// } catch (error) {
	// 	return next();
	// }
}

// if (req.author) {
// 	const manga = await Manga.findOne({ _id: req.body.manga_id, author_id: req.author.id })
// 	if (manga) {
// 		return next();
// 	}
// }
// if (req.company) {
// 	const manga = await Manga.findOne({ _id: req.body.manga_id, company_id: req.company.id })
// 	if (manga) {
// 		return next();
// 	}
// }

// return res.status(400).json({
// 	success: false,
// 	response: null,
// 	messages: ['Not authorized!']
// })
