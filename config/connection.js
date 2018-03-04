const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "db_name",
    user: "root",
    password: "",
    port: 3306
});


module.exports = connection;