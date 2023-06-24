import Company from "../../models/Company.js"

export default async(req, res) => {
    try {
        let one = await Company.create(req.body)

        return res.status(201).json({
            response: one,
            message: 'created'
        })
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: 'not created'
        })
    }
}