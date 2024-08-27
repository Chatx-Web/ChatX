import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URL || 'mongodb://localhost:27017',
}

export default config