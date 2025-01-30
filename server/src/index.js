import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8500;
const ORIGIN = process.env.ORIGIN || "http://localhost:3000";

app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
