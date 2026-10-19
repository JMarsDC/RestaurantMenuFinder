
export default function Card({categoryData, activeCategory}){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {categoryData[activeCategory].map((item, index) => (
          <div
            key={index} 
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            
          </div>
        ))}
      </div>
    );
}