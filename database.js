//importing the mysql2 library
const mysql = require("mysql2");

console.log(process.env['HOST']);

// 1. Creating the connection
const mysqlConnection = mysql.createConnection({
    host: process.env['HOST'],
    port: process.env["PORT"],
    user: process.env["USER"],
    database: process.env["DATABASE"],
    password: process.env["PASSWORD"],
    multipleStatements: true,
});

//2. Connecting to a database. Handling succes and error cases.
mysqlConnection.connect((err)=>{
    if (!err){
        console.log('Connected');
    } else {
        console.log(err);
        console.log('Connection failed')
    }
});