import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./config.env" });
const { BOT_TOKEN } = process.env;
const URI = `/webhook/${BOT_TOKEN}`;

const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.urlencoded({ limit: "10kb", extended: false }));

export default app;
