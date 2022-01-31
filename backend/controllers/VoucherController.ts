import { Request, Response, NextFunction } from 'express'
import nodemailer from 'nodemailer'
import path from 'path'
import hbs from 'nodemailer-express-handlebars'
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

        const voucher = await Voucher.findOne({ code: code })

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
  sendToEmail: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]
      const { name, email, code, amount } = req.body

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const transporter = nodemailer.createTransport({
          host: 'smtp.office365.com',
          port: 587,
          secure: false,
          // service: 'hotmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        })

        const handlerbarOptions: any = {
          viewEngine: {
            extName: '.handlebars',
            partialsDir: path.resolve('.templates'),
            defaultLayout: false,
          },
          viewPath: path.resolve('./templates'),
          extName: '.handlebars',
        }

        transporter.use('compile', hbs(handlerbarOptions))

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: `Diskon voucher untuk ${name}`,
          template: 'emailvoucher',
          context: {
            name: name,
            code: code,
            amount: amount,
          },
        }

        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err)
            return
          } else {
            return res.status(200).json({
              status: 200,
              message: 'sent successfully',
            })
          }
        })
      }
    }
  },
}
export default VoucherController
