import nc from "next-connect";
import OrderController from "@backend/controllers/OrderController";
import { onError, onNoMatch } from "@backend/middlewares/errorHandler";
import connectDB from "@backend/app";

export default connectDB(nc({ onError, onNoMatch }).post(OrderController.create));
