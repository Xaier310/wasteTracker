import "./app.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { HomeOutlined, Room, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from "react-router-dom"

import SeeAllVolunteers from "./components/SeeAllVolunteers";
// const Volunteer = require("..backend/models/Volunteer");
const Contact = require("../src/components/Contact").default;
const Footer = require("../src/components/Footer").default;
const Header = require("../src/components/Header").default;
const Home = require("../src/components/home").default;
const About = require("../src/components/about").default;
const Navbar = require("../src/components/Navbar").default;
const Maps = require("./components/Maps").default;
// const Globe = require("./globe/globe").default;


function App() {

  return (
    <Router>
      <Navbar />
    <Switch>
    <Route exact path="/">
    <Redirect to="/home" />
    </Route>
    <Route path="/seeallvolunteers" component={SeeAllVolunteers} />
    <Route path="/contact" component={Contact} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/maps" component={Maps} />
    </Switch>
    <Footer />
    </Router>
   
  );
}

export default App;
