import React from 'react';
import { Section, SectionHeading } from '../ui/Section';
import Reveal from '../ui/Reveal';
import IMG1 from '../../assets/gallery/gallery-1.jpg';
import IMG2 from '../../assets/gallery/gallery-2.jpg';
import IMG3 from '../../assets/gallery/gallery-3.jpg';
import IMG4 from '../../assets/gallery/gallery-4.jpg';
import IMG5 from '../../assets/gallery/gallery-5.jpg';
import IMG6 from '../../assets/gallery/gallery-6.jpg';
import IMG7 from '../../assets/gallery/gallery-7.jpg';

const galleryImages = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7];

const Gallery = () => (
  <Section id="gallery" className="bg-ink">
    <SectionHeading eyebrow="Gallery" title="Our Gallery" dark />

    {/* Masonry layout keeps each photo at its natural shape */}
    <div className="columns-2 gap-3 md:columns-3 md:gap-4">
      {galleryImages.map((src, i) => (
        <Reveal key={src} variant="zoom" delay={(i % 3) * 120} className="group mb-3 break-inside-avoid overflow-hidden rounded-xl md:mb-4">
          <img
            src={src}
            alt={`EMZY Salon gallery photo ${i + 1}`}
            loading="lazy"
            className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Gallery;
