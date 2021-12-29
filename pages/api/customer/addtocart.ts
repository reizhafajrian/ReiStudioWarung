import nc from 'next-connect'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import AddToCart from '@backend/controllers/AddToCart'
import connectDB from '@backend/app'

export default connectDB(
  nc({ onError, onNoMatch }).post(AddToCart.create).get(AddToCart.getStatus)
)
