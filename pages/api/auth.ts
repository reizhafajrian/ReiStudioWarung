import nc from 'next-connect'
import { AuthController } from '@backend/controllers/AuthController'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'

export default connectDB(nc({ onError, onNoMatch }).get(AuthController.profile))
