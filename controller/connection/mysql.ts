import mysql from 'mysql';

const sql = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'namnguyen',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

export default sql
