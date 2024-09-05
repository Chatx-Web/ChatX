import { Request, Response } from "express";
import { ControllerMethodReturn, MessageResponse } from "../../types";
import { valid } from "../../../utils/valid";
import * as userService from "../user/service";
import { random } from "../../../utils/random";
import bcrypt from "bcrypt";
import {
  AuthLoginBody,
  AuthLoginResponse,
  AuthRegisterBody,
  AuthRegisterResponse,
} from "./types";
import { createJwtToken } from "../../../utils/jwt";

export function register(
  req: Request<{}, {}, AuthRegisterBody>,
  res: Response<AuthRegisterResponse>
): ControllerMethodReturn {
  try {
    const body = req.body;

    if (!body.email || !valid.isEmail(body.email)) {
      res.status(400).json({ message: "Please enter a valid Email" });
      return;
    }
    if (!body.password || !valid.isPassword(body.password)) {
      res
        .status(400)
        .json({ message: "Password must be at least 4 characters long" });
      return;
    }
    if (!body.username || body.username.length < 2) {
      res.status(400).json({ message: "Enter a valid UserName" });
      return;
    }

    const user = userService.findUserWithEmail(body.email);

    if (user) {
      res.status(401).json({ message: "This email is already in use" });
      return;
    }

    userService.createUser({
      _id: random.id(),
      ...body,
      password: bcrypt.hashSync(body.password, 10),
    });
    return res.json({
      message: `User ${body.username} registered successfully`,
    });
  } catch (error: any) {
    return res.status(500).json({ message: "Cannot register user" });
  }
}

export function login(
  req: Request<{}, {}, AuthLoginBody>,
  res: Response<AuthLoginResponse>
): ControllerMethodReturn {
  try {
    const body = req.body;

    if (!body.email || !valid.isEmail(body.email)) {
      res.status(400).json({ message: "Please enter a valid Email" });
      return;
    }
    if (!body.password || !valid.isPassword(body.password)) {
      res
        .status(400)
        .json({ message: "Password must be at least 4 characters long" });
      return;
    }

    const user = userService.findUserWithEmail(body.email);

    if (!user || !bcrypt.compareSync(body.password, user.password)) {
      res.status(404).json({ message: "Unvalid credentials" });
      return;
    }

    const authToken = createJwtToken({
      sub: user._id,
      ...user,
    });

    return res.json({ authToken });
  } catch (error: any) {
    return res.status(500).json({ message: "Cannot login" });
  }
}
