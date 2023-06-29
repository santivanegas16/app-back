import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/mangas/create.js";

let mangasRouter = Router()

mangasRouter.post('/', validator(schema_create), create)
mangasRouter.get('/', read)

export default mangasRouter