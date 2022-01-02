import nc from 'next-connect'
import { ProductController } from '@backend/controllers/ProductController'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'

export default nc({ onError, onNoMatch }).get(ProductController.seedCategories)
