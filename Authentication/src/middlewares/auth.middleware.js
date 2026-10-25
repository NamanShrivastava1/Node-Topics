import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(400).json({
      message: "No Token Found",
    });
  }

  const decoded = jwt.verify(token, "vbha389hf");
  const user = await userModel.findById(decoded._id);
  if (!user) {
    return res.status(400).json({
      message: "Invalid Token",
    });
  }
  req.user = user;
  next();
};

export default authMiddleware;
