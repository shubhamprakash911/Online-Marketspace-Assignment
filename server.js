require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const { userRoute } = require("./routes/userRoute");
const listingRoute = require("./routes/listingRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB(); // db conection

app.get("/", (req, res) => {
  res.send("server is running fine");
});

app.use("/api/users", userRoute);
app.use("/api/listing", listingRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
