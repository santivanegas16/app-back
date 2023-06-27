/* middleware needed to verify that the author/publisher who
   wants to create a chapter is the same owner who created the manga
*/
import Manga from '../models/Manga.js'

export default async (req, res, next ) => {
  try {

    let author_rid = req.author._id
    let company_rid = req.company._id
    let manga = await Manga.findOne({})

    if((author_rid === manga.author_id) || (company_rid === manga.company_id)) {
        return next()
    }

    return res.status(404).json({
        success: false,
        message: 'the publisher who wants to create a chapter is not the same owner who create the manga!'
    })

  } catch (error) {
    return next(error)
  }
}
