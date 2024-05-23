import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MyProductByUser from "./components/MyProductByUser/MyProductByUser";
import Navbar from "./components/Navbar/Navbar";
import AllProductsPages from "./pages/AllProductsPages";
import Home from "./pages/Home";
import LoginPages from "./pages/LoginPages";
import MyProfilePage from "./pages/MyProfilePages";
import NewProductsPages from "./pages/NewProductsPages";
import ProductDetailPages from "./pages/ProductDetailPages";
import RegisterPages from "./pages/RegisterPages";

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
        <Route path="/getProductById/:id" element={<ProductDetailPages />} />
      </Routes>
      <Footer />
    </div>
  );
}
