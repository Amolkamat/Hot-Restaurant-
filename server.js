// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var characters = [{
  routeName: "Amol",
  name: "Amol",
  PhoneNumber: "1111111111",
  Email: 'amol@amol.com',
  ID: 1
}, {

  routeName: "Dan",
  name: "Dan",
  PhoneNumber: "2222222222",
  Email: 'dan@dan.com',
  ID: 2

}, {
  routeName: "issac",
  name: "issac",
  PhoneNumber: "3333333333",
  Email: 'issac@issac.com',
  ID: 3
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});


// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});