 import Manga from '../../models/Manga.js';

export default async function read_me(req, res, next) {
    try {
        let all = await Manga.find({author_id: req.body.author_id})
        if(all.length> 0){
            return res.status(200).json({
                /* success: true,
                response: { all : resultado },
                message: 'Mangas found!' */
            })
        }
    } catch (error) {
        console.log(error)
    }
} 