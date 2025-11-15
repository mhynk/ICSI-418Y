# Full-Stack Project Collaboration Platform  
*A MERN-based web platform for user authentication, team management, and project collaboration.*

---

## Overview  
TeamCollab is a **full-stack web application** that allows users to sign up, log in, create projects, and collaborate in teams.  
Built with **MongoDB, Express, React, and Node.js (MERN)**, the platform integrates secure authentication, dynamic front-end components, and modular RESTful APIs for scalable collaboration management.

---

## Features  
- **User Authentication** — Secure signup/login.  
- **Team Management** — Create teams, add members, and manage shared access via MongoDB schemas.  
- **Project Management** — Backend endpoints for project creation, tracking, and updates.  
- **RESTful APIs** — Modular route structure under `/api/users` and `/api/createProject` for maintainable expansion.  
- **MongoDB Atlas Integration** — Persistent cloud database with Mongoose schema models.  
- **Responsive Frontend** — Built with React and Bootstrap for clean and modern UI components.  

---

## Tech Stack  
| Layer | Technology |
|-------|-------------|
| Frontend | React.js, Bootstrap, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Authentication | JSON Web Tokens (JWT), bcrypt |
| Tools | IntelliJ IDEA, VS Code |

---

## Architecture Overview  
```plaintext
React (Frontend)
   ↓
Express.js (API Layer)
   ↓
MongoDB Atlas (Database)
```
# Getting Started

This project was bootstrapped with Create React App
.

# Prerequisites

Node.js (v18+ recommended)

MongoDB Atlas account and connection string

# Available Scripts
In the project directory, you can run:

## npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## node server.js
Starts the backend, connecting to the port and the MongoDB database.
