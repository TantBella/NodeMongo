const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

// console.log("Hello World!");

app.get("/", (req, res) => {
  res.send("Welcome to my MongoApi");
});

app.post("/blogpost", (req, res) => {
  res.send("This is postreq");
});

mongoose
  .connect(
    "mongodb+srv://tantbella:gCsEmiXzrO6hGscf@bellasapi.dqh0j.mongodb.net/Products-Api?retryWrites=true&w=majority&appName=BellasAPI"
  )
  .then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () => {
      console.log("listening to 3000");
    });
  });
