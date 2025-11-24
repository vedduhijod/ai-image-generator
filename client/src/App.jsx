import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
