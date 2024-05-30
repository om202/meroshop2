import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { Login, Register, Home } from "./pages";
import { GlobalStateContext, GlobalStateProvider } from "./State";
import { Cart } from "./pages/Cart";
import { User } from "./pages/User";
import { Admin } from "./pages/Admin/Admin.js";

function App() {
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <GlobalStateProvider>
      <Router>
        <div className="h-auto flex flex-col">
          <Nav />
          <div className="max-w-screen-xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path ="/user" element = {<User/>} />  
              <Route path="/register" element={<Register />} />
              {isAdmin && <Route path="/admin" element={<Admin />} />}
              <Route path="/cart" element={<Cart/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
