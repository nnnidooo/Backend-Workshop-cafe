// Importing the mysql2 library
const mysql = require("mysql2");
require('dotenv').config();
console.log(process.env.host);
console.log(process.env.user);

// 1. Creating the connection
const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.MYSQLUSER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true,
});

// 2. Connecting to the database. Handling success and error cases
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log(err);
        console.log("Connection Failed");
    }
});

module.exports = mysqlConnection;