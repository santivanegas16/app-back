import Chapter from "../../models/Chapter.js";

export default async (req, res) => {
  try {
    let data = req.body;
    let one = await Chapter.create(data);
    return res.status(201).json({
      response: one,
      message: "created",
    });
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: "not created",
    })
  }
}