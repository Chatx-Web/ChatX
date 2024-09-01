import { Router, RequestHandler } from "express";
import { login, register } from "../controllers/auth.controller";

export const authRouter = Router();

type Method = "get" | "post" | "put" | "delete";
interface Route {
  path: string;
  method: Method;
  handler: RequestHandler; // Type handler as Express RequestHandler
}

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
  const method = route.method as Method;
  if (typeof authRouter[method] === "function") {
    authRouter[method](route.path, route.handler);
  } else {
    console.error(`Invalid method: ${route.method}`);
  }
});
authRouter.get("/", (req, res) => {
  res.json({ message: "API - v1 👋🌎🌍🌏" });
})