const orm = require("../config/orm.js");

const burger = {

    allburger: function (cb) {
        orm.selectAll("burgers", cb);
    },

    addburger: function (newObj, cb) {
        orm.insertOne("burgers", newObj, cb);

    },

    updateBurger: function (updatedObj, condition, cb) {
        orm.updateOne("burgers", updatedObj, condition, cb);
    },

    deleteBurger: function (condition, cb){
        orm.deleteOne("burgers", condition, cb);
    }
}

module.exports = burger;