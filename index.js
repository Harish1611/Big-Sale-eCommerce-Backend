const connectToMongo = require("./config");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

connectToMongo();

const port = 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => {
  console.log(
    `Big Sale - eCommerce backend listening at http://localhost:${port}`
  );
});
