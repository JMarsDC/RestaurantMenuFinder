import React from "react";

export default function FoodCard({ menuItems, activeCategory }) {
  // Filter items based on whether "All" is selected or a specific category tab
  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.getCategory() === activeCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {filteredItems.map((item) => (
        <div
          key={item.getMenuId()} 
          className="p-4 bg-white border border-gray-200 rounded-2xl 
          shadow-md hover:shadow-lg transition-all flex justify-between"
        >

          <div className="flex flex-col justify-between h-full">
            <div>
                <h3 className="text-lg font-bold text-gray-800">{item.getName()}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.getDescription()}</p>
            </div>

            <div className="mt-4">
                <span className="text-orange-600 font-extrabold">
                {item.formatPrice ? item.formatPrice() : `PHP ${item.getPrice().toFixed(2)}`}
                </span>
            </div>
          </div>
          
          <div>
            <img 
              src={item.getImage()} 
              alt={item.getName()} 
              className="w-full h-48 object-cover rounded-xl mb-4 bg-gray-100"
            />
          </div>

        </div>
      ))}
    </div>
  );
}