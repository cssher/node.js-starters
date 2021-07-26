let express = require("express");

let app = express();

//===================================================================
//BASIC EXPRESS SET-UP

// app.get("/", (req, res) => {
//   res.send("This is Homepage");
// });

// app.get("/contact", (req, res) => {
//   res.send("This is Contact Page");
// });

// app.get("/profile/:id", (req, res) => {
//     res.send(`This is Profile Page with params ${req.params.id}`);
//   });

//===================================================================
//SERVING HTML FILES

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/home.html");
// });

// app.get("/contact", (req, res) => {
//     res.sendFile(__dirname + "/contact.html");
// });

//======================================================================
//TEMPLATING ENGINES - SENDING PARAMS TO FRONTEND TO BE RENDERED IN VIEW

// app.set("view engine", "ejs");

// app.get("/profile/:name", (req, res) => {
//   res.render("profile", { personName: req.params.name });
// });

// http://localhost:3000/profile/syed

//========================================================================
//APPLYING MIDDLEWARE TO SERVE STATIC FILES LIKE CSS FILES OR IMAGES ETC.

// app.set("view engine", "ejs");

// app.use("/assets", express.static("assets"));

// app.get("/middleware", (req, res) => {
//   res.render("middleware");
// });

//==========================================================================
//QUERY STRINGS - SENDIND DATA OBJECT

// app.set("view engine", "ejs");

// app.get("/query", (req, res) => {
//   let queryString = req.query;
//   //queryString {name: "Syed", age: 27, natinality: "Indian"}
//   res.render("query", { data: queryString });
// });

// We send query params like this - http://localhost:3000/query?name=Syed&age=27&nationality=Indian

//==========================================================================
//HANDLE POST (FORM) DATA BY USING A PACKAGE CALLED body-parser.

//BODY-PARSER IS DEPRECATED - need to find a new way to do POST requests

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.set("view engine", "ejs");

// app.get("/postform", (req, res) => {
//   res.render("postform");
// });

// app.post("/postform", (req, res) => {
//   console.log(req.body);
//   res.send({ data: req.body });
// });

//==========================================================================

app.listen(3000);

//Just uncomment any one section at a time and use.
