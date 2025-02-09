import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-pink-500" size={16} />
                <a 
                  href="https://www.instagram.com/emzysalonandspa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  @emzysalonandspa
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-pink-500" size={16} />
                <a 
                  href="https://www.facebook.com/EMZYSalonandSpa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  EMZY Salon & Spa
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EMZY Salon & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;