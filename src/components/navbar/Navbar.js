import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__logoLink">
          EMZY
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/contact" className="navbar__link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
