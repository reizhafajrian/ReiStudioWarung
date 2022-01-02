import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '@backend/middlewares/jwt'
import Customer from '@backend/models/Customer'

const ReportController = {
  getReport: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    let { page, limit } = req.query

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const customer = await Customer.find()

        let orders: any = []

        customer.map((c: any) =>
          c.order.map((o: any) => (orders = [...orders, o]))
        )
        const jumlahOrder = orders.length
        let barangTerjual = 0

        orders.map((o: any) =>
          o.cart.map((c: any) => (barangTerjual += c.quantity))
        )

        const pesanan = orders

        let barang: any = []

        pesanan.map((p: any) => {
          barang = barang.concat(p.cart)
        })

        let temp = barang.map((b1: any) => {
          const namaBarang = b1.name
          const hargaBeli = b1.buying_price
          const hargaJual = b1.selling_price
          const kategori = b1.category
          const kuantitas = b1.quantity
          return {
            _id: b1._id,
            namaBarang,
            hargaBeli,
            hargaJual,
            kategori,
            kuantitas,
          }
        })

        let barangReport: any = []

        temp.map((b: any) => {
          let terjual = 0
          let laba = 0

          temp.map((b2: any) => {
            if (b._id === b2._id) {
              terjual += b.kuantitas
            }
          })

          const data = {
            terjual,
            laba,
          }

          const found = barangReport.find((br: any) => br._id === b._id)

          console.log(found)

          if (!found) {
            barangReport = [...barangReport, { ...b, ...data }]
          }
        })

        //paginating
        // page = page ? page.toString() : '1'
        // limit = limit ? limit.toString() : '3'

        // const pageNum = parseInt(page)
        // const limitNum = parseInt(limit)
        // const skip = (pageNum - 1) * limitNum

        // const handleLimit = (c: any) => {
        //   return orders.filter((x, i) => {
        //     if (i <= c - 1) {
        //       return true
        //     }
        //   })
        // }

        // const handleSkip = (c: any) => {
        //   return orders.filter((x, i) => {
        //     if (i > c - 1) {
        //       return true
        //     }
        //   })
        // }

        // orders = handleSkip(skip)
        // orders = handleLimit(limitNum)

        return res.status(200).json({
          status: 200,
          jumlahOrder,
          barangTerjual,
          pesanan,
          barang: barangReport,
          result: orders.length,
        })
      }
    }
  },
}
export default ReportController
