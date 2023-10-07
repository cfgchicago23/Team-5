"use strict";
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    level: '1',
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.simple()),
    defaultMeta: { service: 'Code For Good Team 5' },
    transports: [
        new winston_1.transports.File({
            filename: '/tmp/log.txt',
            level: '1'
        })
    ]
});
module.exports = logger;
//# sourceMappingURL=logger.js.map