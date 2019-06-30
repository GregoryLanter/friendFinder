/// hey I need  express and path
let express = require("express");
let path = require("path");

let app = express();

//get a port to run default to 8080
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(path.join(__dirname, "/app"));

app.use(express.static(path.join(__dirname, "/app")))
//const apiRoutes = require("./app/routing/apiRoutes.js");
//const htmlRoutes = require("./app/routing/htmlRoutes.js")
const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js");


app.use("/", htmlRoutes);
app.use("/", apiRoutes);
/*//html routes
app.use("/", htmlRoutes);
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"/app/public/survey.html"))
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
});*/


//api routes
//app.use("/api", apiRoutes);
//app.use(express.static("resources"));

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
