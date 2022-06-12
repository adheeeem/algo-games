import React, { Component } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" id="link">About</Link>
      </div>
      <div>
      <Link to="tictactoe" id="link">Games</Link>
      </div>
    </div>
  );
};

export default Navbar;
