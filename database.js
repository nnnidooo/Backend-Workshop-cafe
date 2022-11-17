// Importing the mysql2 library
const mysql = require("mysql2");
require('dotenv').config();
console.log(process.env.host);

// 1. Creating the connection
const mysqlConnection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
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