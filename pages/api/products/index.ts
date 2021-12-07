import nc from 'next-connect'
import connectDB from '../../../backend/app'
import { ProductController } from '../../../backend/controllers/ProductController'
import { onError, onNoMatch } from '../../../backend/middlewares/errorHandler'

export default connectDB(
  nc({ onError, onNoMatch }).get(ProductController.getProducts)
)
