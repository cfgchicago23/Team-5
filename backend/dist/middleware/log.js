"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogRequestBody = void 0;
function LogRequestBody(req, res, next) {
    logger.log('debug', 'Request Body');
    logger.log('debug', req.body);
    next();
}
exports.LogRequestBody = LogRequestBody;
//# sourceMappingURL=log.js.map