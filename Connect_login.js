// JavaScript source code
const mysql = require("mysql");
const express = require("express");

const app = express();
app.use("/assets", express.static("assets"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "128project"
});

connection.connect(function (error) {
    if (error) throw error
    else console.log("connected to database");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Login.html");
})

app.listen(8080);