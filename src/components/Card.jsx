
export default function Card({restaurants, activeCategory}){
const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.getCuisineType() === activeCategory
    );

    return(
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.getRestaurantId()} 
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            {/* Using your Class Getters */}
            <span className="text-xs font-semibold px-3 py-1 bg-orange-100 text-orange-600 rounded-full">
              {restaurant.getShopType()}
            </span>
            
            <h3 className="text-xl font-bold text-gray-800 mt-3">
              {restaurant.getName()}
            </h3>

          </div>
        ))}
      </div>
    );
}