import nc from 'next-connect'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'
import ReportController from '@backend/controllers/ReportController'

export default connectDB(
  nc({ onError, onNoMatch }).get(ReportController.getReport)
)
