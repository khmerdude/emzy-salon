import React, { useState, useEffect } from "react";
import HeroImage from '../../assets/Emzy_Salon.jpg'; // Make sure to add the image to assets folder
import SalonImage1 from '../../assets/salon/20210929_122630.jpg';
import SalonImage2 from '../../assets/salon/20210929_142405.jpg';
import SalonImage3 from '../../assets/salon/20210929_142534.jpg';
import Awards from '../awards/Awards';
import BeautyServicesModal from '../modals/BeautyServicesModal';
import HairServicesModal from '../modals/HairServicesModal';
import SpaServicesModal from '../modals/SpaServicesModal';
import Gallery from '../gallery/Gallery';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import { FaArrowUp, FaPhone } from 'react-icons/fa';
// import "./Home.css";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHairModalOpen, setIsHairModalOpen] = useState(false);
  const [isBeautyModalOpen, setIsBeautyModalOpen] = useState(false);
  const [isSpaModalOpen, setIsSpaModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const salonImages = [
    SalonImage1,
    SalonImage2,
    SalonImage3
  ];

  // Auto rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === salonImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Changed to 4 seconds for better viewing

    return () => clearInterval(timer);
  }, []);

  // Check scroll position to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Darkened overlay */}
        <img
          src={HeroImage}
          alt="EMZY Salon Interior"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }} // Adjust this value to position the image
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Welcome to EMZY Salon & Spa
            </h1>
            <p className="text-xl mb-8 drop-shadow-md">
              Experience luxury hair care and spa treatments in a modern, relaxing environment
            </p>
            <a 
              href="tel:4404559415"
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold 
                hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              <FaPhone className="mr-2" size={16} />
              Call to Book: (440) 455-9415
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src={service.icon} 
                  alt={service.name} 
                  className="w-16 h-16 mb-4 cursor-pointer hover:scale-110 transition-transform" 
                  onClick={() => {
                    if (service.name === "Beauty Services") {
                      setIsBeautyModalOpen(true);
                    } else if (service.name === "Hair Styling") {
                      setIsHairModalOpen(true);
                    } else if (service.name === "Spa Treatments") {
                      setIsSpaModalOpen(true);
                    }
                  }}
                />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button 
                  onClick={() => {
                    if (service.name === "Beauty Services") {
                      setIsBeautyModalOpen(true);
                    } else if (service.name === "Hair Styling") {
                      setIsHairModalOpen(true);
                    } else if (service.name === "Spa Treatments") {
                      setIsSpaModalOpen(true);
                    }
                  }}
                  className="text-black font-medium hover:underline"
                >
                  View Pricing & Services →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px]">
              {salonImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`EMZY Salon Interior ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ objectPosition: 'center 20%' }}
                />
              ))}
              
              {/* Optional: Add navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {salonImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Expert Stylists, Exceptional Results</h2>
              <p className="text-gray-600 text-lg mb-8">
                At EMZY Salon & Spa, our main goal is to bring out your inner beauty with a one of a kind unique experience. Our skilled Artists are dedicated in creating your customized look with a wide range of services to pamper you from head to toe.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Since 2014, we take pride in our work with high end results and yet affordable without the astronomical prices. Our mission is to provide you with an outstanding experience in a comfortable atmosphere and the confidence that you're in the right place!
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Team</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Master Hair Artist</li>
                    <li>• Nail Technician</li>
                    <li>• Makeup Artist</li>
                    <li>• Wax Specialist</li>
                    <li>• Healing Touch Practitioner</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li><span className="font-medium">Tue–Thurs:</span> 10am - 5pm</li>
                    <li><span className="font-medium">Sat:</span> 9am–2pm</li>
                    <li><span className="font-medium">Sun, Mon, & Fri:</span> Closed</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-gray-800 transition-colors"
              >
                <FaPhone className="mr-2" size={16} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards">
        <Awards />
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-pink-500 text-white p-4 rounded-full shadow-lg 
          hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 z-50
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </button>

      {/* Modals */}
      <BeautyServicesModal isOpen={isBeautyModalOpen} onClose={() => setIsBeautyModalOpen(false)} />
      <HairServicesModal isOpen={isHairModalOpen} onClose={() => setIsHairModalOpen(false)} />
      <SpaServicesModal isOpen={isSpaModalOpen} onClose={() => setIsSpaModalOpen(false)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Keep all services in the array
const services = [
  {
    id: 1,
    name: "Hair Styling",
    description: "From cuts to color, our expert stylists create looks that enhance your natural beauty.",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14 5l7 7m0 0l-7 7m7-7H3'%3E%3C/path%3E%3C/svg%3E"
  },
  {
    id: 2,
    name: "Spa Treatments",
    description: "Relax and rejuvenate with our luxurious spa treatments and massages.",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14 5l7 7m0 0l-7 7m7-7H3'%3E%3C/path%3E%3C/svg%3E"
  },
  {
    id: 3,
    name: "Beauty Services",
    description: "Complete your look with our professional makeup and beauty services.",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14 5l7 7m0 0l-7 7m7-7H3'%3E%3C/path%3E%3C/svg%3E"
  }
];

export default Home;
