const express = require("express");
const file = require("../Models/file");
const upload = require("../Controllers/uploadAtServer");
const route = express.Router();

route.post('/upload',upload);

module.exports(route);