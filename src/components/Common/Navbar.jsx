import React from "react";
import { Link } from "react-router-dom";
// Corrected import path from "hi2" to "react-icons/hi2"
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2"; 
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    // The nav container will inherit the global bg-brand-cream from the body definition in index.css
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* logo on the left */}
      <div>
        <Link 
          to="/" 
          // Updated logo color to brand-dark-brown for strong visibility
          className="text-2xl font-bold uppercase tracking-tighter text-brand-dark-brown"
        >
          MyLogo
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/shop"
          // Updated link colors to brand-text with brand-gold hover accent
          className="text-brand-text hover:text-brand-gold text-sm font-medium uppercase transition duration-200"
        >
          Shop
        </Link>
        <Link
          to="/collections"
          className="text-brand-text hover:text-brand-gold text-sm font-medium uppercase transition duration-200"
        >
          Collections
        </Link>
        <Link
          to="/about"
          className="text-brand-text hover:text-brand-gold text-sm font-medium uppercase transition duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-brand-text hover:text-brand-gold text-sm font-medium uppercase transition duration-200"
        >
          Contact
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <Link to="/profile">
          {/* Updated icon colors */}
          <HiOutlineUser className="h-6 w-6 text-brand-text hover:text-brand-gold transition duration-200" />
        </Link>

        {/* Cart Button */}
        <button className="relative">
          {/* Updated icon colors */}
          <HiOutlineShoppingBag className="h-6 w-6 text-brand-text hover:text-brand-gold transition duration-200" />
          
          {/* Fixed Badge: Updated bg-red-500 to bg-brand-maroon-accent */}
          <span className="absolute -top-1 -right-2 bg-brand-maroon-accent text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
            4
          </span>
        </button>

        {/* search */}
        <SearchBar />
        
        {/* Mobile Menu Icon (Visible on small screens) */}
        <button className="md:hidden">
          {/* Updated icon colors */}
          <HiBars3BottomRight className="h-6 w-6 text-brand-text" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
