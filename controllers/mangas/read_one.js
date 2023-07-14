import Manga from "../../models/Manga.js"

export default async (req, res,next) => {
    try {
        let id= req.params.id; //las consultas (opcionales) van con query y los parametros unicos y obligatorios van con params (opcionales)
        let one= await Manga.findById(id,"-createdAt -updatedAt -__v -_id").populate("author_id","name last_name -_id").populate("category_id","name color hover -_id")
        return res.status(200).json({
            succes: true,
            response: {manga:one},
        })
    } catch (error) {
        next(error)
    }

}