import mongoose from 'mongoose';
import config from '../config/config.js';

/**
 * Establishes a connection to the MongoDB database.
 *
 * @return {Promise<void>} A promise that resolves when the connection is established, or rejects with an error.
 */
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;