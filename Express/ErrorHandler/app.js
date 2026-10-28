const express = require("express");
const errorHandler = require("./error");

const app = express();
app.use(express.json());

app.get("/error-sync", (req, res) => {
  throw new Error("Something went wrong in our synchronous code!");
});

app.use(errorHandler);

app.listen(3000, () => console.log("Server running on port 3000"));
