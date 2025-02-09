import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaInstagramSquare, FaPhone } from 'react-icons/fa'
import Logo from '../../assets/EMZY+SALON+_+SPA+_9_-removebg-preview.png';

const Navbar = ({ openHairModal, openBeautyModal, openSpaModal }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setNav(false);
    }
  };

  return (
    <nav className="bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="py-2">
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:opacity-90 transition-opacity"
          >
            <img 
              src={Logo} 
              alt="EMZY Salon & Spa Logo" 
              className="h-12 w-auto object-contain"
            />
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-pink-300 transition-colors duration-200"
          >
            Home
          </button>
          <div className="relative group">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-pink-300 transition-colors duration-200"
            >
              Services
            </button>
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2">
              <button 
                onClick={openHairModal}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Hair Services
              </button>
              <button 
                onClick={openBeautyModal}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Beauty Services
              </button>
              <button 
                onClick={openSpaModal}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Spa Services
              </button>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-pink-300 transition-colors duration-200"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('awards')} 
            className="text-white hover:text-pink-300 transition-colors duration-200"
          >
            Awards
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="text-white hover:text-pink-300 transition-colors duration-200"
          >
            Gallery
          </button>
          <a 
            href="tel:4404559415"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 
              transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            <FaPhone className="mr-2" size={14} />
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <div 
          onClick={handleClick} 
          className="md:hidden z-20 p-2 cursor-pointer text-white hover:text-pink-300 transition-colors"
        >
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>

        {/* Mobile Menu */}
        <div 
          className={`${
            !nav ? 'translate-x-full' : 'translate-x-0'
          } fixed top-0 right-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center z-10
          transition-transform duration-300 ease-in-out`}
        >
          <button 
            onClick={() => scrollToSection('home')} 
            className="py-4 text-3xl text-white hover:text-pink-300 transition-colors duration-200"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="py-4 text-3xl text-white hover:text-pink-300 transition-colors duration-200"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="py-4 text-3xl text-white hover:text-pink-300 transition-colors duration-200"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('awards')} 
            className="py-4 text-3xl text-white hover:text-pink-300 transition-colors duration-200"
          >
            Awards
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="py-4 text-3xl text-white hover:text-pink-300 transition-colors duration-200"
          >
            Gallery
          </button>
          <a 
            href="tel:4404559415"
            className="py-4 text-3xl text-white hover:text-pink-300 transition-colors duration-200 inline-flex items-center"
          >
            <FaPhone className="mr-2" size={24} />
            Book Now
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-gradient-to-r from-purple-500 to-pink-500">
              <a 
                className="flex justify-between items-center w-full text-white" 
                href="https://www.instagram.com/emzysalonandspa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pl-4">Instagram</span> 
                <FaInstagramSquare size={30} className="mr-4"/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#3b5998]">
              <a 
                className="flex justify-between items-center w-full text-white" 
                href="https://www.facebook.com/EMZYSalonandSpa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pl-4">Facebook</span> 
                <FaFacebookF size={30} className="mr-4"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
