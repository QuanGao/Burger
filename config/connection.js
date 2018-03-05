const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "burgers_db",
    user: "root",
    password: "",
    port: 3306
});


module.exports = connection;