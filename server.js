const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening to 3000");
});

console.log("Hello World!");
