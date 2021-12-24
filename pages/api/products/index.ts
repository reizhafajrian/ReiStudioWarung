import nc from "next-connect";
import { ProductController } from "@backend/controllers/ProductController";
import { onError, onNoMatch } from "@backend/middlewares/errorHandler";
import connectDB from "@backend/app";

export default connectDB(
  nc({ onError, onNoMatch })
    .get(ProductController.getProducts)
    .post(ProductController.createProduct)
);
