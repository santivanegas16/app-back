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

}
