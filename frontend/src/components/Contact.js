import react from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import useScript from "./useScripts";
import JotformEmbed from "react-jotform-embed";

export default function Contact() {
  //   useScript("https://form.jotform.com/jsform/212953694531461");
  return (
    <div>

      {/* <h1>Contact Us</h1> */}
      <p>
        <JotformEmbed src="https://form.jotformeu.com/212953694531461" />
        {/* https://form.jotformeu.com/123456789?name=John */}
      </p>

    </div>
  );
}
