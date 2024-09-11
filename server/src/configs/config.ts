import dotenv from "dotenv";

dotenv.config();

type configType = {
    port: number,
    mongoURI: string,
    accessTokenSecret: string,
    refreshTokenSecret: string,
}

const config: configType = {
    port: parseInt(process.env.PORT || "5000"),
    mongoURI: process.env.MONGODB_URI || "",
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "",
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "",
} 

if (!config.mongoURI) {
    throw new Error("MongoDB URI is missing. Please add it to your .env file.");
}

export default config;