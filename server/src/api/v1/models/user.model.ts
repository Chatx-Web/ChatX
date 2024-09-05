import { getModelForClass, modelOptions, pre, prop } from "@typegoose/typegoose";
import argon2 from "argon2";
import { nanoid } from "nanoid";

@pre<UserSchema>("save", async function () {
    if(!this.isModified("password")) return;
    const hash = await argon2.hash(this.password);
    this.password = hash;
})
@modelOptions({ schemaOptions: { timestamps: true } })
export class UserSchema {
    @prop({ required: true, unique: true })
    public username!: string;

    @prop({ lowercase: true, required: true, unique: true })
    public email!: string;

    @prop({ required: true })
    public password!: string;

    @prop({ required: true, default: () => nanoid() })
    public verificationCode!: string;

    public passwordResetCode!: string | null;

    @prop({ required: true ,default: false })   
    public isVrified!: boolean;
}

export const UserModel = getModelForClass(UserSchema);