import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProductsPages from "./pages/AllProductsPages";
import MyProductsPages from "./pages/MyProductsPages";
import LoginPages from "./pages/LoginPages";
import Footer from "./components/Footer/Footer";
import RegisterPages from "./pages/RegisterPages";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allProducts" element={<AllProductsPages />} />
          <Route path="/myUserProducts" element={<MyProductsPages />} />
          <Route path="/loginUser" element={<LoginPages />} />
          <Route path="/registerUser" element={<RegisterPages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
