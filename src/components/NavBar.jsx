import React from "react";
import "./Navbar.css";
import logo from "./main_logo.83e8edcb.svg"; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://emversity.com/" className="logo">
        <img src={logo} alt="Logo" className="logo-svg" />
      </a>

      <div className="main_menu">
        <a href="tel:8080804980" className="phoneNumber">
          <img
            src="https://dev-landing-pages-bucket.s3.ap-south-1.amazonaws.com/emversity/phone-2.svg"
            alt="pnone_icon"
            className="phone-svg"
          />
          <p>80 80 80 49 80</p>
        </a>

        <a href="https://emversity.com/about-us" className="aboutus">
          <p>About Us</p>
        </a>

        <a href="https://emversity.com/about-us" className="aboutus">
          <p>More</p>
        </a>

        <a href="https://emversity.com/programs" className="ExploreCourses">Explore Courses</a>

      </div>
    </nav>
  );
};

export default Navbar;
