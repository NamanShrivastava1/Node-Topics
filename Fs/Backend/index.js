const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  console.log("okk");
  res.json({
    message: "ok",
  });
});

app.post("/create", (req, res) => {
  const { fileName, fileData } = req.body;

  const filePath = "./uploads/" + fileName;

  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
      res.send("Error in Creating File");
    } else {
      res.send("File Created");
    }
  });
});

app.get("/read/:fileName", (req, res) => {
  const filePath = "./uploads/" + req.params.fileName;
  fs.readFile(
    filePath,
    {
      encoding: "utf-8",
    },
    (err, data) => {
      if (err) {
        console.log(err);
        res.send("Error in Reading File");
      } else {
        res.send(data);
      }
    },
  );
});

app.get("/get-all", (req, res) => {
  fs.readdir("./uploads", (err, file) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.send(file);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
