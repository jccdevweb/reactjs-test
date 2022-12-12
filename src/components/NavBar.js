import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <h1 className="navbar-brand"> Brand Here</h1>
      <ul className="list">
        <li className="list-item">
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li className="list-item">
          <a className="links">
            <Link className="links" to="/About">
              About
            </Link>{" "}
          </a>
        </li>
        <li className="list-item">
          <Link className="links" to="/Contact">
            Contact
          </Link>
        </li>
        <li className="list-item">
          <Link className="links" to="/LoginForm">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
