import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-left">
        <div className="dev-name">Janaeé Wallace</div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>
              <Link activeClass="active" to="AboutMe" spy={true} smooth={true}>
                About Me
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Resume" spy={true} smooth={true}>
                Resume
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Portfolio"
                spy={true}
                smooth={true}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <button className="button">
          <Link activeClass="active" to="Contact" spy={true} smooth={true}>
            Contact Me
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
