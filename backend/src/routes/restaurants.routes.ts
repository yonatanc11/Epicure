import { Router } from 'express'
import * as controller from '../controllers/restaurants.controller'

export const restaurantsRouter = Router()

restaurantsRouter.get('/', controller.list)
restaurantsRouter.get('/:id', controller.getById)
