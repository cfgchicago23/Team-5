import { createLogger, format, transports } from "winston";

const logger = createLogger({
    level: '0',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.simple()
    ),
    defaultMeta: { service: 'Code For Good Team 5' },
    transports: [
        new transports.File({
            filename: '/tmp/log.txt',
            level: '0'
        })
    ]
});

export = logger;