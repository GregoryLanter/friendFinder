const express = require("express");
const router = express.Router();
let friendMod = require("../data/friends.js")


router.get("/api/friends", function (req, res) {
    return res.json(friendMod.getIt());
});

router.post("/api/friends", function (req, res) {
    let bestie = friendMod.addIt(req.body);
    console.log("========================================================")
    console.log("bestie");
    console.log(bestie);
    console.log("========================================================")


    res.json(bestie);
});

module.exports = router;