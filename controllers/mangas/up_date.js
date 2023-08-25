/* import Manga from "../../models/Manga.js";

export default async function update(req, res, next){
    try {
        let one= await Manga.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(one){
            return res.status(200).json({

            })
        }
    } catch (error) {
        
    }
} */