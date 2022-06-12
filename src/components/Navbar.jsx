import React, { Component, useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [iconClass, setIconClass] = useState("ri-arrow-drop-left-line")
  function handleClick() {
    setIsOpen(current => !current);
    if (isOpen) {
      setIconClass("ri-arrow-drop-right-line")
    } else {
      setIconClass("ri-arrow-drop-left-line")
    }
  }
  return (
    <div className="navbar-elements" style={{left: isOpen ? '0px' : '-155px', transition: '0.3s'}}>
      <div className="navbar">
        <div>
          <Link to="/" id="link">
            About
          </Link>
        </div>
        <div>
          <Link to="tictactoe" id="link">
            Games
          </Link>
        </div>
      </div>
      <div id="trigger" onClick={handleClick}><i class={iconClass}></i></div>
    </div>
  );
};

export default Navbar;
