import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { createUser, verifyEmail } from "./routes/user.js";
const app = express();
const port = 8080;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error Connecting to MongoDb ${err}`));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/register", createUser);
app.get("/verify:token", verifyEmail);
