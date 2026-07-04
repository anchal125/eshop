# E-Commerce React App

A modern, animated e-commerce frontend built with React, Vite, and Redux Toolkit.
The app includes product browsing, search, cart and wishlist management, checkout flow, and persistent local storage state.

## Live Data Source

Products are fetched from [Fake Store API](https://fakestoreapi.com/products).

## Features

- Product listing with async fetch and loading states
- Product details page with dynamic route params
- Search-driven shop experience
- Cart management (add, remove, quantity controls, totals)
- Wishlist management
- Checkout flow with shipping form and order summary
- Local storage persistence for cart, wishlist, shipping form, and theme
- Route-based navigation with lazy-loaded pages
- Toast notifications and modal-based interactions
- GSAP-based UI transitions/animations
- Accessibility-focused UI with keyboard navigation, semantic HTML, proper form labeling, and screen reader support

## Tech Stack

- React 19
- Vite 6
- Redux Toolkit + React Redux
- React Router DOM
- GSAP
- React Icons
- CSS Modules
- React Toastify
- Cloudinary (Image hosting & optimization)

## Getting Started

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The Vite dev server URL will be shown in the terminal (commonly `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build in `dist/`
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run predeploy` - Build before deployment
- `npm run deploy` - Deploy `dist/` to GitHub Pages

## Deployment (GitHub Pages)

This project includes `gh-pages` scripts:

```bash
npm run deploy
```

Make sure your repository and Pages settings are configured correctly before deploying.


