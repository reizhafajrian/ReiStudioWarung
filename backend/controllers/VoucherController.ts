import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '@backend/middlewares/jwt'
import Voucher from '../models/Voucher'

const VoucherController = {
  create: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]
      const { code, amount } = req.body

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const newVoucher = await Voucher.create({
          code,
          amount,
        })
        return res.status(201).json({
          status: 201,
          newVoucher,
          message: 'voucher created successfully',
        })
      }
    }
  },
  getVouchers: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const vouchers = await Voucher.find()

        return res.status(200).json({
          status: 200,
          vouchers,
        })
      }
    }
  },
  getVoucherDetails: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (typeof r.user !== 'undefined') {
        const { code } = req.query

        const voucher = await Voucher.find({ code: code })

        return res.status(200).json({
          status: 200,
          voucher,
        })
      }
    }
  },
  update: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]
      const { code, amount } = req.body

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const { id } = req.query

        await Voucher.findByIdAndUpdate(id, {
          code,
          amount,
        })

        return res.status(200).json({
          status: 200,
          message: 'voucher updated successfully',
        })
      }
    }
  },
  delete: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const { id } = req.query

        await Voucher.findByIdAndDelete(id)

        return res.status(200).json({
          status: 200,
          message: 'voucher deleted successfully',
        })
      }
    }
  },
}
export default VoucherController
