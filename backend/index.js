import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { productSchema, userSchema } from "./schemas.js";
import cors from "cors";
import { v4 } from 'uuid';

mongoose.connect("mongodb://localhost:27017/meroshop-prod");

const app = express();
app.use(express.json());
app.use(cors());

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

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

  let isAdmin = false;

  if (email === 'admin@meroshop.com') {
    isAdmin = true;
  }

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

  if (isAdmin) {
    return res.send({"success": "Admin logged in successfully", "isAdmin": true});
  }

  res.send({"success": "User logged in successfully", "isAdmin": false});
});

app.post("/add-product", async (req, res) => {
  const { title, description, price, image } = req.body;

  const newProduct = new Product({
    id: String(v4()),
    title: title,
    description: description,
    price: price,
    image: image,
  });

  try {
    await newProduct.save();
    console.log("Product saved successfully");
    res.send({"success": "Product saved successfully"});
  } catch (err) {
    console.error("Error saving product", err.message);
    res.status(500).send({"error": JSON.stringify(err.message)});
  }
});

app.get("/product-id-list", async (req, res) => {
  const products = await Product.find({});
  const productIds = products.map((product) => product.id);
  res.send(productIds);
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/delete-product", async (req, res) => {
  const { id } = req.body;
  try {
    await Product.deleteOne({ id: id });
    res.send({"success": "Product deleted successfully"});
  } catch (err) {
    console.error("Error deleting product", err.message);
    res.status(500).send({"error": JSON.stringify(err.message)});
  }
});

app.post("/update-product", async (req, res) => {
  const { id, title, description, price, image } = req.body;

  console.log("update info", id, title, description, price, image)

  let update = {};
  if (title) update.title = title;
  if (description) update.description = description;
  if (price) update.price = price;
  if (image) update.image = image;

  try {
    await Product.updateOne({ id: id }, update);
    res.send({"success": "Product updated successfully"});
  } catch (err) {
    console.error("Error updating product", err.message);
    res.status(500).send({"error": JSON.stringify(err.message)});
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});