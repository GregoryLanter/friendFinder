//we need express
const express = require("express");
const router = express.Router();

//we need path
let path = require("path");

//we need friends.js, well probably not but its working so i dont want to take it out
let friendMod = require("../data/friends.js");

//html routes

//send out the server.html page
router.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});

router.get("/", function(req,res){
    res.sendfile(path.join(__dirname,"../public/home.html"));
});

//send router out so it ccan be used
module.exports = router;