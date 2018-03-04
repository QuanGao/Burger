
const burger = require("../models/burger.js");

const express = require("express");

const router = express.Router();

router.get("/index", function(req, res) {
    res.render(data);
});

router.post("/api/", function(req, res) {
    res.send(data);
});





module.exports = router;