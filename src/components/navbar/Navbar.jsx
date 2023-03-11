import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => {
  return (
    <div className="bg-gray-800 py-2 px-4 fixed top-0 w-full z-10 text-white flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/">
          EMZY
        </Link>
      </div>
      <div className="ml-4 text-gray-300 hover:text-white">
        <Link to="/">
          Home
        </Link>
        <Link to="/contact" className="ml-4">
          Contact
        </Link>
      </div>
        </div>
  );
}

export default Navbar;
