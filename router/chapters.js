import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import next_order from "../middlewares/next_order.js";

let chaptersRouter = Router()

chaptersRouter.get('/',read)
chaptersRouter.post('/',next_order,create)

export default chaptersRouter