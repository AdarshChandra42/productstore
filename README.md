# Product Store

A full-stack web application for managing products, built with React, Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete products
- Modern and responsive UI built with Chakra UI
- State management using Zustand
- RESTful API architecture
- MongoDB database integration
- Environment variable configuration

## Tech Stack

### Frontend
- React.js
- Vite
- Chakra UI
- Zustand (State Management)
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Project Structure

```
ProductStore/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Zustand store
│   │   └── App.jsx       # Main application component
│   └── package.json
├── backend/              # Node.js backend application
│   ├── controllers/      # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── config/          # Configuration files
│   └── server.js        # Entry point
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ProductStore
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
