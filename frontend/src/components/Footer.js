import React from "react";
import "../footerr.css";

function Footer() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    marginTop: "60vh",
    bottom: "0px",
  };
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
