let express = require("express");
let path = require("path");
const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js")

let app = express();
let PORT = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//html routes
//app.use("/", htmlRoutes);
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"survey.html"))
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
});


//api routes
app.use("/api", apiRoutes);
app.use(express.static("resources"));

/*app.get("/api/friends", function (req, res) {
    return res.json(friendArr)
});

app.post("/api/friends", function (req, res) {
    console.log(req.body)
    res.end;
});*/

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
