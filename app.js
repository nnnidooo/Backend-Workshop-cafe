const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(cors({
    origin: '*'
}));

const mysqlConnection = require("./database");

app.get('/', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM cafes;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

server.listen(3000,(port) => {
    console.log('Listening on port ' + server.address().port);
});

module.exports = app;

