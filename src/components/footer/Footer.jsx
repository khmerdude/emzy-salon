import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import { business, hours } from '../../data/business';

const Footer = () => (
  <footer className="bg-ink text-cream/70">
    <div className="mx-auto grid max-w-site gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
      <div>
        <img src={Logo} alt="EMZY Salon & Spa" className="h-14 w-auto" loading="lazy" />
        <div className="mt-6 flex gap-5 text-cream">
          <a href={business.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-rose-soft">
            <FaInstagram size={18} />
          </a>
          <a href={business.social.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-rose-soft">
            <FaFacebookF size={16} />
          </a>
        </div>
      </div>

      <div className="text-sm leading-relaxed">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cream">Visit</p>
        <p>{business.address.street}</p>
        <p>{business.address.city}</p>
        <a href={business.phoneHref} className="mt-2 inline-block hover:text-cream">{business.phone}</a>
      </div>

      <div className="text-sm leading-relaxed">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cream">Hours</p>
        {hours.map((h) => (
          <p key={h.days}>
            {h.days}: {h.time}
          </p>
        ))}
      </div>
    </div>
    <div className="border-t border-cream/10 py-6 text-center text-xs tracking-wide">
      &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
    </div>
  </footer>
);

export default Footer;
