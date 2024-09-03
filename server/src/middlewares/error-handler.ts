import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../api/v1/types/types";

type ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response<ErrorResponse>,
    next: NextFunction
) => void;

export const errorHandler: ErrorRequestHandler = ( err, req, res, next ) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    // stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
}