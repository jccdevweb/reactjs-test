import React from "react";
import "../../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-nav">
        <h1 className="logo-head">
          Logo<span className="brand">Brand</span>
        </h1>
      </div>
      <div className="container-list">
        <ul className="list">
          <li className="list-item input-item">
            <input className="search-input" placeholder="Search" />
          </li>
          <li className="list-item">
            <a className="item" href="#">
              Home
            </a>
          </li>
          <li className="list-item">
            <a className="item" href="#">
              About
            </a>
          </li>
          <li className="list-item">
            <a className="item" href="#">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
