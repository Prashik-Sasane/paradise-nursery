# Paradise Nursery 🌿

Paradise Nursery is a dynamic React-based shopping cart application for an online plant shop.

The application allows users to browse different categories of houseplants, view plant details, add plants to a shopping cart, update quantities, remove products, and view the total shopping amount.

## Features

- Responsive Paradise Nursery landing page
- Plant catalog
- Three plant categories
- 18 unique houseplants
- Plant images, names, descriptions, and prices
- Add to Cart functionality
- Add to Cart button becomes disabled after adding
- Dynamic shopping cart item count
- Increase plant quantity
- Decrease plant quantity
- Remove plants from cart
- Individual item total calculation
- Overall cart total calculation
- Checkout Coming Soon message
- Continue Shopping functionality
- About Us page
- Responsive design
- Redux Toolkit for cart state management
- React Router for navigation

## Plant Categories

### Indoor Foliage

- Monstera Deliciosa
- Snake Plant
- Peace Lily
- ZZ Plant
- Rubber Plant
- Calathea Orbifolia

### Succulents & Cacti

- Aloe Vera
- Jade Plant
- Echeveria
- Haworthia
- Golden Barrel Cactus
- String of Pearls

### Flowering & Decorative

- Anthurium
- Orchid
- African Violet
- Bromeliad
- Boston Fern
- Prayer Plant

## Technologies Used

- React
- Vite
- Redux Toolkit
- React Redux
- React Router
- Lucide React
- CSS

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
│
├── components/
│   ├── AboutUs.jsx
│   ├── CartItem.jsx
│   ├── Navbar.jsx
│   └── ProductList.jsx
│
├── data/
│   └── plants.js
│
└── redux/
    ├── CartSlice.jsx
    └── store.js