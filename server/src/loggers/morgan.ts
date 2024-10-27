import { infoLogger } from "./logger";

export const morganFormate = ":method :url :status :response-time ms";

export const morganData = {
    stream:{
        write:(message: string) => {
            const [ method, url, status, responseTime ] = message.split(" ") 
            infoLogger.info(`${method} ${url} ${status} - ${responseTime}ms`)
        }
    }
}