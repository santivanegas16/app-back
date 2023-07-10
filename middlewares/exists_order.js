import Chapter from "../models/Chapter.js";

export default async (req, res, next) => {
    if (req.body.order) {
        const chapter = Chapter.findOne({ manga_id: req.body.manga_id, order: req.body.order })
        if (chapter) {
            return res.status(400).json({
                success: false,
                response: null,
                messages: ['order already exists']
            });
        }
        return next();
    }
    return next();
    // try {
    //     let one = await Chapter.findOne({
    //         order: req.body.order,
    //         manga_id: req.body.manga_id
    //     });

    //     if (one) {
    //         return res.status(500).json({
    //             success: false,
    //             response: null,
    //             messages: ['order already exists']

    //         })
    //     } else {
    //         return next();

    //     }
    // } catch (error) {
    //     return next();
    // }
}