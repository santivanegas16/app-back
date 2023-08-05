import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    const id = req.params.id;
    const chapter = await Chapter.findById(id, "title cover_photo pages order manga_id -_id");
    const next = await Chapter.findOne({ _id: { $gt: id } }, "_id");
    return res.status(200).json({
      success: true,
      response: {
        chapter,
        next: next ? next._id : null,
      },
      message: "Found",
    });
  } catch (error) {
    return next(error);
  }
};
