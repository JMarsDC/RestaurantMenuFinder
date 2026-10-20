
export default class Restaurant {
  constructor(id, name, cuisineType, shopType, imageUrl, path) {
    this.id = id;
    this.name = name;
    this.cuisineType = cuisineType;
    this.shopType = shopType;
    this.imageUrl = imageUrl;
    this.path = path;
  }

  getRestaurantId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCuisineType() {
    return this.cuisineType;
  }

  getShopType() {
    return this.shopType;
  }

  getImage() {
    return this.imageUrl;
  }

  getPath() {
    return this.path;
  }

  getMenu(menuItemsArray) {
    return menuItemsArray.filter(item => item.restaurantId === this.id);
  }
}