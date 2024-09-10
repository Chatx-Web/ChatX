import { getModelForClass, modelOptions, pre, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class UserSchema {
    @prop({ required: true, unique: true })
    public username!: string;

    @prop({ lowercase: true, required: true, unique: true })
    public email!: string;

    @prop({ required: true })
    public password!: string;

    @prop({ required: true, default: 0 })
    public verificationCode!: string;

    @prop({ default: null })
    public passwordResetCode!: string | null;

    @prop({ required: true, default: false })   
    public isVerified!: boolean;  // Fix the typo here
}

export const UserModel = getModelForClass(UserSchema);
