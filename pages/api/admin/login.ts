import nc from 'next-connect'
import connectDB from '../../../backend/app'
import { AdminController } from '../../../backend/controllers/AdminController'
import { onError, onNoMatch } from '../../../backend/middlewares/errorHandler'

export default connectDB(nc({ onError, onNoMatch }).post(AdminController.login))
