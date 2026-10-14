import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import Button from '../ui/Button';
import { business } from '../../data/business';
import { serviceCategories } from '../../data/services';

const links = [
  { href: '#about', label: 'About' },
  { href: '#awards', label: 'Awards' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = ({ onSelectService }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Header tightens up once the visitor scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`sticky top-0 z-40 bg-ink text-cream transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-ink/20' : ''}`}>
      <nav
        className={`mx-auto flex max-w-site items-center justify-between px-5 transition-[height] duration-300 md:px-8 ${
          scrolled ? 'h-16' : 'h-16 md:h-20'
        }`}
      >
        <a href="#top" aria-label="EMZY Salon & Spa home" onClick={closeMenu}>
          <img
            src={Logo}
            alt="EMZY Salon & Spa"
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-10 md:h-12'}`}
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          <div className="group relative">
            <a href="#services" className="inline-flex items-center gap-1.5 py-6 transition-colors hover:text-rose-soft">
              Services <FaChevronDown size={10} className="opacity-60" />
            </a>
            <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 rounded-xl bg-cream py-2 text-ink opacity-0 shadow-xl
              transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {serviceCategories.map((c) => (
                <a
                  key={c.id}
                  href="#services"
                  onClick={() => onSelectService(c.id)}
                  className="block px-5 py-2.5 transition-colors hover:bg-sand"
                >
                  {c.label} Services
                </a>
              ))}
            </div>
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-rose-soft">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-cream/15 pl-6">
            <a href={business.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-rose-soft">
              <FaInstagram size={17} />
            </a>
            <a href={business.social.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-rose-soft">
              <FaFacebookF size={15} />
            </a>
          </div>
          <Button href={business.phoneHref} className="!px-5 !py-2.5">
            <FaPhoneAlt size={12} /> Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 p-2 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col gap-5 font-display text-4xl">
          <a href="#services" onClick={closeMenu}>Services</a>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-6">
          <Button href={business.phoneHref}>
            <FaPhoneAlt size={12} /> Book Now
          </Button>
          <a href={business.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={22} />
          </a>
          <a href={business.social.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
