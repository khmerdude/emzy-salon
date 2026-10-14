// The full service menu. To change a price, edit it here.
// A trailing * on a price means "starting price" (explained by the category's footnote).

import hairCut from '../assets/services/hair-cut.jpg';
import hairColor from '../assets/services/hair-color.jpg';
import hairStyling from '../assets/services/hair-styling.jpg';
import waxing from '../assets/services/waxing.jpg';
import specialEvents from '../assets/services/special-events.jpg';
import wedding from '../assets/services/wedding.jpg';
import anita from '../assets/team/anita.jpg';
import anita2 from '../assets/team/anita-2.jpg';
import anita3 from '../assets/team/anita-3.jpg';

export const serviceCategories = [
  {
    id: 'hair',
    label: 'Hair',
    title: 'Hair Services',
    summary: 'From cuts to color, our expert stylists create looks that enhance your natural beauty.',
    cover: hairColor,
    groups: [
      {
        title: 'Cuts',
        image: hairCut,
        items: [
          { name: 'Women Cuts', price: '$28', note: 'with shampoo and style – $38' },
          { name: 'Men Cuts', price: '$23', note: 'with beard trim – $28' },
          { name: 'Teen Cuts (11–17)', price: '$21' },
          { name: 'Children Cuts (Under 10)', price: '$18' },
          { name: 'In Between Cuts', price: '$18' },
          { name: 'Bang Trim', price: '$15' },
          { name: 'Beard Trim', price: '$15' },
        ],
      },
      {
        title: 'Color',
        image: hairColor,
        items: [
          { name: 'All Over Color', price: '$75*' },
          { name: 'Partial Highlights', price: '$85*' },
          { name: 'Full Highlights', price: '$95*' },
          { name: 'Balayage', price: '$120*' },
          { name: 'Color Correction', price: 'Consultation' },
        ],
      },
      {
        title: 'Perm',
        items: [
          { name: 'Basic Perm', price: '$75*' },
          { name: 'Specialty Perm', price: '$85*' },
          { name: 'Spiral Perm', price: '$90*' },
        ],
      },
      {
        title: 'Treatment',
        items: [
          { name: 'Brazilian Blowout', price: '$200*' },
          { name: 'Deep Conditions', price: '$15' },
        ],
      },
      {
        title: 'Extension',
        items: [{ name: 'Full Sew-In', price: 'Consultation' }],
        note: 'All services involving hair extensions require a consultation before booking the appointment.',
      },
      {
        title: 'Additional Services',
        image: hairStyling,
        items: [
          { name: 'Shampoo', price: '$10' },
          { name: 'Shampoo and Style', price: '$20' },
          { name: 'Flat Iron', price: '$20' },
          { name: 'Special Occasions (Basic Styling)', price: '$50*' },
        ],
      },
    ],
    footnote: '*Starting price. Price may increase depending on length and thickness of hair.',
  },
  {
    id: 'beauty',
    label: 'Beauty',
    title: 'Beauty Services',
    summary: 'Complete your look with our professional makeup and beauty services.',
    cover: specialEvents,
    groups: [
      {
        title: 'Waxing',
        image: waxing,
        items: [
          { name: 'Eyebrow', price: '$15' },
          { name: 'Lip', price: '$15' },
          { name: 'Chin', price: '$15' },
          { name: 'Cheeks', price: '$16' },
          { name: 'Full Face', price: '$55' },
        ],
      },
      {
        title: 'Special Events',
        image: specialEvents,
        items: [
          { name: 'Basic Updo', price: '$60*' },
          { name: 'Makeup', price: '$60*' },
          { name: 'Updo & Makeup', price: '$120' },
        ],
      },
      {
        title: 'Wedding Package',
        image: wedding,
        items: [
          { name: 'Hair Trial', price: '$15 off updo' },
          { name: 'Bride Updo', price: '$75+' },
          { name: 'Bride Makeup', price: '$75+' },
          { name: 'Guest Updo', price: '$60+', note: 'Bridesmaid, maid of honor, mother of bride, and others' },
          { name: "Children's Updo", price: '$50+' },
          { name: 'Guest Makeup', price: '$60+' },
          { name: 'Booking Fee', price: '$50' },
          { name: 'Travel / Convenience Fee', price: '$60+' },
        ],
        note: 'Prices may increase depending on travel distance.',
      },
    ],
    footnote: '*Starting price. Price may increase.',
  },
  {
    id: 'spa',
    label: 'Spa',
    title: 'Healing Touch Program',
    summary: 'Relax and rejuvenate with our luxurious spa treatments and massages.',
    cover: anita2,
    intro:
      'Our certified Healing Touch Practitioner Anita provides a program where she helps balance the energy of your mind, body and spirit by using a gentle touch. The perfect way to complete your overall well-being!',
    practitioner: {
      name: 'Anita Groeschke',
      photo: anita,
      credentials: 'Certified: Healing Touch Practitioner, Clinical Aromatherapy, and Medical Intuitive',
      schedule: 'Sessions: Wednesday 11am – 4pm',
    },
    groups: [
      {
        title: 'Services',
        items: [
          { name: 'Healing Touch Introduction', price: '$30' },
          { name: 'Aroma Therapy Consultation', price: '$45' },
          { name: 'Healing Touch', price: '$60' },
          { name: 'Medical Intuitive', price: '$70' },
        ],
      },
    ],
    about: {
      title: 'What is Healing Touch?',
      paragraphs: [
        'Healing Touch uses gentle, light or near-body touch to clear, balance, energize and support the human energy systems to facilitate and support healing for the whole person "mind, body, and spirit".',
        "The goal of Healing Touch is to restore harmony and balance in the human energy system thus creating an optimal environment for the body's innate tendency for healing to occur.",
        'Aromatherapy increases the energy flow during the healing touch.',
      ],
      images: [anita2, anita3],
    },
  },
];
