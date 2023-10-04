require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); // db conection

app.get("/", (req, res) => {
  res.send("server is running fine");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
