import express from "express";
import { adminRegister } from "../controllers/authController";

const authRouter = express();

authRouter.route("/register/businessOwner").post(adminRegister);

export default authRouter;
