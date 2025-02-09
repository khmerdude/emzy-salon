import React, { useState, useEffect } from 'react';
import IMG1 from '../../assets/gallery/IMG_3676+(2).JPG';
import IMG2 from '../../assets/gallery/IMG_3678+(1).JPG';
import IMG3 from '../../assets/gallery/IMG_3679+(1).JPG';
import IMG4 from '../../assets/gallery/IMG_3680+(1).jpg';
import IMG5 from '../../assets/gallery/IMG_3682+(1).jpg';
import IMG6 from '../../assets/gallery/IMG_3683+(1).jpg';
import IMG7 from '../../assets/gallery/IMG_20211006_220210778_processed.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const galleryImages = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Gallery</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Main Image */}
          <div className="relative h-[350px] overflow-hidden rounded-lg">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain bg-black transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;