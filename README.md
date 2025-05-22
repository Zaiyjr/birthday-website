# Dynamic Website

A modern full-stack web application built with React, Node.js, Express, and MongoDB.

## Features

- Modern React frontend with Tailwind CSS
- Node.js/Express backend
- MongoDB database
- User authentication
- Responsive design

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/dynamic-website
   JWT_SECRET=your_jwt_secret_key_here
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   npm run dev

   # In a new terminal, start frontend server
   npm run client
   ```

   Or run both servers concurrently:
   ```bash
   npm run dev:full
   ```

## Project Structure

```
├── client/             # React frontend
├── server.js           # Express server
├── package.json        # Project dependencies
└── .env               # Environment variables
```

## Technologies Used

- Frontend:
  - React
  - Tailwind CSS
  - Axios
  - React Router

- Backend:
  - Node.js
  - Express
  - MongoDB
  - JWT Authentication 