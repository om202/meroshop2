import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { userSchema } from "./schemas.js";
import cors from "cors";

mongoose.connect("mongodb://localhost:27017/meroshop");

const app = express();
app.use(express.json());
app.use(cors());

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create a new user
  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });

  // Save the new user
  try {
    await newUser.save();
    console.log("User saved successfully");
    res.send({"success": "User saved successfully"});
  } catch (err) {
    console.error("Error saving user", err.message); 
    res.status(500).send({"error": JSON.stringify(err.message)});
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(500).send({"error": "User not found"});
  }

  // Check the password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(500).send({"error": "Invalid password"});
  }

  res.send({"success": "User logged in successfully"});
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});