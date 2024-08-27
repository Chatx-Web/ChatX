import app from "./app.js";
import connectDB from "./db/db.js";
import config from "./config/config.js";

/**
 * Initializes and starts the server, connecting to the database and listening on a specified port.
 *
 * @return {Promise<void>} A promise that resolves when the server is running.
 */
const server = async () => {
    try {
        await connectDB();
        app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

server();