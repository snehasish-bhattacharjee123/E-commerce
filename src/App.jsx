import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductPage from "./pages/ProductPage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import ProfilePage from "./pages/ProfilePage";    
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        {/* <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
