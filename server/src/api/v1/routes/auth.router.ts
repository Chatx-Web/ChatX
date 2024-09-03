import { Router, RequestHandler } from "express";
import { login, register } from "../controllers/auth.controller";
import { Route } from "../types/types";
import { TryCatch } from "../../../utils/try-catch.util";

export const authRouter = Router();


const publicRoutes: Route[] = [
  {
    path: "/register",
    method: "post", // Register should be POST
    handler: register
  },
  {
    path: "/login",
    method: "post", // Login should be POST
    handler: login
  }
];

publicRoutes.forEach(route => {
  const method = route.method;
  const handler = route.handler as RequestHandler;
  authRouter[method](route.path,TryCatch(handler));
});
authRouter.get("/", (req, res) => {
  res.json({ message: "API - v1 👋🌎🌍🌏" });
})
