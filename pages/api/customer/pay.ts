import nc from "next-connect";
import { MidtransController } from "@backend/controllers/MidtransController";
import { onError, onNoMatch } from "@backend/middlewares/errorHandler";

export default nc({ onError, onNoMatch }).post(MidtransController.create);
