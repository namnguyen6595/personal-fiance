"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = exports.connectDb = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connectDb = function () {
    const con = mysql_1.default.createConnection({
        host: "localhost",
        port: 3306,
        user: 'namnguyen',
        password: process.env.MYSQL_ROOT_PASSWORD,
        // database: process.env.MYSQL_DATABASE
    });
    // Connecting to db
    con.connect(function (err) {
        if (err) {
            console.log("connect have some error", err);
            throw err;
        }
        console.log("Connected to database!!!");
    });
};
exports.connectDb = connectDb;
const createTable = function (tableName) {
    const query = `CREATE TABLE ${tableName}`;
};
exports.createTable = createTable;
