import { Request, Response } from "express";
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
      res.status(401).json({ message: "This user already exists" });
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

// This Is Login Controller
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

    return res.json({ token: "token" });
  } catch (error: any) {
    return res.status(500).json({ message: "Cannot login" });
  }
}
