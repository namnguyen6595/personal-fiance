"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = require("./controller/connection/mysql");
const app = (0, express_1.default)();
app.use(express_1.default.json);
dotenv_1.default.config();
(0, mysql_1.connectDb)();
app.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT} `);
});
