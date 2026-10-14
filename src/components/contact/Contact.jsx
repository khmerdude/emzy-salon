import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Button from '../ui/Button';
import { Section, SectionHeading } from '../ui/Section';
import Reveal from '../ui/Reveal';
import { business, hours } from '../../data/business';

const Card = ({ icon: Icon, title, delay, children }) => (
  <Reveal delay={delay} className="h-full">
    <div className="h-full rounded-[1.5rem] border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-soft text-rose">
        <Icon size={16} />
      </span>
      <h3 className="mb-4 text-2xl">{title}</h3>
      <div className="space-y-2 text-muted">{children}</div>
    </div>
  </Reveal>
);

const linkClass = 'flex items-center gap-3 transition-colors hover:text-rose';

const Contact = () => (
  <Section id="contact" className="bg-sand">
    <SectionHeading eyebrow="Contact / Info" title="Contact Us" />

    <div className="grid gap-5 md:grid-cols-3">
      <Card icon={FaPhoneAlt} title="Get In Touch">
        <a href={business.phoneHref} className={linkClass}>
          <FaPhoneAlt size={12} /> {business.phone}
        </a>
        <a href={`mailto:${business.email}`} className={`${linkClass} break-all`}>
          <FaEnvelope size={12} className="shrink-0" /> {business.email}
        </a>
        <a href={business.social.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaInstagram size={13} /> {business.social.instagram.handle}
        </a>
        <a href={business.social.facebook.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaFacebookF size={12} /> {business.social.facebook.handle}
        </a>
      </Card>

      <Card icon={FaMapMarkerAlt} title="Location" delay={120}>
        <p className="text-ink">{business.address.plaza}</p>
        <p>{business.address.street}</p>
        <p>{business.address.city}</p>
      </Card>

      <Card icon={FaClock} title="Hours" delay={240}>
        {hours.map((h) => (
          <p key={h.days}>
            <span className="text-ink">{h.days}</span>
            <br />
            {h.time}
          </p>
        ))}
      </Card>
    </div>

    <div className="mt-12 text-center">
      <Button href={business.phoneHref}>
        <FaPhoneAlt size={12} /> Call to Book: {business.phone}
      </Button>
    </div>
  </Section>
);

export default Contact;
