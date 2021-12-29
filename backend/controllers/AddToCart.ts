import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '@backend/middlewares/jwt'
import Customer from '@backend/models/Customer'

const AddToCart = {
  create: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]
      const { data } = req.body

      const r: any = verifyToken(String(token))

      if (typeof r.user !== 'undefined') {
        const dataCustomer = await Customer.findById(r.user._id)
        dataCustomer.cart = data
        dataCustomer.save()
        return res.status(201).json({
          status: 201,
          dataCustomer,
        })
      }
    }
  },
  getStatus: async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (typeof r.user !== 'undefined') {
        const dataCustomer = await Customer.findById(r.user._id)
        return res.status(200).json({
          status: 201,
          cart: dataCustomer.cart,
        })
      }
    }
  },
}
export default AddToCart
