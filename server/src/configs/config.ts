import dotenv from "dotenv";

dotenv.config();

type configType = {
    port: number,
    mongoURI: string
}

const config: configType = {
    port: parseInt(process.env.PORT || "5000"),
    mongoURI: process.env.MONGODB_URI || ""
} 

if (!config.mongoURI) {
    throw new Error("MongoDB URI is missing. Please add it to your .env file.");
}

export default config;