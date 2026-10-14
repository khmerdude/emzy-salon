import React from 'react';
import { Section, SectionHeading } from '../ui/Section';
import Reveal from '../ui/Reveal';
import { serviceCategories } from '../../data/services';

const PriceRow = ({ name, price, note }) => (
  <li className="py-2">
    <div className="flex items-baseline gap-3">
      <span>{name}</span>
      <span className="flex-1 border-b border-dotted border-ink/20" aria-hidden="true" />
      <span className="whitespace-nowrap font-medium">{price}</span>
    </div>
    {note && <p className="mt-0.5 text-sm text-muted">{note}</p>}
  </li>
);

const MenuGroup = ({ title, image, items, note, delay }) => (
  <Reveal delay={delay} className="mb-10 break-inside-avoid">
    <div className="mb-3 flex items-center gap-4 border-b border-line pb-3">
      {image && <img src={image} alt="" loading="lazy" className="h-12 w-12 rounded-full object-cover" />}
      <h4 className="font-display text-2xl">{title}</h4>
    </div>
    <ul>
      {items.map((item) => (
        <PriceRow key={item.name} {...item} />
      ))}
    </ul>
    {note && <p className="mt-2 text-sm italic text-muted">{note}</p>}
  </Reveal>
);

// Left column of a category: cover photo, or the practitioner card for Healing Touch
const CategoryAside = ({ category }) => {
  const { practitioner } = category;
  return (
    // Compact photo-beside-text row on phones, tall photo column on desktop
    <aside className="flex items-start gap-5 md:sticky md:top-28 md:block">
      <img
        src={practitioner ? practitioner.photo : category.cover}
        alt={practitioner ? practitioner.name : category.title}
        loading="lazy"
        className="aspect-[3/4] w-24 shrink-0 rounded-2xl object-cover md:w-full md:max-w-[16rem] md:rounded-[1.5rem]"
      />
      <div>
        <h3 className="text-3xl md:mt-6">{practitioner ? practitioner.name : category.title}</h3>
        {practitioner ? (
          <>
            <p className="mt-2 text-sm italic text-muted">{practitioner.credentials}</p>
            <p className="mt-4 inline-block rounded-full bg-rose-soft px-4 py-1.5 text-sm text-rose-dark">
              {practitioner.schedule}
            </p>
          </>
        ) : (
          <p className="mt-2 text-muted">{category.summary}</p>
        )}
      </div>
    </aside>
  );
};

const Services = ({ active, onSelect }) => {
  const category = serviceCategories.find((c) => c.id === active) ?? serviceCategories[0];

  return (
    <Section id="services" className="bg-sand">
      <SectionHeading eyebrow="Our Services" title="Pricing & Services" />

      {/* Category tabs */}
      <Reveal role="tablist" aria-label="Service categories" className="mb-12 flex flex-wrap gap-2">
        {serviceCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={c.id === category.id}
            aria-controls="services-panel"
            onClick={() => onSelect(c.id)}
            className={`rounded-full px-6 py-2.5 text-sm tracking-wide transition-all duration-300 active:scale-95 ${
              c.id === category.id
                ? 'bg-ink text-cream'
                : 'border border-ink/15 text-ink hover:border-ink/40'
            }`}
          >
            {c.label}
          </button>
        ))}
      </Reveal>

      {/* key remounts the panel on tab change so it animates in */}
      <div
        key={category.id}
        id="services-panel"
        role="tabpanel"
        aria-labelledby={`tab-${category.id}`}
        className="grid animate-fade-up gap-12 md:grid-cols-[16rem_1fr] md:gap-16"
      >
        <CategoryAside category={category} />

        <div>
          {category.intro && <p className="mb-10 text-lg text-muted">{category.intro}</p>}

          <div className={category.groups.length > 1 ? 'gap-12 lg:columns-2' : ''}>
            {category.groups.map((g, i) => (
              <MenuGroup key={g.title} {...g} delay={(i % 3) * 90} />
            ))}
          </div>

          {category.about && (
            <div className="mt-4 rounded-[1.5rem] bg-cream p-6 md:p-8">
              <h4 className="font-display text-2xl">{category.about.title}</h4>
              <div className="mt-4 space-y-4 text-muted">
                {category.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {category.about.images.map((src) => (
                  <img key={src} src={src} alt="Healing Touch session" loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />
                ))}
              </div>
            </div>
          )}

          {category.footnote && <p className="mt-2 text-sm italic text-muted">{category.footnote}</p>}
        </div>
      </div>
    </Section>
  );
};

export default Services;
