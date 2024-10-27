import { createLogger, format, transports } from "winston";
const { printf, combine, label, timestamp, prettyPrint, json } = format;
import { green, gray, bold } from "colorette";

const infoFormate = printf(({ level, message, timestamp, label }) => {
    return `${gray(timestamp)} ${green(`[${label}]`)} ${bold(level)} : ${gray(message)}`
})

export const infoLogger = createLogger({
    level: 'info',
    format:combine(
        label({label: "server"}),
        timestamp({
            format: 'HH:mm:ss'
        }),
        prettyPrint(),
        infoFormate
    ),
    transports: [new transports.Console()]
})

export const errorLogger = createLogger({
    level: 'error',
    format: combine(
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename:"./logs/errors.log",level:'error'})
    ]
})
