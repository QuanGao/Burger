const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/index", function (req, res) {
    burger.allburger(function (data) {
        let hbsObji = {
            burgers: data
        };
        res.render("index", hbsObji)
    })
});

router.post("/api/burgers", function (req, res) {
    let newBurgerData = {
        "burger_name": req.body.burger_name,
        "devoured": false
    }

    burger.addburger(newBurgerData, function (result) {
        res.json({
            id: result.insertId
        });
    })
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = {
        id: req.params.id
    };
    let toEaten = {
        devoured: true
    }

    burger.updateBurger(toEaten, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

router.delete("/api/burgers/:id", function (req, res) {
    let condition = {
        id: req.params.id
    };

    burger.deleteBurger(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end()
        } else {
            return res.status(200).end();
        }
    })
})

module.exports = router;