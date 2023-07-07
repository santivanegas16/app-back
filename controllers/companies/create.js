import Company from "../../models/Company.js"

export default async(req, res, next) => {
    try {
        let data = req.body
        data.user_id = req.user._id
        let one = await Company.create(req.body)

        return res.status(201).json({
            response: one,
            message: 'created'
        })
    } catch (error) {
        next(error)
    }
}
