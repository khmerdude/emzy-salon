import React from 'react';
import AwardImage from '../../assets/award.jpg';
import { Section, Eyebrow } from '../ui/Section';
import Reveal from '../ui/Reveal';

const Awards = () => (
  <Section id="awards" className="border-t border-line">
    <div className="grid items-start gap-10 md:grid-cols-[18rem_1fr] md:gap-16">
      <Reveal variant="left">
        <img
          src={AwardImage}
          alt="2022 Best of North Olmsted Award"
          loading="lazy"
          className="w-full max-w-[18rem] rounded-[1.5rem] shadow-xl shadow-ink/10 transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]"
        />
      </Reveal>

      <Reveal delay={150}>
        <Eyebrow>Awards</Eyebrow>
        <h2 className="text-4xl leading-tight md:text-5xl">
          Emzy Salon and Spa Receives 2022 Best of North Olmsted Award
        </h2>
        <p className="mt-4 italic text-muted">North Olmsted Award Program Honors the Achievement</p>

        <div className="mt-6 space-y-4 text-muted">
          <p>
            NORTH OLMSTED January 21, 2022 -- Emzy Salon and Spa has been selected for the 2022 Best of North
            Olmsted Award in the Beauty Salons category by the North Olmsted Award Program.
          </p>
          <p>
            Each year, the North Olmsted Award Program identifies companies that we believe have achieved
            exceptional marketing success in their local community and business category. These are local companies
            that enhance the positive image of small business through service to their customers and our community.
            These exceptional companies help make the North Olmsted area a great place to live, work and play.
          </p>
        </div>

        <details className="group mt-6">
          <summary className="cursor-pointer list-none text-sm font-medium tracking-wide text-rose hover:text-rose-dark">
            <span className="group-open:hidden">Read the full announcement +</span>
            <span className="hidden group-open:inline">Show less −</span>
          </summary>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              Various sources of information were gathered and analyzed to choose the winners in each category. The
              2022 North Olmsted Award Program focuses on quality, not quantity. Winners are determined based on the
              information gathered both internally by the North Olmsted Award Program and data provided by third
              parties.
            </p>
            <h3 className="pt-2 text-2xl text-ink">About North Olmsted Award Program</h3>
            <p>
              The North Olmsted Award Program is an annual awards program honoring the achievements and
              accomplishments of local businesses throughout the North Olmsted area. Recognition is given to those
              companies that have shown the ability to use their best practices and implemented programs to generate
              competitive advantages and long-term value.
            </p>
            <p>
              The North Olmsted Award Program was established to recognize the best of local businesses in our
              community. Our organization works exclusively with local business owners, trade groups, professional
              associations and other business advertising and marketing groups. Our mission is to recognize the small
              business community's contributions to the U.S. economy.
            </p>
          </div>
        </details>
      </Reveal>
    </div>
  </Section>
);

export default Awards;
