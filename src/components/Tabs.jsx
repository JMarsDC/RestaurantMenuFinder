
export default function Tabs({ title, categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 border-b border-gray-100">
      <h1 className="text-3xl font-extrabold text-gray-800">{title}</h1>

      <div className="flex space-x-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer font-medium transition-colors ${activeCategory === category
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