import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

function Topbar() {
  return (
    // Replaced bg-[#fb3306] with the custom brand color.
    // Changed text-white to text-brand-cream for consistency with the new palette.
    <div className="bg-brand-dark-brown text-brand-cream p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Updated hover colors to use brand-gold for accentuation */}
          <a href="#" className="hover:text-brand-gold">
            <TbBrandMeta className="h-5 w-5" />
          </a>

          <a href="#" className="hover:text-brand-gold">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-brand-gold">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center">
          <span>We ship Worldwide ----</span>
        </div>

        <div className="text-sm">
          {/* Updated hover colors to use brand-gold for accentuation */}
          <a href="tel:+1234567890" className="hover:text-brand-gold">
            Call Us: +1234567890
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
