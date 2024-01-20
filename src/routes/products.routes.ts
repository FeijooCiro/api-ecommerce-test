import { Router } from 'express'

import controller from '../controllers/products.controller'

const productRouter = Router()

productRouter.route('/')
    .get(controller.getAll)
    .post(controller.create)

export default productRouter