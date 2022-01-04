import nc from 'next-connect'
import { AdminController } from '@backend/controllers/AdminController'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'

export default connectDB(nc({ onError, onNoMatch }).post(AdminController.login))
