// initialize Node.js package
var mysql = require("mysql");
var connection;

// mysql://b7ea05b0c8d6a1:8e5ddd1f@us-cdbr-iron-east-02.cleardb.net/heroku_c507594a2c82451?reconnect=true
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection({
        host: "us-cdbr-iron-east-02.cleardb.net",
        user: "b7ea05b0c8d6a1",
        password: "8e5ddd1f",
        database: "heroku_c507594a2c82451"
    });
} else {
    // creates MySQL server connection
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

// connects to MySQL server
connection.connect(function (error) {
    if (error) {
        console.error("MYSQL CONNECTION ERROR: " + error);
    }
    console.log("Connected to MySQL server.");
});

// exports connection
module.exports = connection;