const express = require('express');
const helloRouter = express.Router();

helloRouter.get("/", (req, res) => {
  res.end("<h1>hello</h1>");
});

module.exports = helloRouter