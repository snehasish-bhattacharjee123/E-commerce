import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2"; 
import { IoMdClose } from 'react-icons/io';
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

function Navbar() {
  // 1. Fixed state initialization to boolean
  // 2. Added separate state for Mobile Nav Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* logo on the left */}
        <div>
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter uppercase text-brand-dark-brown"
          >
            MyLogo
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden space-x-6 md:flex">
          <Link to="/shop" className="text-sm font-medium uppercase transition duration-200 text-brand-text hover:text-brand-gold">
            Shop
          </Link>
          <Link to="/collections" className="text-sm font-medium uppercase transition duration-200 text-brand-text hover:text-brand-gold">
            Collections
          </Link>
          <Link to="/about" className="text-sm font-medium uppercase transition duration-200 text-brand-text hover:text-brand-gold">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium uppercase transition duration-200 text-brand-text hover:text-brand-gold">
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <HiOutlineUser className="w-6 h-6 transition duration-200 text-brand-text hover:text-brand-gold" />
          </Link>

          {/* Cart Button */}
          <button onClick={toggleCartDrawer} className="relative">
            <HiOutlineShoppingBag className="w-6 h-6 transition duration-200 text-brand-text hover:text-brand-gold" />
            <span className="absolute -top-1 -right-2 bg-brand-maroon-accent text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
              4
            </span>
          </button>

          <SearchBar />
          
          {/* Mobile Menu Icon - Added onClick */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-brand-text" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer Component */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
      
      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-brand-cream shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0": "-translate-x-full"}`}>
        <div className="flex justify-end p-4">
          {/* Added onClick to close mobile menu */}
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        {/* Mobile Link List */}
        <div className="flex flex-col p-6 space-y-4">
        <h2 className="mb-4 text-xl font-semibold "> Menu</h2>
        <nav className="flex flex-col p-6 space-y-4">
          <Link onClick={toggleNavDrawer} to="/shop" className="text-lg font-medium uppercase text-brand-text">Shop</Link>
          <Link onClick={toggleNavDrawer} to="/collections" className="text-lg font-medium uppercase text-brand-text">Collections</Link>
          <Link onClick={toggleNavDrawer} to="/about" className="text-lg font-medium uppercase text-brand-text">About</Link>
          <Link onClick={toggleNavDrawer} to="/contact" className="text-lg font-medium uppercase text-brand-text">Contact</Link>
        </nav>
        </div>
          
      </div>

      {/* Optional Overlay when mobile menu is open */}
      {navDrawerOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={toggleNavDrawer}
        ></div>
      )}
    </>
  );
}

export default Navbar;
  