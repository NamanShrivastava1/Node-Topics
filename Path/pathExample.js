var express = require("express"),
  path = require("path"),
  app = express();

//option 1 using path!
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//option 2 no path module.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
