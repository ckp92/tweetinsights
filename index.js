const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const keys = require("./config/keys");
const db = require("./config/DBConfig");
require("./models/Data");
require("./models/Email");

// MONGOOSE CONFIG -------------------------------------------------------------------------------------------
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("DB connected"));

// APP CONFIG ------------------------------------------------------------------------------------------------
const app = express();

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// morgan
app.use(morgan("combined"));

// ROUTES ----------------------------------------------------------------------------------------------------

app.get("/api/test", (req, res) => res.send({ hello: "World!" }));

// email routes
require("./routes/emailRoutes")(app);
// data routes
require("./routes/dataRoutes")(app);

// make express behave correctly in production environment
if (process.env.NODE_ENV === "production") {
  // serve static files from the React app
  app.use(express.static("client/build"));

  // tell express to serve up 'index.html' if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// START SERVER ----------------------------------------------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening @ ${PORT}`));
