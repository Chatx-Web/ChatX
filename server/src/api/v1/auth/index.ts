import { Router } from "express";
import * as controller from "./controller";

export const authRouter = Router();

authRouter.post("/register", controller.register);
authRouter.post("/login", controller.login);
