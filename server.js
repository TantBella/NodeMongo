const express = require("express");
const app = express();
const PORT = 3000;

// console.log("Hello World!");

app.get("/", (req, res) => {
  res.send("Welcome to my MongoApi");
});

app.post("/blogpost", (req, res) => {
  res.send("This is postreq");
});

app.listen(PORT, () => {
  console.log("listening to 3000");
});
