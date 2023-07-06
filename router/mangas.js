import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/mangas/create.js";
import passport from "../middlewares/passport.js";
import has_permition from "../middlewares/has_permition.js";
import is_active from "../middlewares/is_active.js"


let mangasRouter = Router()

mangasRouter.post('/', passport.authenticate("jwt",{"session":false}), validator(schema_create),has_permition, create)
mangasRouter.get('/', read)

export default mangasRouter