//I need express
const express = require("express");
const router = express.Router();

//I need the code from friends.js
let friendMod = require("../data/friends.js")



router.get("/api/friends", function (req, res) {
    return res.json(friendMod.getIt());
});

//post data from the client side
router.post("/api/friends", function (req, res) {
    //take the data passed in and pass it to the addit function from the friends.js
    let bestie = friendMod.addIt(req.body);
    console.log("========================================================")
    console.log("bestie");
    console.log(bestie);
    console.log("========================================================")

    //return the results to the client side
    res.json(bestie);
});

//make the router vaiable available to the outside world
module.exports = router;