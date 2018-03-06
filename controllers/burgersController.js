
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

router.post("/api/burgers", function (req, res) {
    // console.log(req.body)

    let newBurgerData = {
        "burger_name": req.body.burger_name, 
        "devoured": false
    }
    burger.addburger(newBurgerData, function (result) {

        res.json({
            id:result.insertId
        });
        console.log(result.insertId)
    })
    
});





module.exports = router;