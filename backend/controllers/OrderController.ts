import { verifyToken } from "@backend/middlewares/jwt";
import Customer from "@backend/models/Customer";

const OrderController = {
  create: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { data } = req.body;

    const r = verifyToken(String(token));

    if (typeof r.user !== "undefined") {
      const dataCustomer = await Customer.findById(r.user._id);
      if (dataCustomer.order.length === 0) {
        dataCustomer.order.push(data);
      } else {
        const test = dataCustomer.order.filter((res) => {
          return res.order_id === data.order_id;
        });

        if (test.length === 0) {
          dataCustomer.order.push(data);
        }
      }
      dataCustomer.save();

      return res.status(201).json({
        status: 201,
        dataCustomer,
      });
    }
  },
};
export default OrderController;
