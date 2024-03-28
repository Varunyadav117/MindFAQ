import React from "react";
import figma from "../assets/images/figma-logo.png";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={figma} alt="MindFAQ logo" />

        <Link to="/login" className="loginlink">
          Log in
        </Link>
      </div>

      <div className="main">
        <Link className="join-game" to="/joinagame">
          Join a game
        </Link>
        <p className="or">
          or
          <Link className="create-game" to="/createagame">
            create a game
          </Link>
        </p>
      </div>
    </>
  );
};

export default Home;
