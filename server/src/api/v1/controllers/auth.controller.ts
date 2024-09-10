import { NextFunction, Request, Response } from "express";
import { ControllerMethodReturn, MessageResponse } from "../types/types";
import { valid } from "../../../utils/valid.util";
import bcrypt from "bcrypt";
import {
  AuthLoginBody,
  AuthLoginResponse,
  AuthRegisterBody,
  AuthRegisterResponse,
} from "../types/types";
import { UserModel } from "../models/user.model";
import { generateAccessToken, generateRefreshToken } from "../../../utils/token-generater.util";

// This Is Register Controller
export async function register(
  req: Request<{}, {}, AuthRegisterBody>,
  res: Response<AuthRegisterResponse>,
  next:NextFunction
): Promise<ControllerMethodReturn> {
    const { username, password, email } = req.body;

    if (!email || !valid.isEmail(email)) throw new Error("Please Provide Valid Email!")
    if (!password || !valid.isPassword(password)) throw new Error("Invalid Password!")
    if (!username || username.length < 2) throw new Error("Invalid Username!")
    
    const user = await UserModel.findOne({email})

    if (user) throw new Error("The User Is Alredy Exists!")

    const data = await UserModel.create({
      username,
      email,
      password: await bcrypt.hash(password,10),
    });
    const accessToken = generateAccessToken(data._id)
    return res.json({
      message: `User ${username} registered successfully`,
      data: data,
      accessToke:accessToken ,
    });
}

// This Is Login Controller
export async function login(
  req: Request<{}, {}, AuthLoginBody>,
  res: Response<AuthLoginResponse>
): Promise<ControllerMethodReturn> {
    const {email, password} = req.body;

    if (!email || !valid.isEmail(email)) throw new Error("Please Provide Valid Email!")
    if (!password || !valid.isPassword(password)) throw new Error("Invalid Password!")

    const user = await UserModel.findOne({email});

    if (!user) throw new Error("Invalid Email!")
    if(!await bcrypt.compare(password, user.password)) throw new Error("Invalid Password!")

    const accessToken = generateAccessToken(user._id)
    const refreshToken = generateRefreshToken(user._id)

    return res.json({message: `User ${user.username} logged in successfully`,
      data: user,
      accessToke:accessToken ,
    }).cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true
    })
}