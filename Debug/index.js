const express = require("express");
const debug = require("debug")("myapp:server");

const app = express();

app.get("/", (req, res) => {
  debug("handling request from %s", req.ip);
  res.send("Hello World!");
});

app.listen(3000, () => {
  debug("listening on port 3000");
});
