const express = require("express");
const router = express.Router();
let friendMod = require("../data/friends.js");

//html routes
router.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"survey.html"))
});

router.get("/", function(req,res){
    const myPath = path.join(__dirname.substring(0,__dirname.indexOf("app")), "home.html");
    console.log(myPath);
    //res.sendFile(path.join(__dirname.substring(0,__dirname.indexOf("app")), "home.html"));
});

module.exports = router;