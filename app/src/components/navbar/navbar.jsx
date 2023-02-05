import React from "react";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-left">
        <div className="dev-name">Janaeé Wallace</div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            {/* <li>Home</li> */}
            <li>About Me</li>
            <li>Resume</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <button className="button">Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
