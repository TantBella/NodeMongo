require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const Product = require("./models/productModels");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my MongoApi");
});

// app.post("/blogpost", (req, res) => {
//   res.send("This is postreq");
// });

app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
res.status(200).json(product)
  } catch (error) {
console.log(error.message);
res.status(404)
  }
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to mongo");
  app.listen(PORT, () => {
    console.log("listening to 3000");
  });
});
