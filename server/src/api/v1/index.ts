import { Router } from "express";
import { MessageResponse } from "./types/types";
import { authRouter } from "./routes/auth.router";
import { userRouter } from "./routes/user.router";

const router = Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - v1 👋🌎🌍🌏",
  });
});

router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
