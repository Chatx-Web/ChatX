import { NextFunction, Request, Response } from "express";
import { ControllerMethodReturn, MessageResponse } from "../types/types";
import { valid } from "../../../utils/valid.util";
import * as userService from "../services/user.service";
import { random } from "../../../utils/random.util";
import bcrypt from "bcrypt";
import {
  AuthLoginBody,
  AuthLoginResponse,
  AuthRegisterBody,
  AuthRegisterResponse,
} from "../types/types";

// This Is Register Controller
export function register(
  req: Request<{}, {}, AuthRegisterBody>,
  res: Response<AuthRegisterResponse>,
  next:NextFunction
): ControllerMethodReturn {
    const body = req.body;

    if (!body.email || !valid.isEmail(body.email)) throw new Error("Please Provide Valid Email!")
    if (!body.password || !valid.isPassword(body.password)) throw new Error("Invalid Password!")
    if (!body.username || body.username.length < 2) throw new Error("Invalid Username!")
    
    const user = userService.findUserWithEmail(body.email);

    if (user) throw new Error("The User Is Alredy Exists!")

    userService.createUser({
      _id: random.id(),
      ...body,
      password: bcrypt.hashSync(body.password, 10),
    });
    return res.json({
      message: `User ${body.username} registered successfully`,
    });
}

// This Is Login Controller
export function login(
  req: Request<{}, {}, AuthLoginBody>,
  res: Response<AuthLoginResponse>
): ControllerMethodReturn {
    const body = req.body;

    if (!body.email || !valid.isEmail(body.email)) throw new Error("Please Provide Valid Email!")
    if (!body.password || !valid.isPassword(body.password)) throw new Error("Invalid Password!")

    const user = userService.findUserWithEmail(body.email);

    if (!user || !bcrypt.compareSync(body.password, user.password)) throw new Error("Invalid Credentials!")

    return res.json({ token: "token" });
}
