import { app } from "./app";
import connectDB from "./db/connect-db";
import config from "./configs/config";
import { infoLogger, errorLogger } from "./loggers/logger"

const port: number = config.port;
const server = async () => {
  try{
    await connectDB();
    app.listen(port, () => {
      infoLogger.info(`Listening: http://localhost:${port}`);
    });
  }catch(error){
    errorLogger.error(error)
  }
}

server();
