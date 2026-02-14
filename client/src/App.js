import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BrowseItems from "./pages/BrowseItems";
import PostItem from "./pages/PostItem";
import ClaimItem from "./pages/ClaimItem";
import ViewClaims from "./pages/ViewClaims";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/post" element={<PostItem />} />
        <Route path="/claim" element={<ClaimItem />} />

        {/* VIEW CLAIMS ROUTE */}
        <Route
          path="/view-claims"
          element={<ViewClaims />}
        />

      </Routes>
    </Router>
  );
}

export default App;
