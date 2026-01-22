import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      {/* Best Seller  */}
      <h2 className="mb-4 text-3xl font-bold text-center"> Best Seller</h2>
    <ProductDetails/>
    </div>
  );
}

export default Home;
