import { app } from "./app";
import connectDB from "./db/connect-db";
import config from "./config/config";

const port: number = config.port;
const server = async () => {
  try{
    await connectDB();
    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });
  }catch(error){
    console.log(error);
  }
}

server();