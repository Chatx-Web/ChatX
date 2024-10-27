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
import jwt from "jsonwebtoken";

// This Method Registers New User
export async function register(
  req: Request<{}, {}, AuthRegisterBody>,
  res: Response<AuthRegisterResponse>,
  next:NextFunction
): Promise<ControllerMethodReturn> {
    // Destructured The Request body
    const { name,username, password, email } = req.body;

    // Validating Email , Password And Username
    if (!email || !valid.isEmail(email)) throw new Error("Invalid Email!,Please Provide Valid Email!")
    if (!password || !valid.isPassword(password)) throw new Error("Invalid Password!, Please Provide Validate Password")
    if (!username || username.length < 2) throw new Error("Invalid Username!")
    
    // Looking For User In Database Using Email
    const user = await UserModel.findOne({email})

    // If User Exists Throw Error
    if (user) throw new Error("The User Is Alredy Exists!")

    // If User Doesn't Exist Then Cretae The User.
    const data = await UserModel.create({
      name,
      username,
      email,
      password: await bcrypt.hash(password,10),
    });

    // Generate Access Token
    const accessToken = generateAccessToken(data._id)

    // Return The Access Token To Response
    return res.json({
      message: `User ${username} registered successfully`,
      data: data,
      accessToke:accessToken ,
    });
}

// This Method Verifies The Existing User
export async function login(
  req: Request<{}, {}, AuthLoginBody>,
  res: Response<AuthLoginResponse>
): Promise<ControllerMethodReturn> {

    // Destructuring The Request Body
    const {email, password} = req.body;

    // Validating Email And Password
    if (!email || !valid.isEmail(email)) throw new Error("Please Provide Valid Email!")
    if (!password || !valid.isPassword(password)) throw new Error("Invalid Password!")

    // Finding The User In Database
    const user = await UserModel.findOne({email});

    // If User Not Found Then Throw The Error
    if (!user) throw new Error("Email Not Found!")

    // Throw The Error Of Password Don't Match
    if(!await bcrypt.compare(password, user.password)) throw new Error("Invalid Password!")

    // Generate The Access And Redresh Tokens
    const accessToken = generateAccessToken(user._id)
    const refreshToken = generateRefreshToken(user._id)

    // Return The AccessToken To Response And Set The Redresh Token To http Cookie
    return res.json({message: `User ${user.username} logged in successfully`,
      data: user,
      accessToke:accessToken ,
    }).cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true
    })
}

// This Method Validates The RefreshToken And Generates New AccesToken
export const refreshToken = async(req:Request,res: Response) => {

  // Look For The Refresh Token In Client Cookie
  const refreshToken = req.cookies.refreshToken;

  // If Refresh Token Not Found Then Throw Error
  if(!refreshToken) throw new Error("Refresh Token Not Found!")
  
  // Decode The Refresh Token
  const decode = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!)

  // If Invalid Token Then Throw Error
  if(!decode) throw new Error("Invalid Refresh Token!")

  // If Decoded Token's Type Is Not Object Then Throw Error
  if(typeof decode != 'object' ) throw new Error("Invalid Refresh Token!")

  // Get The Id From decode Object
  const id = decode.id

  // Find The User In Database
  const user = await UserModel.findById(id)

  // If User Not Found In Database Then Therow Error
  if(!user) throw new Error("Unauthorized User!")  

  // Generate The Access Token
  const accessToken = generateAccessToken(user._id)  

  // Return The Access Token
  return res.json({accessToken})
}

// This Methos Clears The Cookies
export const logout = (req: Request, res: Response) => {
  // Clears The Access Token
  res.clearCookie('refreshToken')
  // Return The Logout Message
  res.json({ message: 'Logged out successfully' })
}

// export const authenticateToken = (req:Request,res:Response) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401).json({message:"No Token Provided"});
//   const user =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)
//   return res.json(user);
// }