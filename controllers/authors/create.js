import Author from "../../models/Author.js"

export default async (req, res, next) => {
    try {
        let data = req.body
        let one = await Author.create(data)
        return res.status(201).json({
            succes: false,
            response: one,
            message: 'created'
        })
    } catch (error) {
        next(error)
    }
}