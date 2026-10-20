import { Link } from "react-router-dom"

export default function Card({ restaurants, activeCategory }) {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.getCuisineType() === activeCategory
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {filteredRestaurants.map((restaurant) => (
        <Link
          to={restaurant.getPath()}
          key={restaurant.getRestaurantId()}
          className="relative overflow-hidden p-6 rounded-2xl shadow-md hover:shadow-lg transition-all min-h-[200px] flex flex-col justify-between group"
        >
          <img
            src={restaurant.getImage()}
            alt={restaurant.getName()}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
       
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
          <div className="relative z-10">
            <span className="text-xs font-semibold px-3 py-1 bg-orange-500 text-white rounded-full">
              {restaurant.getShopType()}
            </span>
          </div>

          <div className="relative z-10 mt-auto">
            <h3 className="text-xl font-bold text-white">
              {restaurant.getName()}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}