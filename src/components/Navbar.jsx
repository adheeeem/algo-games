import React, { Component } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">About</Link>
      <Link to="tictactoe">Games</Link>
    </div>
  );
};

export default Navbar;
