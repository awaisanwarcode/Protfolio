# Modern MERN Stack Portfolio

A production-ready, highly responsive, and visually attractive developer portfolio built using the MERN stack with modern aesthetics like dark mode, glassmorphism, and Framer Motion animations.

## Features
- **Frontend**: React.js, Tailwind CSS, Framer Motion, React Icons
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
   cd server
   npm install
   # Create a .env file and set PORT and MONGO_URI
   npm start
   ```
   The API will run on `http://localhost:5000` by default.

3. **Frontend Setup**:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   The React application will be accessible via a local Vite server (e.g., `http://localhost:5173`).

---

## Deployment Instructions

### 1. Deploying the Backend (Render or Railway)
Render and Railway are popular platforms for hosting Node.js applications.

- Push your code to a GitHub repository.
- Connect your GitHub repository to Render/Railway.
- Create a new "Web Service".
- Provide the Environment Variables: `MONGO_URI` and `PORT`.
- Set the Root Directory to `server`.
- Start Command: `npm start`.

### 2. Deploying the Frontend (Vercel)
Vercel is ideal for frontend frameworks like React with Vite.

- Before deploying, ensure the `client/src/components/Contact.jsx` Axios URL `http://localhost:5000/api/contact` is updated to your deployed backend API URL (e.g., `https://your-backend.onrender.com/api/contact`). You can use environment variables (`import.meta.env.VITE_API_URL`) to manage this properly.
- On Vercel, attach your GitHub repository.
- Make sure the Framework Preset is explicitly set to **Vite**.
- Set the Root Directory to `client`.
- Deploy!

## License
MIT
