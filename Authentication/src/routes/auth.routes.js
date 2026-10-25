import Router from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const isUserExist = await userModel.findOne({ email: email });
  if (isUserExist) {
    return res.status(400).json({
      message: "Already a User",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashPassword,
  });

  res.status(201).json({
    message: "User Registered",
    user,
  });
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid Email or Password",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid Email or Password",
    });
  }

  const token = jwt.sign({ _id: user._id }, "vbha389hf");

  res.cookie("token", token);

  res.status(201).json({
    message: "Login Successful",
    user,
    token,
  });
});

router.get("/get-all", authMiddleware, async (req, res) => {
  const allUsers = await userModel.find();

  res.status(200).json({
    message: "All users Fetched",
    allUsers,
  });
});

export default router;
