import React from 'react';
import Reveal from './Reveal';

export const Section = ({ id, className = '', children }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="mx-auto max-w-site px-5 md:px-8">{children}</div>
  </section>
);

export const Eyebrow = ({ children, className = '' }) => (
  <p className={`mb-3 text-xs font-medium uppercase tracking-[0.25em] text-rose ${className}`}>
    {children}
  </p>
);

export const SectionHeading = ({ eyebrow, title, intro, center = false, dark = false }) => (
  <Reveal className={`mb-12 md:mb-16 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
    {eyebrow && <Eyebrow className={dark ? 'text-rose-soft/80' : ''}>{eyebrow}</Eyebrow>}
    <h2 className={`text-4xl leading-tight md:text-5xl ${dark ? 'text-cream' : 'text-ink'}`}>{title}</h2>
    {intro && <p className={`mt-4 text-lg ${dark ? 'text-cream/70' : 'text-muted'}`}>{intro}</p>}
  </Reveal>
);
