/* middleware needed to verify that the author/publisher who
   wants to create a chapter is the same owner who created the manga
*/
import Chapter from '../models/Chapter.js';
import Manga from '../models/Manga.js'

export default async (req, res, next) => {
	if (req.author) {
		const manga = await Manga.findOne({ _id: req.body.manga_id, author_id: req.author._id })
		if (manga) {
			return next();
		}
		const chapter = await Chapter.findOne({ _id: req.params.id })
		console.log(chapter)
		if (chapter) {
			const mangaChapter = await Manga.findOne({ _id: chapter.manga_id, author_id: req.author._id })
			if (mangaChapter) {
				return next()
			}
		}
		
		const manga_find = await Manga.findOne({ _id: req.params.id, author_id: req.author._id })
		console.log(manga_find)
		if (manga_find) {
			return next()
		}
	}
	if (req.company) {
		const manga = await Manga.findOne({ _id: req.body.manga_id, company_id: req.company._id })
		if (manga) {
			return next();
		}
		const chapter = await Chapter.findOne({ _id: req.params.id })
		const mangaChapter = await Manga.findOne({ _id: chapter.manga_id, company_id: req.company._id })
		if (mangaChapter) {
			return next()
		}
	}

	return res.status(400).json({
		success: false,
		response: null,
		messages: ['Not authorized!']
	})

}