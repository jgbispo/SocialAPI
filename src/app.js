require("dotenv").config();
const cors = require("cors");
const routes = require("./router");
const morgan = require("morgan");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(routes);

module.exports = app;