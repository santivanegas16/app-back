import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import next_order from "../middlewares/next_order.js";
import add_cover_photo from "../middlewares/add_cover_photo.js"

let chaptersRouter = Router()

chaptersRouter.get('/',read)
chaptersRouter.post('/',add_cover_photo,create)
chaptersRouter.get('/next', next_order)
export default chaptersRouter