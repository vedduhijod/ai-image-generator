import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, CreatePost } from '../pages'

function AppRoutes() {
  return (
    <div className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default AppRoutes