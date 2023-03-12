import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Logo from '/Users/bonasuon/Source/Repos/emzy-salon/src/assets/EMZY+SALON+_+SPA+_9_-removebg-preview.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div>
      <div className="bg-black py-2 px-4 fixed top-0 w-full z-10 text-white flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/">
          <img src={Logo} alt="Logo Image" style={{width: '100px'}} />
        </Link>
      </div>
      <div className="ml-4 text-gray-300 hover:text-white">
        <div className="hidden md:flex">
        <Link to="/">
          Home
        </Link>
        <Link to="/about" className="ml-4">
          About Us
        </Link>
        <Link to="/services" className="ml-4">
          Services
        </Link>
        <Link to="/awards" className="ml-4">
          Awards
        </Link>
        <Link to="/gallery" className="ml-4">
          Gallery
        </Link>
        <Link to="/contact" className="ml-4">
          Contact
        </Link>
        </div>
        </div>
        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile */}
        <ul className={!nav ? "hidden" : "absolute top-0 w-full h-screen flex flex-col justify-center items-center bg-black"}>
        <Link to="/" className="ml-4 py-6 text-4xl">
          Home
        </Link>
        <Link to="/about" className="ml-4 py-6 text-4xl">
          About Us
        </Link>
        <Link to="/services" className="ml-4 py-6 text-4xl">
          Services
        </Link>
        <Link to="/awards" className="ml-4 py-6 text-4xl">
          Awards
        </Link>
        <Link to="/gallery" className="ml-4 py-6 text-4xl">
          Gallery
        </Link>
        <Link to="/contact" className="ml-4 py-6 text-4xl">
          Contact
        </Link>
        </ul>
        
        {/* social icons */}
        <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#FFC0CB]">
              <a className="flex justify-between items-center w-full" href="https://www.instagram.com/emzysalonandspa/">
              <p className="pl-4">Instagram</p> <FaInstagramSquare size={30}/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#3b5998]">
              <a className="flex justify-between items-center w-full" href="https://www.facebook.com/EMZYSalonandSpa/">
                 <p className="pl-4">Facebook</p> <FaFacebookF size={30}/>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
        </div>
  );
}

export default Navbar;
