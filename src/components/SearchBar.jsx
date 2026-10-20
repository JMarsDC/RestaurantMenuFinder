import React from "react";

export default function SearchBar({ searchQuery, setSearchQuery, placeholder = "Search..." }) {
  return (
    <div className="relative flex items-center w-full max-w-md">
      <input 
        type="text" 
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Updates parent state on type
        className="w-full py-3 pl-6 pr-6 rounded-full text-gray-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
      />
    </div>
  );
}