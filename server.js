require("dotenv").config();
const express = require("express");
const configViewEngine = require("../blog/src/config/viewEngine");
const webRouter = require("./src/routes/router");

//Config
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST_NAME;
