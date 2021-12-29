import nc from "next-connect";
import AddtoCart from "@backend/controllers/AddtoCart";
import { onError, onNoMatch } from "@backend/middlewares/errorHandler";
import connectDB from "@backend/app";

export default connectDB(
  nc({ onError, onNoMatch }).post(AddtoCart.create).get(AddtoCart.getStatus)
);
