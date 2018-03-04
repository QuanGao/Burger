const orm = require("../config/orm.js");

const burger = {

    allburger: function (cb) {
        orm.selectAll("burgers", cb)
        // orm.selectAll("burgers", function(res){cb(res)})
    },

    addburger: function (tb, newObj, cb) {
        orm.insertOne("burgers", newObj, cb)

    },

    updateBurger: function (tb, updatedObj, condition, cb) {
        orm.updateOne("burgers", updatedObj, condition, cb)
    }
}

module.exports = burger;