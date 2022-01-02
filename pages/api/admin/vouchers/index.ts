import nc from 'next-connect'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'
import VoucherController from '@backend/controllers/VoucherController'

export default connectDB(
  nc({ onError, onNoMatch })
    .get(VoucherController.getVouchers)
    .post(VoucherController.create)
    .put(VoucherController.update)
    .delete(VoucherController.delete)
)
