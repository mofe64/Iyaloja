import mongoose, { MongooseError } from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: "./config.env" });

const connectionUrl: string = process.env.DATABASE_URL as string;
mongoose
  .connect("mongodb://localhost:27017/iyaloja", {
    family: 4,
  })
  .then(() => console.log("DB connection successful"))
  .catch((e: MongooseError) =>
    console.log(`error connecting to database : --> ${e}`)
  );

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV || "development";
const server = app.listen(port, async () => {
  console.log(`App running on ${mode} mode on port ${port}.....`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log("unhandled rejection, Shutting down....");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
