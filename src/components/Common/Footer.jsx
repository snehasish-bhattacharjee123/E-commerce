import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RiFacebookFill, 
  RiInstagramLine, 
  RiTwitterXLine, 
  RiPinterestFill 
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="py-16 border-t bg-brand-dark-brown text-brand-cream font-inter">
      <div className="container grid grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-4 lg:px-0">
        
        {/* 1. Newsletter Section */}
        <div className="flex flex-col">
          <h3 className="mb-6 text-lg font-bold tracking-wider uppercase text-brand-white">
            Newsletter
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-gray-300">
            Be the first to know about new arrivals, sales & exclusive content.
          </p>

          <form className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input 
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm transition-all bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 text-sm font-bold uppercase transition-colors rounded-md bg-brand-gold text-brand-dark-brown hover:bg-brand-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* 2. Shop Links */}
        <div>
          <h3 className="mb-6 text-lg font-bold tracking-wider uppercase text-brand-white">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/shop" className="transition-colors hover:text-brand-gold">All Products</Link></li>
            <li><Link to="/collections" className="transition-colors hover:text-brand-gold">New Arrivals</Link></li>
            <li><Link to="/collections" className="transition-colors hover:text-brand-gold">Best Sellers</Link></li>
            <li><Link to="/collections" className="transition-colors hover:text-brand-gold">Sale</Link></li>
          </ul>
        </div>

        {/* 3. Support Links */}
        <div>
          <h3 className="mb-6 text-lg font-bold tracking-wider uppercase text-brand-white">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="transition-colors hover:text-brand-gold">Contact Us</Link></li>
            <li><Link to="/shipping" className="transition-colors hover:text-brand-gold">Shipping Policy</Link></li>
            <li><Link to="/returns" className="transition-colors hover:text-brand-gold">Returns & Exchanges</Link></li>
            <li><Link to="/faq" className="transition-colors hover:text-brand-gold">FAQs</Link></li>
          </ul>
        </div>

        {/* 4. Follow Us & Social Icons */}
        <div>
          <h3 className="mb-6 text-lg font-bold tracking-wider uppercase text-brand-white">Follow Us</h3>
          <p className="mb-6 text-sm text-gray-300">Join our community and share your style!</p>
          <div className="flex items-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-gold">
              <RiFacebookFill className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-gold">
              <RiInstagramLine className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-gold">
              <RiTwitterXLine className="w-6 h-6" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-gold">
              <RiPinterestFill className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="container px-6 pt-12 mx-auto mt-12 text-center border-t border-gray-700 lg:px-0">
        <p className="text-xs tracking-widest text-gray-400 uppercase">
          © 2026 MyLogo. All rights reserved. Built with precision.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
