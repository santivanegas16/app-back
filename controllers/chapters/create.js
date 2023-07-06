import Chapter from "../../models/Chapter.js";
import next_order from "../../middlewares/next_order.js";

export default async (req, res) => {
  try {
    await next_order(req, res, async (nextOrder) => {
      let data = req.body;
      if(data.order===null){
        // Asignar el valor de order obtenido del middleware
        data.order = nextOrder;
      }
       
      let one = await Chapter.create(data);
      return res.status(201).json({
        response: one,
        message: "created",
      });
    });
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: "not created",
    });
  }
};