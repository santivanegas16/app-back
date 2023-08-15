import Manga from '../../models/Manga.js';

export default async ( req, res, next)=>{
    try {
        let one= await Manga.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        if (one) {
            return res.status(200).json({ 
                response: one,
                success: true,
                message: 'update succesfully' 
            })
        }else{
            return res.status(404).json({
                success: false,
                response: null,
                message: 'mangas not found'
            })
        }
    } catch (error) {
        next(error)
    }
}