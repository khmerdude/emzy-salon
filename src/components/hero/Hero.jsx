import React, { useEffect, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Storefront from '../../assets/storefront.jpg';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { Eyebrow } from '../ui/Section';
import { business } from '../../data/business';

// Drifts the photo within its frame as the page scrolls, for a subtle depth effect.
// The image is scaled up 20% so the drift (±range px) never reveals an edge.
const useParallax = (range = 24) => {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY, 600) / 600;
        if (ref.current) ref.current.style.transform = `translateY(${(0.5 - progress) * 2 * range}px) scale(1.2)`;
        frame = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [range]);
  return ref;
};

const Hero = () => {
  const photoRef = useParallax();

  return (
    <section id="top" className="overflow-hidden">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:gap-16 md:px-8 md:pb-28 md:pt-20">
        <div>
          <Reveal>
            <Eyebrow>North Olmsted, Ohio · Since {business.since}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Welcome to <em className="text-rose">EMZY</em> Salon&nbsp;&amp;&nbsp;Spa
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-md text-lg text-muted">
              Experience luxury hair care and spa treatments in a modern, relaxing environment.
            </p>
          </Reveal>
          <Reveal delay={360} className="mt-10 flex flex-wrap gap-3">
            <Button href={business.phoneHref}>
              <FaPhoneAlt size={12} /> Call to Book: {business.phone}
            </Button>
            <Button href="#services" variant="outline">
              View Services
            </Button>
          </Reveal>
        </div>

        <Reveal variant="zoom" delay={200} className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/10">
            <img
              ref={photoRef}
              src={Storefront}
              alt="The EMZY Salon storefront in Cherandon Plaza"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 15%', transform: 'scale(1.2)' }}
              fetchpriority="high"
            />
          </div>
          <Reveal delay={700} className="absolute -bottom-6 left-6">
            <a
              href="#awards"
              className="block rounded-2xl bg-cream px-5 py-4 shadow-xl shadow-ink/10 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="block text-[0.65rem] font-medium uppercase tracking-[0.25em] text-rose">Award winner</span>
              <span className="font-display text-xl">2022 Best of North Olmsted</span>
            </a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
