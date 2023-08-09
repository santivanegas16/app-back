/* import Manga from "../../models/Manga";

export default async function destroy (req,res,next){
    try {
        let one= await Manga.findByIdAndDelete(req.params.id)
        let chapters= await Chapter.deleteMany({manga_id: req.params.id})
    } catch (error) {
        
    }
} */