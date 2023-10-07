import { createLogger, format, transports } from "winston";

const logger = createLogger({
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.simple()
    ),
    transports: [
        new transports.Console()
    ]
});

export = logger;