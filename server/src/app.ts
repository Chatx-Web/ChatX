import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";
import apiv1 from "./api/v1";
import { MessageResponse } from "./api/types";

require("dotenv").config();

export const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", apiv1);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
