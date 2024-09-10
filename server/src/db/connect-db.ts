import mongoose from "mongoose";
import config from "../configs/config";

export async function connectDB() {
    try {
        const mongoURI:string = config.mongoURI;

        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;