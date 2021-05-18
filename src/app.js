require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

module.exports = app;