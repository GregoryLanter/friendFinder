let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let friendArr = {
    "name": "Ahmed",
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

//html routes
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"survey.html"))
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"))
});


//api routes
app.get("/api/friends", function (req, res) {
    return res.json(friendArr)
});

app.post("/api/friends", function (req, res) {
    console.log(req.body)
    res.end;
});
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
