import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";

function ProductGrid({ products }) {
  return (
    <div className="container mx-auto px-6 py-12 bg-brand-cream">
      {/* Optional: Section Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-brand-dark-brown tracking-tight">
            Featured Collection
          </h2>
          <div className="h-1 w-12 bg-brand-gold mt-2"></div>
        </div>
        <Link
          to="/shop"
          className="text-sm font-bold uppercase tracking-widest text-brand-gold hover:text-brand-dark-brown transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="group block"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-brand-white rounded-xl shadow-sm mb-4">
              <div className="w-full h-[400px]">
                <img
                  src={product.image[0].url}
                  alt={product.image[0].name || product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Quick Add Overlay (Desktop) */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-brand-dark-brown/80 to-transparent">
                <button className="w-full py-2 bg-brand-gold text-brand-dark-brown text-xs font-bold uppercase tracking-tighter rounded-md flex items-center justify-center gap-2 hover:bg-brand-white transition-colors">
                  <RiShoppingBagLine size={16} />
                  Quick Add
                </button>
              </div>

              {/* Sale Tag (Optional - logic based on price) */}
              {product.originalPrice && (
                <span className="absolute top-4 left-4 bg-brand-maroon-accent text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                  Sale
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-1 px-1">
              <h3 className="text-sm font-bold text-brand-dark-brown uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-brand-text font-semibold text-base">
                  ${product.price}
                </p>
                {product.originalPrice && (
                  <p className="text-gray-400 text-xs line-through">
                    ${product.originalPrice}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
