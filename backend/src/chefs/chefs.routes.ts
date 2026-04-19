import { Router } from 'express'
import * as controller from './chefs.controller'

export const chefsRouter = Router()

chefsRouter.get('/', controller.list)
chefsRouter.get('/:id', controller.getById)
