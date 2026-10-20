
export default class Restaurant {
  constructor(id, name, cuisineType, shopType, imageUrl) {
    this.id = id;
    this.name = name;
    this.cuisineType = cuisineType;
    this.shopType = shopType;
    this.imageUrl = imageUrl;
  }

  // Method from your class diagram
  getRestaurantId() {
    return this.id;
  }

  getName(){
    return this.name;
  }

  getCuisineType(){
    return this.cuisineType;
  }

  getShopType(){
    return this.shopType;
  }

  getImage(){
    return this.imageUrl;
  }

  // Method to fetch menu items belonging to this restaurant
  getMenu(menuItemsArray) {
    return menuItemsArray.filter(item => item.restaurantId === this.id);
  }
}