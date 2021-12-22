import Admin from '@backend/models/Admin'
import Customer from '@backend/models/Customer'
import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../middlewares/jwt'

export const AuthController = {
  profile: async function (req: Request, res: Response, next: NextFunction) {
    const { token } = req.cookies

    // console.log(token)

    if (!token) {
      return res.status(401).json({
        message: 'Token not found',
      })
    }

    const decoded = verifyToken(token)

    const id = decoded.user._id

    let user = await Admin.findById(id)

    if (decoded.user.role == 0) {
      user = await Customer.findById(id)
    }

    return res.status(200).json({
      status: 200,
      user,
    })
  },
}
