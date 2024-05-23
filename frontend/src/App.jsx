import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProductsPages from "./pages/AllProductsPages";
import LoginPages from "./pages/LoginPages";
import Footer from "./components/Footer/Footer";
import RegisterPages from "./pages/RegisterPages";
import MyProfilePage from "./pages/MyProfilePages";
import NewProductsPages from "./pages/NewProductsPages";
import MyProductByUser from "./components/MyProductByUser/MyProductByUser";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProductsPages />} />
        <Route path="/newUserProducts" element={<NewProductsPages />} />
        <Route path="/loginUser" element={<LoginPages />} />
        <Route path="/registerUser" element={<RegisterPages />} />
        <Route path="/myProfile" element={<MyProfilePage />} />
        <Route path="/myProductByUser" element={<MyProductByUser />} />
      </Routes>
      <Footer />
    </div>
  );
}
