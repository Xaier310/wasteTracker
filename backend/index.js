const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
mongoose.connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@seniorcircle.z5ejt.mongodb.net/WasteTracker`,
  (err) => {
    if (err) throw err;
    console.log("DB Connected Successfully");
  }
);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
