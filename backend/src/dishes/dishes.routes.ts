import { Router } from 'express'
import * as controller from './dishes.controller'

export const dishesRouter = Router()

dishesRouter.get('/', controller.list)
dishesRouter.get('/:id', controller.getById)
