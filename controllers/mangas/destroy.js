import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js"

export default async (req,res,next)=>{
    try {
        let one= await Manga.findByIdAndDelete(req.params.id)
        let chapters= await Chapter.deleteMany({manga_id: req.params.id})
        
        if (one) {
            return res.status(200).json({
                response: one,
                success: true,
                message: 'delete succesfully' 
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