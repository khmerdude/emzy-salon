import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Get In Touch */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <FaPhone className="text-pink-500" size={20} />
                  <a href="tel:4404559415" className="hover:text-pink-500 transition-colors">
                    Phone: (440) 455-9415
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <FaEnvelope className="text-pink-500" size={20} />
                  <a href="mailto:emzysalonandspa@gmail.com" className="hover:text-pink-500 transition-colors">
                    Email: emzysalonandspa@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <FaInstagram className="text-pink-500" size={20} />
                  <a 
                    href="https://www.instagram.com/emzysalonandspa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors"
                  >
                    @emzysalonandspa
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <FaFacebook className="text-pink-500" size={20} />
                  <a 
                    href="https://www.facebook.com/EMZYSalonandSpa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors"
                  >
                    EMZY Salon & Spa
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Location</h3>
              <div className="flex items-start space-x-3 text-gray-600">
                <FaMapMarkerAlt className="mt-1 text-pink-500" size={20} />
                <div>
                  <p>26735 Brookpark Rd Ext</p>
                  <p>North Olmsted, OH 44070</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hours</h3>
              <div className="flex items-start space-x-3 text-gray-600">
                <FaClock className="mt-1 text-pink-500" size={20} />
                <div className="space-y-2">
                  <p>Tuesday - Thursday: 10am - 5pm</p>
                  <p>Saturday: 9am - 2pm</p>
                  <p>Sunday, Monday, & Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 