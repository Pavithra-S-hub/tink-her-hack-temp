import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BrowseItems from "./pages/BrowseItems";
import ClaimItem from "./pages/ClaimItem";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostItem from "./pages/PostItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default → Login */}
        <Route path="/" element={<Login />} />

        {/* Auth */}
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Features */}
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/claim" element={<ClaimItem />} />
        <Route path="/post" element={<PostItem />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
