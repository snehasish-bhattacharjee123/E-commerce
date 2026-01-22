import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrivals() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300; // Adjust scroll distance
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const newArrivals = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$29.99",
      image: [
        {
          url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
          altText: "White T-shirt",
        },
      ],
    },
    {
      id: 2,
      name: "Black Graphic Tee",
      price: "$34.99",
      image: [
        {
          url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
          altText: "Black graphic t-shirt",
        },
      ],
    },
    {
      id: 3,
      name: "Casual Blue T-Shirt",
      price: "$19.99",
      image: [
        {
          url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
          altText: "Blue casual t-shirt",
        },
      ],
    },
    {
      id: 4,
      name: "Oversized Streetwear Tee",
      price: "$49.99",
      image: [
        {
          url: "https://images.unsplash.com/photo-1618354691438-25bc04584c23",
          altText: "Oversized streetwear t-shirt",
        },
      ],
    },
    {
      id: 5,
      name: "Minimal Grey T-Shirt",
      price: "$24.99",
      image: [
        {
          url: "https://images.unsplash.com/photo-1585386959984-a41552231693",
          altText: "Grey minimal t-shirt",
        },
      ],
    },
    {
      id: 6,
      name: "Printed Fashion Tee",
      price: "$59.99",
      image: [
        {
          url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
          altText: "Printed fashion t-shirt",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto relative mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
            <p className="text-lg text-gray-600">
              Explore the latest additions to our collection.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 border rounded-full bg-white hover:bg-gray-100 transition shadow-sm"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border rounded-full bg-white hover:bg-gray-100 transition shadow-sm"
            >
              <FiChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content Container */}
      <div
        ref={scrollRef}
        className="container mx-auto flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Fallback for Firefox/IE
      >
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[280px] group relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={product.image[0].url}
                alt={product.image[0].altText}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-brand-dark-brown font-bold mt-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS to hide scrollbar (Add to your index.css or globals.css) */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default NewArrivals;
