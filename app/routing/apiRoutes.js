const express = require("express");
const router = express.Router();
let friendMod = require("../data/friends.js")


router.get("/friends", function (req, res) {
    return res.json(friendMod.getIt());
});

router.post("/api/friends", function (req, res) {
    console.log(req.body)
    newFriend = {
        "name": "Joey",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }

    friendMod.addIt(newFriend);
    res.end;
});

module.exports = router;