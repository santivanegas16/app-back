 import Manga from '../../models/Manga.js';

export default async (req, res, next) =>{
    try {
        console.log(req.body)
        let all = await Manga.find({author_id: req.body.author_id})
        
        if(all.length> 0){
            return res.status(200).json({
                response: all,
                success: true,
                message: 'Mangas found!' 
            })
        }else{
            return res.satatus(404).json({
                success: false,
                response: null,
                message: 'mangas not found'
            })
        }
    } catch (error) {
        next(error)
    }
} 