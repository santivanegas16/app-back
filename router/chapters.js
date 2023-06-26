import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";

let chaptersRouter = Router()

chaptersRouter.get('/',read)
chaptersRouter.post('/',create)

export default chaptersRouter