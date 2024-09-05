import { MessageResponse } from "../../types";
import { UserTypeWithoutId } from "../user/types";

export interface AuthRegisterBody extends UserTypeWithoutId {}

export interface AuthRegisterResponse extends MessageResponse {}

export interface AuthLoginBody {
  email: string;
  password: string;
}

export type AuthLoginResponse =
  | MessageResponse
  | {
      authToken: string;
    };
