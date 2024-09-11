import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401).json({message:"No Token Provided"});
  const user =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)
  req.body.user = user;
  next();
}

export default authenticateToken;