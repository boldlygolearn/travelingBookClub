const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const source = process.env.ATLAS_CONNECTION;
const PORT = 4000;

const authController = require("./routes/authRoutes");

app.use("/user", authController);

mongoose.connect(source, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected.");
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
