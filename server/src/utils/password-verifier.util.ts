import { UserSchema } from "../api/v1/models/user.model";
import { DocumentType } from "@typegoose/typegoose";
import argon2 from "argon2";

async function validatePassword (this: DocumentType<UserSchema>, pass: string) {
    try{
        return await argon2.verify(this.password, pass);
    } catch(error){
        console.error("Error While Verifying Password", error);
        return false;
    }
}

export default validatePassword;