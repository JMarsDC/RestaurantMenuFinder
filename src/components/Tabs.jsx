
export default function Tabs({ title, categoryData, activeCategory, setActiveCategory }){
    return(
      <div className="flex justify-between items-center py-6">
        <h1 className="text-3xl font-extrabold">{title}</h1>

        <div className="flex space-x-6 overflow-x-auto">
          {Object.keys(categoryData).map((category) => (
            <button
              key={category}
              // 2. Update state on click without page refresh
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer font-medium transition-colors pb-1 ${
                activeCategory === category
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
          
        </div>
      </div>
    );
}