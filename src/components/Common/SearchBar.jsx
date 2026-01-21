import React from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { useState } from "react";

function SearchBar() {
  const [searchterm, setSearchterm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchtoggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* SearchBar Component */}
      {isOpen ? (
        <form className="relative flex items-center justify-center w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            // onChange={(e) => setSearchterm(e.target.value)}
            className="bg-gray-100 rounded-lg pl-2 pr-12 focus:outline-none w-full placeholder:text-gray-700 py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            onClick={handleSearchtoggle}
            className="absolute right-2"
          >
            <HiXMark className="h-6 w-6 text-gray-700" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchtoggle}>
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
