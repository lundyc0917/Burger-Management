var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgerController.js");
app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});