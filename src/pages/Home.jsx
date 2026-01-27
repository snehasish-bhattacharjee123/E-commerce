import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
    </div>
  );
}

export default Home;
