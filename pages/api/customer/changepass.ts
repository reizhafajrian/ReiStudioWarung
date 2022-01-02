import nc from 'next-connect'
import { CustomerController } from '@backend/controllers/CustomerController'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'

export default connectDB(
  nc({ onError, onNoMatch }).post(CustomerController.changePassword)
)
