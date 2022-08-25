import React from "react";
import { Redirect, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
    <link rel="stylesheet" href="./style.css" />

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark row">
        <div class="container-fluid">
          <a class="navbar-brand col-sm ms-3" href="/">
            Waste Tracker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation" 
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-bucket" id="navbarNav">
            <ul class="navbar-nav col-sm">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/maps" >
                  Map
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "YOU CLICKED ME!";}
    </script> */}
    </div>
  );
}
