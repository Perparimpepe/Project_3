# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

----------------------------------------------------------------

This is the final project of the course, where the goal was to build a **React-based frontend** for the backend created in **Project 2**.  
The application displays, filters, adds, edits, and deletes messages stored in a MongoDB database, accessed through the existing Project 2 API.

The frontend connects to the already deployed backend from Project 2: https://project-2-269q.onrender.com

### ✔ React + Functional Components + Hooks  
Uses **useState**, **useEffect**, reusable UI components and structured layout.

### ✔ Multi-Page App (React Router)  
Two views:
- **Home Page:** List, search, edit, delete messages  
- **Add Page:** Add new message  

### ✔ CRUD Functionality  
The frontend performs all main operations:
- **GET:** Load all person  /api/getall
- **GET by ID:** Load on person /api/:id
- **POST:** Add new person  /api/add
- **PUT:** Edit existing person  /api/update/:id
- **DELETE:** Remove an person  /api/delete/:id

All requests go through **Project 2 API**, not directly to MongoDB.

### ✔ Search & Filter  
Search by username using the search bar.

### ✔ Modal-Based Editing (React Bootstrap)  
Editing an item happens in a modern modal window—not with alerts or prompts.

### ✔ Responsive UI (Bootstrap)  
Layout adapts to small and large screens.  
Navigation bar included.

### ✔ Loading & Error States  
Shows:
- Loading indicator  
- Clear error message on failure  

# Project Structure 
project3/
└─ src/
├─ components/
│ ├─ ItemCard.jsx
│ ├─ ItemList.jsx
│ ├─ SearchForm.jsx
│ └─ AddItemForm.jsx
├─ pages/
│ ├─ Home.jsx
│ └─ AddItemPage.jsx
├─ services/
│ └─ api.js
├─ App.css
├─ App.jsx
├─ main.jsx
└─ index.css

# Homepage 
Lists all messages
Search bar (filter by username)
Delete button
Edit button → opens modal
Loading & error handling