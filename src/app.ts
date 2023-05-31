import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import globalErrorHandler from "./controllers/errorController";
import authRouter from "./routers/authRouter";
import AppError from "./util/helpers/appError";

dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.urlencoded({ limit: "10kb", extended: false }));

app.use("/ping", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "pong",
  });
});

app.use("/api/v1/auth", authRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 400));
});
app.use(globalErrorHandler);

export default app;
