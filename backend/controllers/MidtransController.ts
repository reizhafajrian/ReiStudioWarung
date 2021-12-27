import { Request, Response, NextFunction } from 'express'
const midtransClient = require('midtrans-client')
// Create Snap API instance

export const MidtransController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: 'SB-Mid-server-TqPfmnCEiR4EXMDnSP71mjaV',
    })

    let parameter = {
      transaction_details: {
        order_id: new Date.now(),
        gross_amount: 10000,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: 'budi',
        last_name: 'pratama',
        email: 'budi.pra@example.com',
        phone: '08111222333',
      },
    }

    snap.createTransaction(parameter).then((transaction: any) => {
      // transaction token
      let transactionToken = transaction.token
      console.log('transactionToken:', transaction)
    })
  },
}
