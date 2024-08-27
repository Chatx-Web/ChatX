/**
 * This module loads environment variables from a .env file into `process.env`
 * and sets up a configuration object for the application.
 * 
 * The `dotenv` package is used to load the environment variables.
 * 
 * The configuration object contains:
 * - `PORT`: The port number on which the application will run. It defaults to 3000 if not specified in the environment variables.
 * - `MONGO_URI`: The URI for connecting to the MongoDB database. It defaults to 'mongodb://localhost:27017' if not specified in the environment variables.
 * 
 * @module config
 */

import dotenv from 'dotenv';

// Load environment variables from .env file into process.env
dotenv.config();

// Configuration object
const config = {
    PORT: process.env.PORT || 3000, // Application port
    MONGO_URI: process.env.MONGO_URL || 'mongodb://localhost:27017', // MongoDB connection URI
}

export default config;