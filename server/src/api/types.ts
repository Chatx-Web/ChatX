import { Response } from "express";

export interface MessageResponse {
  message: string;
}

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}

export type ControllerMethodReturn = Response | void;
