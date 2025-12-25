🚀 AI Image Generator — MERN Stack

🔗 Live Demo: https://ai-image-generator-puce-sigma.vercel.app/

🔗 Backend API: https://ai-image-generator-q76g.onrender.com

📦 GitHub Repo: https://github.com/vedduhijod/ai-image-generator

📌 Overview

AI Image Generator is a full-stack MERN application that allows users to generate AI-powered images from text prompts and share them with a public community gallery. The project demonstrates real-world full-stack development, cloud deployment, secure environment management, and REST API integration.

✨ Features

Generate AI images from text prompts

Community showcase of generated images

Search images by name or prompt

Responsive UI with modern design

Secure backend with environment variables

Fully deployed frontend & backend

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

React Router

Fetch API

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

CORS

dotenv

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

📂 Project Structure
ai-image-generator/
│
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
│
├── server/                 # Express backend
│   ├── routes/
│   ├── config/
│   ├── index.js
│   ├── .env
│   └── package.json
│
└── README.md

🌍 Live Preview
Frontend
https://YOUR-FRONTEND.vercel.app

Backend API (Test in browser)
https://YOUR-BACKEND.onrender.com/api/v1/post

⚙️ Environment Variables
Backend (server/.env)
MONGO_URI=
PEXELS_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

Frontend (client/.env)
VITE_API_URL=http://localhost:8080


⚠️ .env files are NOT committed to GitHub.

🧪 Run Locally
1️⃣ Clone Repository
git clone https://github.com/vedduhijod/ai-image-generator.git
cd ai-image-generator

2️⃣ Start Backend
cd server
npm install
npm start


Backend runs at:

http://localhost:8080

3️⃣ Start Frontend
cd client
npm install
npm run dev


Frontend runs at:

http://localhost:5173


🔐 Security & Best Practices

Environment variables managed securely

.env excluded from version control

CORS configured for frontend access

Backend isolated from frontend deployment

Production-ready API architecture
