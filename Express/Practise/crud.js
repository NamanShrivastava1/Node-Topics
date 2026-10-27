const express = require("express");
const app = express();

app.use(express.json());

const data = [
  {
    id: 1,
    name: "Naman",
  },
  {
    id: 2,
    name: "Hello",
  },
];

app.get("/data", (req, res) => {
  res.status(200).json({
    message: "Data fetched successfully.",
    data: data,
  });
});

app.post("/data", (req, res) => {
  const { id, name } = req.body;

  const newData = { id, name };

  data.push(newData);

  res.status(201).json({
    message: "Data created successfully.",
    data: newData,
  });
});

app.put("/updateData/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = data.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(404).json({ message: "No id matched." });
  }

  user.name = name;

  res.status(200).json({
    message: "User updated successfully",
    data: user,
  });
});

app.patch("/updateData/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = data.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(404).json({ message: "No id matched." });
  }

  user.name = name;

  res.status(200).json({
    message: "User updated successfully",
    data: user,
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const user = data.find((u) => u.id === Number(id));
  
  if (user === -1) {
    return res.status(404).json({ message: "No id matched." });
  }

  const deletedUser = data.splice(user + 1, 1)[0];

  res.status(200).json({
    message: "User deleted successfully",
    data: deletedUser,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
