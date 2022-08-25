import React from "react";
import useScript from "./useScripts";
import { Switch, useHistory } from 'react-router';
import Background from "../earthpic.jpeg";

export default function Home() {
  useScript("client.js");
  let history = useHistory();
  const handleOnClick = ()=>{
    history.push("/maps");
  }
  return (
    <div>
      <div class="title-container">
        <div class="title">
          <h1>Get well soon dear Earth</h1>
          <p >
            If you can't keep clean your old bedroom you will also destroy the
            new one. Don't look for an alternative of earth. Rather keep it
            clean and habitable. Environment pollution has increased
            significantly. By polluting the environment we are not just
            destroying the earth, we are destroying humanity as well.
          </p>
          <button class="btn" onClick={handleOnClick}>Let's Clean</button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPositionY: -500,
        }}
        id="bgimage"
      ></div>
    </div>
  );
}
