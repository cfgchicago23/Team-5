"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./logger"));
global.logger = logger_1.default;
const log_1 = require("./middleware/log");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '1gb' }));
app.use(express_1.default.text());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(log_1.LogRequestBody);
app.get("/", (req, res) => {
    res.send("hello");
});
//# sourceMappingURL=app.js.map