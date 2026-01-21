import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* UserLayout acts as the wrapper for all children routes */}
        <Route path="/" element={<UserLayout />}>
          {/* Index route renders at the parent's path ("/") */}
          <Route index element={<Home />} />
          
          {/* Un-comment these as you create the files */}
          {/* <Route path="product/:id" element={<ProductPage />} /> */}
          {/* <Route path="cart" element={<CartPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
