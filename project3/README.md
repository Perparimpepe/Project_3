# Project 3 — React Frontend for Project 2 API

This is the final project of the course, where the goal was to build a React-based frontend for the backend created earlier in Project 2.
The frontend allows users to view, search, add, edit, and delete records stored in a MongoDB database.
All data is fetched from the already deployed Render backend.

# API Connection
The frontend connects to the Project 2 backend deployed on Render: https://project-2-269q.onrender.com/api

All API calls go through this backend, the frontend does not connect directly to MongoDB.

# Features
React + Functional Components + Hooks
Uses useState, useEffect, reusable components and a clean structure.
Multi-Page App (React Router)

# Includes two routes:
Home Page — List, search, edit, delete messages
Add Page — Add new person

# CRUD Functionality
The application uses all major API endpoints:

Operation	Method	Endpoint
Load all items	GET	/api/getall
Load one item	GET	/api/:id
Add new item	POST	/api/add
Update item	PUT	/api/update/:id
Delete item	DELETE	/api/delete/:id

# Search & Filter
Search bar filters results by username in real time.

# Edit Modal (React Bootstrap)
Modern UI for editing:
Message
Country

# Toast Notifications
Success notifications for:
Add
Edit
Delete

# Responsive UI (Bootstrap 5 + React-Bootstrap)
Includes:
Navigation bar
Forms
Cards
Modals
Toasts

# Loading & Error States

Displays:
Loading indicator
API error messages

📁 Project Structure
project3/
└─ src/
   ├─ components/
   │  ├─ ItemCard.jsx
   │  ├─ ItemList.jsx
   │  ├─ SearchForm.jsx
   │  └─ AddItemForm.jsx
   ├─ pages/
   │  ├─ Home.jsx
   │  └─ AddItemPage.jsx
   ├─ services/
   │  └─ api.js
   ├─ App.jsx
   ├─ main.jsx
   └─ index.css

# Installation & Setup
1️⃣ Clone the repository
git clone <your-repository-url>
cd project3

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file in project root
VITE_API_URL=https://project-2-269q.onrender.com/api

4️⃣ Start the development server
npm run dev

# Application opens at:
http://localhost:5173

# Pages Overview
### Home Page (/)
Loads and displays all records
Search by username
Delete button
Edit modal
Toast notifications
Loading & error handling

### Add Page (/add)
Form to add new person
Sends POST request
Success toast after adding

# Styling
This project uses:
Bootstrap 5
React-Bootstrap

UI includes responsive:
Cards
Buttons
Forms
Modals
Toast notifications
Bootstrap is imported in main.jsx:
import "bootstrap/dist/css/bootstrap.min.css";

# Summary
This project fulfills all course requirements:
React functional components
React Router multi-page navigation
At least 3 reusable components
CRUD (GET, POST, PUT, DELETE)
Search & filtering
Bootstrap styling
Modal editing
Toast notifications
Loading & error states
API integration with Project 2 backend
Render deployment ready
README documentation