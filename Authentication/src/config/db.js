import mongoose from "mongoose";

const connectToDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/Auth")
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.log("DB Error: ", err);
    });
};

export default connectToDb;
