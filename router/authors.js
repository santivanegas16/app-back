import { Router } from "express";
import create from "../controllers/authors/create.js"
import read from "../controllers/authors/read.js";

let authorsRouter = Router()

/*
Aca se deben configurar las rutas para CRUD de authors
GET
POST
PUT
DELETE
*/

//se modificó luego con los controladores
authorsRouter.get('/', read)
authorsRouter.post('/', create)

export default authorsRouter