// initialize Node.js package
var mysql = require("mysql");
var connection;

// if connecting remotely, use ClearDB
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
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