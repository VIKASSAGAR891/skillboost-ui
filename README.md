# SkillBoost UI – Experiment 4

This project is an extension of Experiment 3. It enhances the existing multi-page React application by implementing advanced React concepts including Context API, useReducer, and useMemo.

------------------------------------------------------------

Project Objective

- Implement global state management using Context API
- Manage structured state updates using useReducer
- Optimize derived state calculations using useMemo
- Extend the existing multi-page React Router application
- Maintain consistent UI/UX across all pages

------------------------------------------------------------

Tech Stack

- React (Vite)
- React Router DOM
- Bootstrap
- React-Bootstrap
- Context API
- useReducer
- useMemo

------------------------------------------------------------

Folder Structure

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── CardComponent.jsx
│   ├── ThemeToggle.jsx
│   └── FilterBar.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Cart.jsx
│
├── App.jsx
├── main.jsx
└── index.css

------------------------------------------------------------

Features Implemented

1. React Router
- Multi-page navigation
- Pages include Home, Projects, and Cart
- Client-side routing without page reload

2. Context API (useContext)
- Global state management
- Theme (Light/Dark mode)
- Cart data shared across components
- Context used in multiple components

3. useReducer
Reducer implemented for structured state updates.

Actions included:
- TOGGLE_THEME
- ADD_TO_CART
- REMOVE_FROM_CART
- CLEAR_CART

4. useMemo
- Optimized total price calculation in Cart page
- Prevents unnecessary recalculation on re-render

------------------------------------------------------------

New Page Added in Experiment 4

Cart Page:
- Displays selected courses
- Allows item removal
- Allows clearing cart
- Calculates total price using useMemo
- Uses context and reducer

------------------------------------------------------------

Installation and Setup

1. Install dependencies:
   npm install

2. Run development server:
   npm run dev

3. Build for production:
   npm run build

------------------------------------------------------------

Deployment

Deployed using Vercel.

Deployment link format:
{uid}-4-{name}.vercel.app

------------------------------------------------------------

Experiment 4 Summary

This experiment extends the previous multi-page React project by implementing global state management using Context API and useReducer, and performance optimization using useMemo. The project maintains clean structure, responsive design, and consistent user interface across all pages.
