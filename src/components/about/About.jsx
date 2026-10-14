import React, { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Salon1 from '../../assets/salon/salon-1.jpg';
import Salon2 from '../../assets/salon/salon-2.jpg';
import Salon3 from '../../assets/salon/salon-3.jpg';
import Button from '../ui/Button';
import { Section, Eyebrow } from '../ui/Section';
import Reveal from '../ui/Reveal';
import { hours, team } from '../../data/business';

const salonImages = [Salon1, Salon2, Salon3];
const minSwipeDistance = 50;

const SalonSlideshow = () => {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);

  const go = (step) => setIndex((i) => (i + step + salonImages.length) % salonImages.length);

  // Auto-advance, unless the visitor prefers reduced motion
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => go(1), 4000);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const distance = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(distance) > minSwipeDistance) go(distance > 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-[2rem] touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {salonImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Inside EMZY Salon ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {salonImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-cream' : 'w-1.5 bg-cream/60'}`}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <Section id="about">
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <Reveal variant="left">
        <SalonSlideshow />
      </Reveal>

      <Reveal variant="right" delay={150}>
        <Eyebrow>About Us</Eyebrow>
        <h2 className="text-4xl leading-tight md:text-5xl">Expert Stylists, Exceptional Results</h2>
        <div className="mt-6 space-y-4 text-lg text-muted">
          <p>
            At EMZY Salon & Spa, our main goal is to bring out your inner beauty with a one of a kind unique
            experience. Our skilled Artists are dedicated in creating your customized look with a wide range of
            services to pamper you from head to toe.
          </p>
          <p>
            Since 2014, we take pride in our work with high end results and yet affordable without the astronomical
            prices. Our mission is to provide you with an outstanding experience in a comfortable atmosphere and the
            confidence that you're in the right place!
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl">Our Team</h3>
            <ul className="space-y-1.5 text-muted">
              {team.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xl">Hours</h3>
            <ul className="space-y-1.5 text-muted">
              {hours.map((h) => (
                <li key={h.days}>
                  <span className="text-ink">{h.days}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button href="#contact" variant="outline" className="mt-10">
          <FaPhoneAlt size={12} /> Contact Us
        </Button>
      </Reveal>
    </div>
  </Section>
);

export default About;
