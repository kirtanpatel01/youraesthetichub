import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// import dotenv from "dotenv";

// dotenv.config();

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
  console.log("MongoDB connected");
};

export default connectDB;
