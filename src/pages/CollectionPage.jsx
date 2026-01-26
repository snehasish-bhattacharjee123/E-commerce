import React, { use, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import SortOption from "../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";
import FilterSidebar from "../components/Products/FilterSidebar";
import { useRef } from "react";

const CollectionPage = () => {
  const [products, setProducts] = React.useState([]);

  const sideBarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      sideBarRef.current.style.transform = "translateX(0)";
    } else {
      sideBarRef.current.style.transform = "translateX(-100%)";
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <button
        onClick={toggleSidebar}
        className=" lg:hidden border bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        <FiFilter className="mr-2" />
      </button>

      {/* filter Sidebar */}
      <div ref={sideBarRef} className={`${isSidebarOpen ? "translate-x-0" : "translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 bg-white border-r border-gray-200 p-6`}>
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* Sort Option */}
        <SortOption />

        {/* Products Grid */}   \

        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
