const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
const volRoute = require("./routes/volunteer");
const userSchema = require("./models/User");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const path = require("path");
var cors = require("cors");
var ajax = require("ajax");

app.use(cors());

app.use(express.json());

//setup passport
app.use(
  session({
    secret: "wasteTracker's_secretKey",
    resave: false,
    saveUnintialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@seniorcircle.z5ejt.mongodb.net/WasteTracker`,
  `mongodb://localhost:27017/WasteTracker`,
  (err) => {
    if (err) throw err;
    console.log("DB Connected Successfully");
  }
);

//after schemas
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

//after creating collection
passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

// app.use(express.static(__dirname + "/public"));
// app.use(
//   "/build/",
//   express.static(path.join(__dirname, "/node_modules/three/build"))
// );
// app.use(
//   "/jsm/",
//   express.static(path.join(__dirname, "/node_modules/three/examples/jsm"))
// );
// app.set("view engine", "ejs");
// // app.use(express.static(path.resolve(__dirname, "../wastetracker/build")));

// app.get("/", (req, res) => {
//   res.render("index");
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("/contact", (req, res) => {
//   res.render("contact");
// });
// app.get("/map", (req, res) => {
//   res.render("home");
// });
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../wastetracker/build", "index.html"));
// });

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);
app.use("/api/volunteer", volRoute);

const PORT = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
