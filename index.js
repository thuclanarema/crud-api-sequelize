require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
//parser requests of content-type - application/json
app.use(bodyParser.json());
//parser requests of content-type - application/
app.use(bodyParser.urlencoded({ extended: true }));
//simple routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to VietNam apllication" });
});

const db = require("./app/models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err) => {
    console.log(err.message);
  });

require("./app/routes/tutorial.router")(app);

//set port , listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server i running on ${PORT}`);
});
