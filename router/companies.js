import { Router } from "express"
import read from '../controllers/companies/read.js'
import create from '../controllers/companies/create.js'

let companiesRouter = Router()

companiesRouter.get('/', read)
companiesRouter.post('/', create)

export default companiesRouter
