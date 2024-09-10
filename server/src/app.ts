import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import apiv1 from "./api/v1";
import { errorHandler } from "./middlewares/error-handler";
import cookieParser from "cookie-parser";

require("dotenv").config();

export const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});


app.use("/api/v1", apiv1);

app.use(errorHandler);

app.all("*",(req, res) => {
  res.status(404).json({
    message: "Page Not Found",
  });
})