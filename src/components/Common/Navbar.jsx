import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import logoimage from "../../assets/WhatsApp Image 2026-01-21 at 1.11.31 PM.jpeg";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <>
      <nav className="container flex items-center justify-between px-6 py-4 mx-auto font-inter bg-brand-cream">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tighter uppercase text-brand-dark-brown"
          >
            {/* 1. Add your logo image here */}
            <img
              src={logoimage}
              alt="Markrin Logo"
              className="object-contain w-auto h-8"
            />

            {/* 2. Brand Text */}
            <span>Markrin</span>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden space-x-6 md:flex">
          {["Shop", "Collections", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm font-medium uppercase transition-colors duration-200 text-brand-text hover:text-brand-gold"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">

          <Link to="/admin" className="block bg-brand-cream hover:bg-brand-dark-brown hover:text-white  px-2 rounded-lg">
            Admin
          </Link>

          <Link to="/profile">
            <HiOutlineUser className="w-6 h-6 transition-colors duration-200 text-brand-text hover:text-brand-gold" />
          </Link>

          {/* Cart Button with brand-maroon-accent (Assumed added to your config) */}
          <button onClick={toggleCartDrawer} className="relative">
            <HiOutlineShoppingBag className="w-6 h-6 transition-colors duration-200 text-brand-text hover:text-brand-gold" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
              4
            </span>
          </button>

          <SearchBar />

          {/* Mobile Menu Icon */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-brand-text" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer Component */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-brand-cream shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="w-6 h-6 text-brand-text" />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          <h2 className="text-xl font-bold tracking-tight uppercase text-brand-dark-brown">
            Menu
          </h2>
          <nav className="flex flex-col space-y-4">
            {["Shop", "Collections", "About", "Contact"].map((item) => (
              <Link
                key={item}
                onClick={toggleNavDrawer}
                to={`/${item.toLowerCase()}`}
                className="text-lg font-medium uppercase text-brand-text hover:text-brand-gold"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {navDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={toggleNavDrawer}
        ></div>
      )}
    </>
  );
}

export default Navbar;
