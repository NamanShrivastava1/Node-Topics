const express = require("express");
const app = express();

// Query
// Example URL: http://localhost:3000/search?term=javascript&page=2
app.get("/search", (req, res) => {
  const { term, page } = req.query;
  res.send(`Searching for ${term} on page ${page}`);
});

// Params
app.get("/:file{.:ext}", (req, res) => {
  console.log(req.params);
  // GET /image.png => req.params = { file: 'image', ext: 'png' }
  // GET /image => req.params = { file: 'image' }
  res.send("ok");
});

// Route handlers
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  },
);

const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

// Route Chaining
app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a new book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
