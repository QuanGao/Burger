
const connection = require("../config/connection.js")

const orm = {

    selectAll: function (tb, cb) {
        let querystring = `SELECT * FROM ${tb}`
        connection.query(querystring, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function (tb, newObj, cb) {
        let querystring = `INSERT INTO ${tb} SET ?`
        connection.query(querystring, newObj, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    
    updateOne: function (tb, updatedObj, condition, cb) {
        let querystring = `UPDATE ${tb} SET ?  WHERE ?`;
        connection.query(querystring, [updatedObj,condition], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;