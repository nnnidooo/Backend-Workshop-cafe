const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.use(cors({
    origin: '*'
}));

// ========== READ: read all cafes from database ========== //
const mysqlConnection = require("./database");
console.log(mysqlConnection)

app.get("/cafes", (req, res) => {
    const query = "SELECT * FROM cafe_database.cafes;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    )
});

// ========== READ: read every cafes' id from database ========== //
app.get("/cafes/:id", (req, res) => {
    const query = "SELECT * FROM cafe_database.cafes WHERE cafe_id = ?;";
    const id = req.params.id;
    mysqlConnection.query(
        query,
        [id],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    )
});

// ========== READ: read all users from database ========== //
app.get("/users", (req, res) => {
    const query = "SELECT * FROM cafe_database.users;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    )
});

// ========== READ: read every users id from database ========== //
app.get("/users/:id", (req, res) => {
    const query = "SELECT * FROM cafe_database.users WHERE user_id = ?;";
    const id = req.params.id;
    mysqlConnection.query(
        query,
        [id],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    )
});

// ========== READ: read all favorites from database ========== //
app.get("/favorites", (req, res) => {
    const query = "SELECT * FROM cafe_database.favorites;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    )
});

app.post('/user/create', (req, res) => {
    const userName = req.body.name;
    console.log(userName)
    res.sendStatus(200);
});

server.listen(3000,(port) => {
    console.log('Listening on port ' + server.address().port);
});

module.exports = app;