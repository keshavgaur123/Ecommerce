
import React from "react";
import Home from "./Page/Home";
import ProductDetail from "./Page/ProductDetail";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Page/Dashboard";

function App() {
  return (
    <div className="flex">

      {/* Sidebar (ONLY ONCE) */}
      <SideBar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">

        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;