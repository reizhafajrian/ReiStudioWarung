import nc from 'next-connect'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'
import { ProductController } from '@backend/controllers/ProductController'

export default connectDB(
  nc({ onError, onNoMatch })
    .get(ProductController.getProductDetails)
    .post(ProductController.create)
    .put(ProductController.update)
    .delete(ProductController.delete)
)
