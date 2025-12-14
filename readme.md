# 🍬 Sweet Shop Management System (MERN + TDD)

A full-stack **Sweet Shop Management System** built using the **MERN stack** as part of a Test-Driven Development (TDD) kata.  
The application allows users to register, log in, browse sweets, purchase items, and enables admin users to manage inventory.

This project demonstrates backend API design, authentication, testing, frontend SPA development, clean coding practices, and responsible AI usage.

---

## 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- Jest + Supertest (TDD)

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Plain CSS (no Tailwind or UI libraries)

---

## ✨ Features

### Authentication
- User registration
- User login with JWT authentication
- Protected API routes

### Sweets Management
- View all available sweets
- Search sweets by name
- Purchase sweets (quantity decreases)
- Purchase button disabled when out of stock

### Admin Functionality
- Add new sweets
- Update existing sweets
- Delete sweets
- Restock sweets (admin only)

### Frontend (SPA)
- Single Page Application using React
- Login & Registration forms
- Dashboard to display sweets
- Admin panel for inventory management
- Responsive, clean UI with plain CSS

---

## 🧪 Test-Driven Development (TDD)

- Tests were written **before implementation** for critical backend features
- Followed **Red → Green → Refactor** cycle
- Jest + Supertest used for integration testing
- Authentication flow (register & login) fully tested

Run backend tests:
```bash
cd backend
npm test
