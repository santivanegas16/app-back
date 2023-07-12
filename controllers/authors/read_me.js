import Author from "../../models/Author.js";

export default async (req,res,next) => {
try {
    let id = req.params.id
    console.log(id)
    let profile = await Author.findById(id)
    return res.status(200).json({
        success: true,
        response: profile
    })
} catch (error) {
    next (error)
}
}

