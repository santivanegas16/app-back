/* middleware needed to verify that the author/publisher who
   wants to create a chapter is the same owner who created the manga
*/
import Manga from '../models/Manga.js'
import Chapter from '../models/Chapter.js'

export default async (req, res, next) => {

	if (req.author) {
		const manga = await Manga.findOne({ _id: req.query.manga_id, author_id: req.author._id })
		
		if (manga) {
			return next();
		}

	}
	if (req.company) {
		const manga = await Manga.findOne({ _id: req.query.manga_id, company_id: req.company._id })
		if (manga) {
			return next();
		}
	}

	return res.status(400).json({
		success: false,
		response: null,
		messages: ['User not authorized!']
	})

}