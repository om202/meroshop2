import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { Login, Register, Home } from "./pages";

function App() {
  return (
    <Router>
      <div className="h-auto flex flex-col bg-gray-50">
        <Nav />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
