# EMZY Salon & Spa

Website for EMZY Salon & Spa, North Olmsted, OH. Built with React, Vite and Tailwind CSS.

## Editing content

Most updates don't require touching any layout code:

| To change… | Edit |
|---|---|
| Prices, services, Healing Touch info | `src/data/services.js` |
| Phone, email, address, hours, team, social links | `src/data/business.js` |
| Colors and fonts for the whole site | `tailwind.config.js` (`colors`, `fontFamily`) |

## Commands

```bash
npm install       # first time only
npm run dev       # local preview at http://localhost:5173
npm run build     # production build into dist/
npm run deploy    # build and publish to GitHub Pages (gh-pages branch)
```
