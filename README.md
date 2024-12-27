# MERN CRUD Application

A simple MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing user details. This application allows users to add, display, update, and delete user details, including profile images. The frontend is built using React (with Vite), and the backend is developed with Express.js.

## Features

- Add user details (name, phone, email, profile image).
- Display a list of users with their profile details and images.
- Update user details.
- Delete users.
- Fully responsive design:
  - Desktop: 3 cards per row.
  - Tablet: 2 cards per row.
  - Mobile: 1 card per row.

---

## Instructions to Run the Project

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or above)
- **MongoDB Atlas** (or a local MongoDB instance)
- **npm** (comes with Node.js)

---

### Steps to Run

1. **Clone the Repository**

   ```bash
   git clone https://github.com/meashishpatel/Edulyst_Venture_Assignment

   cd mern-crud-app
   ```

2. **Backend Setup**

   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` folder and add the following variables:
     ```env
     MONGO_URI=your-mongodb-connection-string
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
   - The backend will be running on `http://localhost:5000`.

3. **Frontend Setup**

   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Update the API URL:
     - In `frontend/src/api.js`, set the `API_URL` to the backend's URL:
       ```javascript
       const API_URL = "http://localhost:5000";
       ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```
   - The frontend will be running on `http://localhost:5173`.

4. **Run the Application**
   - Open your browser and visit `http://localhost:5173`.
   - Interact with the app to perform CRUD operations.

---

## Build for Production

1. **Build the frontend for production**:
   ```bash
   npm run build
   ```
2. **Deploy the `dist` folder** to any static hosting provider (e.g., Netlify, Vercel).

---

## Technologies Used

- **Frontend**: React.js (with Vite), CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---
