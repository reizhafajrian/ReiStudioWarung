import nc from 'next-connect'
import { CustomerController } from '../../backend/controllers/CustomerController'
import { onError, onNoMatch } from '../../backend/middlewares/errorHandler'

export default nc({ onError, onNoMatch }).get(CustomerController.profile)
