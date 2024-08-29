import { Router } from "express";
import { MessageResponse } from "../types";
import { authRouter } from "./auth";
import { userRouter } from "./user";

const router = Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - v1 👋🌎🌍🌏",
  });
});

router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
