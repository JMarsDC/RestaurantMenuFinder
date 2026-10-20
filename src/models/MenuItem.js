
export default class MenuItem {
  constructor(id, restaurantId, name, price, description, category, imageUrl) {
    this.id = id;
    this.restaurantId = restaurantId;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.imageUrl = imageUrl;
  }

  // Method from your class diagram
  getMenuId(){
    return this.id;
  }

  getRestaurantId(){
    return this.restaurantId;
  }

  getName(){
    return this.name;
  }

  getPrice(){
    return this.price;
  }

  getDescription(){
    return this.description;
  }

  getCategory(){
    return this.category;
  }

  getImage(){
    return this.imageUrl;
  }
}