import Chapter from "../models/Chapter.js";

const nextMiddleware = async (req, res, next) => {
  try {
    let nextOrder = 1;
    if (req.body.order === null) {
      const lastChapter = await Chapter.findOne({ manga_id: req.body.manga_id })
        .sort({ order: -1 })
        .select("order")
        .lean();

      if (
        lastChapter &&
        lastChapter.order !== null &&
        lastChapter.order !== undefined
      ) {
        nextOrder = lastChapter.order + 1;
      }

      req.body.order = nextOrder;
      res.locals.order = nextOrder;
    }

    return next(nextOrder);
  } catch (error) {
    return next(error);
  }
};

export default nextMiddleware;
