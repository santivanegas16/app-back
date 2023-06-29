import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import addcoverphoto from "../middlewares/add_cover_photo.js"

let chaptersRouter = Router()

chaptersRouter.get('/',read)
chaptersRouter.post('/',add_cover_photo,create)

export default chaptersRouter