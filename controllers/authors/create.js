import Author from "../../models/Author.js"

export default async (req, res) => {
    try {
        let data = req.body
        let one = await Author.create(data)
        return res.status(201).json({
            succes: false,
            response: one,
            message: 'created'
        })
    } catch (error) {
        return res.status(500).json({
            succes: false,
            response: null,
            message: 'not created'
        })
    }
}