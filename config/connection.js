const mysql = require("mysql");

const connection = process.env.JAWSDB_URL ? mysql.createConnection(process.env.JAWSDB_URL):
    mysql.createConnection({
        host: "localhost",
        database: "burgers_db",
        user: "root",
        password: "",
        port: 3306
    });

module.exports = connection;