import mysql from "mysql"

const connectDb = function () {
    const con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: 'namnguyen',
        password: process.env.MYSQL_ROOT_PASSWORD,
        // database: process.env.MYSQL_DATABASE
    })

    // Connecting to db

    con.connect(function(err:Error) {
        if (err) {
            console.log("connect have some error", err)
            throw err
        }

        console.log("Connected to database!!!")
    })

    return con
}

const createTable = function(tableName:String) {
    const query = `CREATE TABLE ${tableName}`
    
}

export {
    connectDb,
    createTable
}