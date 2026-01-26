import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaaturesSection from "../components/Products/FeaaturesSection";

const placeholderProducts = [
  {
    _id: 1,
    name: "Classic White T-Shirt",
    price: "$29.99",
    image: [{ url: "https://images.unsplash.com" }],
  },
  {
    _id: 2,
    name: "Classic Black T-Shirt",
    price: "$29.99",
    image: [{ url: "https://images.unsplash.com" }],
  },
  {
    _id: 3,
    name: "Classic Blue T-Shirt",
    price: "$29.99",
    image: [{ url: "https://images.unsplash.com" }],
  },
];

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      {/* Best Sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
      <ProductDetails />

      {/*  */}
      <div className="container mx-auto">
        <div className="text-3xl text-center font-bold my-4">
          <h2 className="text-2xl text-center font-medium mb-4">
            Top Wears For Women
          </h2>

          <ProductGrid products={placeholderProducts} />

          <FeaturedCollection />

          <FeaaturesSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
