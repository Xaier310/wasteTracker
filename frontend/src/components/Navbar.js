import React from "react";
import { Redirect, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
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
          <div class="collapse navbar-collapse" id="navbarNav">
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
