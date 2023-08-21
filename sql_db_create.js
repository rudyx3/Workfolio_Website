var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root" // provide your own password.
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql_database = "CREATE DATABASE db2";
    conn.query(sql_database, function (err, result) {
        if (err) throw err;
        console.log("db2 Database Created");
    });
});
