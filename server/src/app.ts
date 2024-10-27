import express from "express";
import cors from "cors";
import apiv1 from "./api/v1";
import { errorHandler } from "./middlewares/error-handler.middleware";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { morganFormate, morganData } from "./loggers/morgan"

export const app = express();

app.use(morgan(morganFormate,morganData));
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
