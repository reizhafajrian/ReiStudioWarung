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

        let barang: any = []
        let diskon = 0
        orders.map((p: any) => {
          diskon = 0
          if (p.voucher.amount) {
            diskon = p.voucher.amount / p.cart.length
          }
          const b = [...p.cart]
          b.map((x) => (x.diskon = diskon))
          barang = barang.concat(b)
        })

        let temp = barang.map((b1: any) => {
          return {
            _id: b1._id,
            namaBarang: b1.name,
            hargaBeli: b1.buying_price,
            hargaJual: b1.selling_price,
            kategori: b1.category,
            kuantitas: b1.quantity,
            diskon: b1.diskon,
          }
        })

        let barangReport: any = []

        // jumlah setiap barang terjual
        temp.map((b: any) => {
          let terjual = 0
          let diskon = 0

          temp.map((b2: any) => {
            if (b._id === b2._id) {
              terjual += b2.kuantitas
              diskon += b2.diskon
            }
          })

          const found = barangReport.find((br: any) => br._id === b._id)

          if (!found) {
            const { kuantitas, ...rest } = b
            barangReport = [...barangReport, { ...rest, terjual, diskon }]
          }
        })

        // laba setiap barang terjual
        let newBarangReport: any = []
        barangReport.map((b: any) => {
          const totalJual = b.hargaJual * b.terjual
          const totalBeli = b.hargaBeli * b.terjual
          const laba = totalJual - totalBeli - b.diskon

          newBarangReport = [...newBarangReport, { ...b, laba }]
        })

        // total laba
        let totalLaba = 0
        newBarangReport.map((b: any) => {
          totalLaba += b.laba
        })

        //paginating
        page = page ? page.toString() : '1'
        limit = limit ? limit.toString() : '6'

        const pageNum = parseInt(page)
        const limitNum = parseInt(limit)
        const skip = (pageNum - 1) * limitNum

        const handleLimit = (c: any) => {
          return newBarangReport.filter((x, i) => {
            if (i <= c - 1) {
              return true
            }
          })
        }

        const handleSkip = (c: any) => {
          return newBarangReport.filter((x, i) => {
            if (i > c - 1) {
              return true
            }
          })
        }

        newBarangReport = handleSkip(skip)
        newBarangReport = handleLimit(limitNum)

        return res.status(200).json({
          status: 200,
          jumlahOrder,
          barangTerjual,
          totalLaba,
          barangReport: newBarangReport,
          result: newBarangReport.length,
        })
      }
    }
  },
}
export default ReportController
