import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EMZY Salon & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;