# Modern MERN Stack Portfolio

A production-ready, highly responsive, and visually attractive developer portfolio built using the MERN stack with modern aesthetics like dark mode, glassmorphism, and Framer Motion animations.

## Features
- **Frontend**: React.js, Framer Motion, React Icons
- **Backend**: Node.js, Express.js, MongoDB integration for the Contact Form
- **Design Elements**: Dark mode toggle, Glassmorphism, smooth scrolling, modern typography

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or via MongoDB Atlas URI)

### Local Development Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Backend Setup**:
   ```bash
   cd Backend
   npm install
   # Create a .env file and set PORT and MONGO_URI
   npm start
   ```
   The API will run on `http://localhost:5000` by default.

3. **Frontend Setup**:
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```
   The React application will be accessible via a local Vite server (e.g., `http://localhost:5173`).

## License
MIT
