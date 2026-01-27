import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";


import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplaPath: true }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* UserLayout acts as the wrapper for all children routes */}
        <Route path="/" element={<UserLayout />}>
          {/* Index route renders at the parent's path ("/") */}
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="collection/:collection" element={<CollectionPage />} />
          {/* Un-comment these as you create the files */}
          {/* <Route path="product/:id" element={<ProductPage />} /> */}
          {/* <Route path="cart" element={<CartPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
