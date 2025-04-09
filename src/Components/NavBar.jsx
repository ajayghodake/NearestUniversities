import React from "react";
import "./Navbar.css";
import logo from "./main_logo.83e8edcb.svg"; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://emversity.com/" className="logo">
        <img src={logo} alt="Logo" className="logo-svg" />
      </a>
    </nav>
  );
};

export default Navbar;
