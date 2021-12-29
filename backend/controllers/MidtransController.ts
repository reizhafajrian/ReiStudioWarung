const midtransClient = require("midtrans-client");
// Create Snap API instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-TqPfmnCEiR4EXMDnSP71mjaV",
});
export const MidtransController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    const { price, first_name, email, phone, last_name } = req.body;

    let parameter = {
      transaction_details: {
        order_id: Date.now(),
        gross_amount: price,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      return res.status(201).json({
        status: 200,
        transaction,
      });
    });
  },
  getStatus: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req?.query;
    snap.transaction.status(id).then((response) => {
      return res.json({
        status: 200,
        response,
      });
    });
  },
};
