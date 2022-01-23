import nc from 'next-connect'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'
import { CustomerController } from '@backend/controllers/CustomerController'

export default connectDB(
  nc({ onError, onNoMatch }).get(CustomerController.allCustomersAdmin)
)
