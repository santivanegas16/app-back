import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import next_order from "../middlewares/next_order.js";
import add_cover_photo from "../middlewares/add_cover_photo.js"
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import has_permition from "../middlewares/has_permition.js";
import is_active from "../middlewares/is_active.js"
import is_property_of from "../middlewares/is_property_of.js";
import exists_order from "../middlewares/exists_order.js";
import create_schema from "../schemas/chapter/create.js"
import read_one from "../controllers/chapters/read_one.js";
import get_me from "../controllers/chapters/get_me.js";
import finds_id from "../middlewares/finds_id.js";
import update from "../controllers/chapters/update.js";

let chaptersRouter = Router()

chaptersRouter.post('/',
    passport.authenticate('jwt', { session: false }),
    validator(create_schema),
    has_permition,
    is_active,
    is_property_of,
    add_cover_photo,
    exists_order,
    next_order,
    create
)

chaptersRouter.get('/',passport.authenticate('jwt', { session: false }), // Proteger la ruta con Passport si se requiere autenticación 
read)

chaptersRouter.get('/me', passport.authenticate('jwt', {session: false }), has_permition, finds_id, get_me);

chaptersRouter.get('/:id', passport.authenticate('jwt', {session: false }), read_one);
chaptersRouter.put('/:id', passport.authenticate('jwt', {session: false }), has_permition, is_active, is_property_of,update);

export default chaptersRouter