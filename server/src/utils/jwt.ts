import { JWTUserType } from "../api/v1/user/types";
import jwt from "jsonwebtoken";
require("dotenv").config();

export function createJwtToken(payload: JWTUserType): string {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
  return token;
}
