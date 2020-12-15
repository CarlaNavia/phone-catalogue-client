import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar nav-color" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://localhost:3000/">
            <h1 className="h1-nav">PHONES</h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
