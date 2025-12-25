🚀 AI Image Generator — MERN Stack
<p align="center"> <a href="https://ai-image-generator-puce-sigma.vercel.app/" target="_blank"> <img src="https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel" /> </a> <a href="https://ai-image-generator-q76g.onrender.com" target="_blank"> <img src="https://img.shields.io/badge/Backend%20API-Render-blue?style=for-the-badge&logo=render" /> </a> <a href="https://github.com/vedduhijod/ai-image-generator" target="_blank"> <img src="https://img.shields.io/badge/GitHub-Repository-lightgrey?style=for-the-badge&logo=github" /> </a> </p>
📌 Overview

AI Image Generator is a production-ready MERN stack application that enables users to generate AI-powered images from text prompts and share them in a public community gallery.

This project reflects real-world full-stack development practices, including cloud deployment, secure environment management, REST API design, and frontend–backend separation.

✨ Features

🖼️ Generate AI images from text prompts

🌍 Public community image gallery

🔍 Search images by name or prompt

📱 Fully responsive modern UI

🔐 Secure backend using environment variables

☁️ Deployed on cloud (Vercel + Render)

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
🔗 Frontend

👉 https://ai-image-generator-puce-sigma.vercel.app/

🔗 Backend API (Test in browser)

👉 https://ai-image-generator-q76g.onrender.com/api/v1/post

⚙️ Environment Variables
Backend (server/.env)
MONGO_URI=your_mongodb_atlas_url
PEXELS_API_KEY=your_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

Frontend (client/.env)
VITE_API_URL=http://localhost:8080


⚠️ Environment files are excluded from GitHub for security.

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

.env files excluded from version control

CORS configured for controlled access

Frontend and backend deployed independently

Scalable, production-ready architecture
