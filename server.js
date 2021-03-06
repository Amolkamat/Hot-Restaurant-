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


var reservations = [{
  name: "Amol",
  PhoneNumber: "1111111111",
  Email: 'amol@amol.com',
  ID: 1
}, {
  name: "Dan",
  PhoneNumber: "2222222222",
  Email: 'dan@dan.com',
  ID: 2

}, {
  name: "ila",
  PhoneNumber: "3333333333",
  Email: 'ila@ila.com',
  ID: 3
},
{
  name: "issac",
  PhoneNumber: "444444444",
  Email: 'issac@issac.com',
  ID: 4
},
{
  name: "Mirita",
  PhoneNumber: "6666666666",
  Email: 'mirita@mirita.com',
  ID: 5
}];

var waitingList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/api/tables", function(req,res){
  res.json(reservations);
});

// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
  var reservation = req.body;
  reservations.push(reservation);
  res.json(reservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
