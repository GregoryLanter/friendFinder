const express = require("express");
const router = express.Router();
let path = require("path");
let friendMod = require("../data/friends.js");

//html routes
router.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});

router.get("/", function(req,res){
    res.sendfile(path.join(__dirname,"../public/home.html"));
});

module.exports = router;