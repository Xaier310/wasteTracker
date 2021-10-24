import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useScript from "./useScripts";
import Background from "../earthpic.jpeg";

export default function Home() {
  useScript("client.js");
  useScript("/jsm/controls/OrbitControls.js");

  return (
    <div>
      <div class="title-container">
        <div class="title">
          <h1>Get well soon dear Earth</h1>
          <p>
            If you can't keep clean your old bedroom you will also destroy the
            new one. Don't look for an alternative of earth. Rather keep it
            clean and habitable. Environment pollution has increased
            significantly. By polluting the environment we are not just
            destroying the earth, we are destroying humanity as well.
          </p>
          <button class="btn">Let's Clean</button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPositionY: -500,
        }}
        id="bgimage"
      ></div>
      <canvas class="webgl"></canvas>

      <script type="module" src="client.js"></script>
      <script type="module" src="/jsm/controls/OrbitControls.js"></script>
    </div>
  );
}
