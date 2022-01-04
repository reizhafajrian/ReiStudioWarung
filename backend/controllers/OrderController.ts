import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '@backend/middlewares/jwt'
import Customer from '@backend/models/Customer'
import Product from '@backend/models/Product'

const OrderController = {
  create: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]
      const { data } = req.body

      const r: any = verifyToken(String(token))
      let example

      if (typeof r.user !== 'undefined') {
        const dataCustomer = await Customer.findById(r.user.id)
        if (dataCustomer.order.length === 0) {
          dataCustomer.order.push(data)
        } else {
          const test = dataCustomer.order.filter((res: any) => {
            return res.order_id === data.order_id
          })

          if (test.length === 0) {
            dataCustomer.order.push(data)
          }
        }
        await dataCustomer.save()

        example = dataCustomer.order.filter((v: any, i: any, a: any) =>
          a.findIndex((t: any) => (t.order_id === v.order_id) === i)
        )

        dataCustomer.order = example
        await dataCustomer.save()

        data.cart.map(async (p: any) => {
          const product = await Product.findById(p._id)
          await Product.findByIdAndUpdate(p._id, {
            stock: product.stock - p.quantity,
            sold: product.sold + p.quantity,
          })
        })

        return res.status(201).json({
          status: 201,
          example,
        })
      }
    }
  },
  getOrders: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    let { page, limit } = req.query

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (typeof r.user !== 'undefined') {
        const dataCustomer = await Customer.findById(r.user.id)

        let orders = dataCustomer.order

        //paginating
        page = page ? page.toString() : '1'
        limit = limit ? limit.toString() : '3'

        const pageNum = parseInt(page)
        const limitNum = parseInt(limit)
        const skip = (pageNum - 1) * limitNum

        const handleLimit = (c: any) => {
          return orders.filter((x: any, i: any) => {
            if (i <= c - 1) {
              return true
            }
          })
        }

        const handleSkip = (c: any) => {
          return orders.filter((x: any, i: any) => {
            if (i > c - 1) {
              return true
            }
          })
        }

        orders = handleSkip(skip)
        orders = handleLimit(limitNum)

        return res.status(200).json({
          status: 200,
          orders,
          result: orders.length,
        })
      }
    }
  },
  getOrderDetails: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (typeof r.user !== 'undefined') {
        const { id } = req.query

        const dataCustomer = await Customer.find()

        let orders: any = []

        dataCustomer.map((c: any) =>
          c.order.map(
            (o: any) =>
              (orders = [
                ...orders,
                {
                  user: c,
                  order: o,
                },
              ])
          )
        )

        const order = orders.find((o: any) => o.order.order_id === id)

        return res.status(200).json({
          status: 200,
          order: order.order,
          user: order.user,
        })
      }
    }
  },
  allOrdersAdmin: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorization } = req.headers
    let { page, limit, status } = req.query

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const customer: any = await Customer.find()

        let orders: any = []

        customer.map((c: any) =>
          c.order.map(
            (o: any) =>
              (orders = [
                ...orders,
                {
                  user_id: c._id,
                  name: c.name,
                  address: c.address,
                  order_detail: o,
                },
              ])
          )
        )

        if (status !== 'all') {
          orders = orders.filter(
            (o: any) => o.order_detail.status.title === status
          )
        }

        //paginating
        page = page ? page.toString() : '1'
        limit = limit ? limit.toString() : '6'

        const pageNum = parseInt(page)
        const limitNum = parseInt(limit)
        const skip = (pageNum - 1) * limitNum

        const handleLimit = (c: any) => {
          return orders.filter((x: any, i: any) => {
            if (i <= c - 1) {
              return true
            }
          })
        }

        const handleSkip = (c: any) => {
          return orders.filter((x: any, i: any) => {
            if (i > c - 1) {
              return true
            }
          })
        }

        orders = handleSkip(skip)
        orders = handleLimit(limitNum)

        return res.status(200).json({
          status: 200,
          orders,
          result: orders.length,
        })
      }
    }
  },
  changeOrderStatus: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (typeof r.user !== 'undefined') {
        const { id } = req.query
        const { status } = req.body

        await Customer.findOneAndUpdate(
          { 'order.order_id': id },
          {
            $set: { 'order.$.status': status },
          }
        )

        return res.status(200).json({
          status: 200,
          message: 'updated successfully',
        })
      }
    }
  },
}
export default OrderController
