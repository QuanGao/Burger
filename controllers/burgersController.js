
const burger = require("../models/burger.js");

const express = require("express");

const router = express.Router();

router.get("/index", function(req, res) {

    burger.allburger(function(data){
        console.log(data);
        let hbsObji = {
            burgers: data
        };
        res.render("index", hbsObji)
    })


});

router.post("/api/", function(req, res) {
    res.send(data);
});





module.exports = router;