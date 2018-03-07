
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

router.put("/api/burgers/", function(req, res) {
    let condition = {id: req.body.id};
    let toEaten = {devoured: true}
  
    burger.updateBurger(toEaten, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
  });
  





module.exports = router;