import Chapter from '../../models/Chapter.js';

export default async (req, res, next) => {
    try {
        const { manga_id, page } = req.query;
        const limit = 6;
        const pageNumber = parseInt(page) || 1;

        const mangaFilter = { manga_id };

        const totalChapters = await Chapter.countDocuments(mangaFilter);

        const totalPages = Math.ceil(totalChapters / limit);

        const skip = (pageNumber - 1) * limit;

        const chapters = await Chapter.find(mangaFilter)
            .select('-__v')
            .sort({ order: 1 }) 
            .skip(skip)
            .limit(limit);

        const response = {
            totalPages,
            currentPage: pageNumber,
            chapters,
        };

        if (pageNumber > 1) {
            response.prev = pageNumber - 1;
        }
        if (pageNumber < totalPages) {
            response.next = pageNumber + 1;
        }

        res.status(200).json({ response, message: "Chapters found" });

    } catch (error) {
        next(error)
    }
}