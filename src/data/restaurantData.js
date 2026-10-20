import Restaurant from "../models/Restaurant";
import MenuItem from "../models/MenuItem";

// 1. Create Restaurant Objects
export const restaurants = [
  new Restaurant(1, "Zubu Chon", "Local Delicacies", "Restaurant", "url_here", "/Zubuchon"),
  new Restaurant(2, "Ngohiong Express", "Street Food", "Food Stall", "url_here", "/NgohiongExpress"),
  new Restaurant(3, "Paolito's STK ta Bai!", "Seafoods", "Restaurant" ,"url_here", "/Paolito"),
  new Restaurant(4, "Leona's Pastries & Cakes", "Sweet Treats", "Shop" ,"url_here", "/Leona"),
];

// 2. Create MenuItem Objects linked by restaurantId
export const menuItems = [
  new MenuItem(101, 1, "Classic Lechon Cebu (Per Kilo)", 750, "Crispy, juicy authentic Lechon Cebu.", "Roasted Meats", "url_here"),
  new MenuItem(102, 1, "Classic Lechon Cebu (Per Kilo)", 750, "Crispy, juicy authentic Lechon Cebu.", "Roasted Meats", "url_here"),
  new MenuItem(103, 1, "Classic Lechon Cebu (Per Kilo)", 750, "Crispy, juicy authentic Lechon Cebu.", "Roasted Meats", "url_here"),
  new MenuItem(104, 1, "Spicy Lechon", 780, "Lechon tossed in chillies and spices.", "Mains", "url_here"),
  new MenuItem(105, 1, "Spicy Lechon", 780, "Lechon tossed in chillies and spices.", "Mains", "url_here"),
  new MenuItem(106, 1, "Spicy Lechon", 780, "Lechon tossed in chillies and spices.", "Mains", "url_here"),
  new MenuItem(107, 1, "Pochero", 780, "Lechon tossed in chillies and spices.", "Fried Rice", "url_here"),
  new MenuItem(108, 1, "Pochero", 780, "Lechon tossed in chillies and spices.", "Fried Rice", "url_here"),
  new MenuItem(109, 1, "Pochero", 780, "Lechon tossed in chillies and spices.", "Fried Rice", "url_here"),

  new MenuItem(103, 2, "Pork BBQ Skewers", 20, "Open-air charcoal pork skewers.", "Street Food", "url_here"),
  new MenuItem(104, 2, "Puso (Hangrice)", 10, "Traditional hanging rice wrapped in coconut leaves.", "Street Food", "url_here"),
];