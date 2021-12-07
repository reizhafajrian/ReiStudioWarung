import nc from 'next-connect'
import { AdminController } from '../../../backend/controllers/AdminController'
import { onError, onNoMatch } from '../../../backend/middlewares/errorHandler'

export default nc({ onError, onNoMatch }).post(AdminController.login)
