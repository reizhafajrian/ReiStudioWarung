import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '@backend/middlewares/jwt'
import Customer from '@backend/models/Customer'

const ReportController = {
  getReport: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    let { page, limit, s, e } = req.query

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (r.user.role === 1) {
        const customer = await Customer.find()

        let orders: any = []

        customer.map((c: any) =>
          c.order.map((o: any) => {
            o.created_at = new Date(o.created_at).valueOf()
            orders = [...orders, o]
          })
        )
        let jumlahOrder = orders.length
        let barangTerjual = 0

        orders.map((o: any) =>
          o.cart.map((c: any) => (barangTerjual += c.quantity))
        )

        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        const currentMonth = today.getMonth() + 1

        // Jumlah order hari ini dan bulan ini
        let todayOrders = 0
        let currentMonthOrders = 0

        orders.map((o: any) => {
          const orderDate = new Date(o.created_at)
          const orderMonth = orderDate.getMonth() + 1

          if (orderDate.getDate().valueOf() === today.getDate().valueOf()) {
            todayOrders++
          }
          if (orderMonth === currentMonth) {
            currentMonthOrders++
          }
        })

        let barang: any = []
        let diskon = 0
        orders.map((p: any) => {
          diskon = 0
          if (p.voucher.amount) {
            diskon = p.voucher.amount / p.cart.length
          }
          const b = [...p.cart]
          b.map((x) => {
            x.diskon = diskon
            x.created_at = p.created_at
          })
          barang = barang.concat(b)
        })

        let temp = barang.map((b1: any) => {
          return {
            _id: b1._id,
            namaBarang: b1.name,
            hargaBeli: b1.buying_price,
            hargaJual: b1.price,
            kategori: b1.category,
            kuantitas: b1.quantity,
            diskon: b1.diskon,
            type: b1.type,
            created_at: new Date(b1.created_at).getDate().valueOf(),
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

        // filter by date
        let reportFiltered: any = []
        if (s !== 'all') {
          barangTerjual = 0
          jumlahOrder = 0
          totalLaba = 0
          reportFiltered = []
          newBarangReport.map((b: any) => {
            if (b.created_at >= s!) {
              reportFiltered.push(b)
              totalLaba += b.laba
            }
          })
          newBarangReport = reportFiltered
          orders.map((o: any) => {
            const orderDate = new Date(o.created_at)
            if (orderDate.getDate().toString() >= s!) {
              jumlahOrder++
            }
          })
          temp.map((b: any) => {
            if (b.created_at >= s!) {
              barangTerjual += b.kuantitas
            }
          })
        }

        if (e !== 'all') {
          barangTerjual = 0
          jumlahOrder = 0
          totalLaba = 0
          reportFiltered = []
          newBarangReport.map((b: any) => {
            if (b.created_at <= e!) {
              reportFiltered.push(b)
              totalLaba += b.laba
            }
          })
          newBarangReport = reportFiltered
          orders.map((o: any) => {
            const orderDate = new Date(o.created_at)
            if (orderDate.getDate().toString() <= e!) {
              jumlahOrder++
            }
          })
          temp.map((b: any) => {
            if (b.created_at <= e!) {
              barangTerjual += b.kuantitas
            }
          })
        }

        if (s !== 'all' && e !== 'all') {
          barangTerjual = 0
          jumlahOrder = 0
          totalLaba = 0
          reportFiltered = []
          newBarangReport.map((b: any) => {
            if (b.created_at >= s! && b.created_at <= e!) {
              reportFiltered.push(b)
              totalLaba += b.laba
            }
          })
          newBarangReport = reportFiltered
          orders.map((o: any) => {
            const orderDate = new Date(o.created_at).getDate().toString()
            if (orderDate >= s! && orderDate <= e!) {
              jumlahOrder++
            }
          })
          temp.map((b: any) => {
            if (b.created_at >= s! && b.created_at <= e!) {
              barangTerjual += b.kuantitas
            }
          })
        }

        //paginating
        page = page ? page.toString() : '1'
        limit = limit ? limit.toString() : '6'

        const pageNum = parseInt(page)
        const limitNum = parseInt(limit)
        const skip = (pageNum - 1) * limitNum

        const handleLimit = (c: any) => {
          return newBarangReport.filter((x: any, i: any) => {
            if (i <= c - 1) {
              return true
            }
          })
        }

        const handleSkip = (c: any) => {
          return newBarangReport.filter((x: any, i: any) => {
            if (i > c - 1) {
              return true
            }
          })
        }

        newBarangReport = handleSkip(skip)
        newBarangReport = handleLimit(limitNum)

        return res.status(200).json({
          status: 200,
          todayOrders,
          currentMonthOrders,
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
