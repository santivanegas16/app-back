import Chapter from "../models/Chapter.js"

const nextMiddleware = async (req, res, next) => {
    try {
        const lastChapter = await Chapter.findOne({ manga: req.body.manga}).sort({ order: -1 });
        let nextOrder = 1;

        if (lastChapter) {
            nextOrder = lastChapter + 1; 
        }
    
        req.body.order = nextOrder; 

        return next();

    } catch (error) {
        next(error);
    }
};

export default nextMiddleware