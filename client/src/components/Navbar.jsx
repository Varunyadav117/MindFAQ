import React from "react";
import figma from "../assets/images/figma-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <img className="logo" src={figma} alt="MinFAQ logo" />

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
