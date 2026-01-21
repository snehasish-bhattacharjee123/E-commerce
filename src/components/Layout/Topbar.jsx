import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

function Topbar() {
  return (
    /* Uses --color-brand-dark-brown and --color-brand-cream */
    <div className="p-2 bg-brand-dark-brown text-brand-cream font-inter">
      <div className="container flex items-center justify-between mx-auto">
        
        {/* Social Icons with brand-gold hover effect */}
        <div className="flex items-center space-x-4">
          <a href="#" className="transition-colors hover:text-brand-gold">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="transition-colors hover:text-brand-gold">
            <IoLogoInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="transition-colors hover:text-brand-gold">
            <RiTwitterXLine className="w-5 h-5" />
          </a>
        </div>

        {/* Shipping Text */}
        <div className="text-sm font-medium tracking-wide">
          <span>WE SHIP WORLDWIDE ————</span>
        </div>

        {/* Contact Link */}
        <div className="text-sm">
          <a href="tel:+1234567890" className="transition-colors hover:text-brand-gold">
            Call Us: +1 234 567 890
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Topbar;
