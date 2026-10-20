import Restaurant from "../models/Restaurant";
import MenuItem from "../models/MenuItem";

// 1. Create Restaurant Objects
export const restaurants = [
  new Restaurant(1, "Zubu Chon", "Local Delicacies", "Restaurant", "url_here"),
  new Restaurant(2, "Larsian BBQ", "Street Food", "Restaurant", "url_here"),
  new Restaurant(3, "Larsian BBQ", "Street Food", "Shop" ,"url_here"),
  new Restaurant(4, "Larsian BBQ", "Seafood", "Shop" ,"url_here"),
  new Restaurant(4, "Larsian BBQ", "Seafood", "Stall" ,"url_here"),
  new Restaurant(4, "Larsian BBQ", "Sweet Treat", "Stall" ,"url_here"),
  new Restaurant(4, "Larsian BBQ", "Sweet Treat", "Shop" ,"url_here"),
];

// 2. Create MenuItem Objects linked by restaurantId
export const menuItems = [
  new MenuItem(101, 1, "Classic Lechon Cebu (Per Kilo)", 750, "Crispy, juicy authentic Lechon Cebu.", "Local Delicacies", "url_here"),
  new MenuItem(102, 1, "Spicy Lechon", 780, "Lechon tossed in chillies and spices.", "Local Delicacies", "url_here"),
  new MenuItem(103, 2, "Pork BBQ Skewers", 20, "Open-air charcoal pork skewers.", "Street Food", "url_here"),
  new MenuItem(104, 2, "Puso (Hangrice)", 10, "Traditional hanging rice wrapped in coconut leaves.", "Street Food", "url_here"),
];