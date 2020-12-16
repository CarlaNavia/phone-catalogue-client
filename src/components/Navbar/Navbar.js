import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar nav-color is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:3000/">
          <h1 className="h1-nav">PHONES</h1>
        </a>
      </div>
      <div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/new" className="button is-light ">
                <p className="h1-nav add">Add new phone</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
