import Restaurant from "../models/Restaurant";
import MenuItem from "../models/MenuItem";

// 1. Create Restaurant Objects
export const restaurants = [
  new Restaurant(1, "Zubu Chon", "Local Delicacies", "Restaurant", "url_here", "/Zubuchon"),
  new Restaurant(2, "Ngohiong Express", "Street Food", "Food Stall", "url_here", "/NgohiongExpress"),
  new Restaurant(3, "Paolito's STK ta Bai!", "Seafoods", "Restaurant", "url_here", "/Paolito"),
  new Restaurant(4, "Leona's Pastries & Cakes", "Sweet Treats", "Shop", "url_here", "/Leona"),
];

// 2. Create MenuItem Objects linked by restaurantId
export const menuItems = [
  // 1 - Zubuchon
  new MenuItem(100, 1, "Zubuchon (Classic Roast Pig)", 490.00, "Slow-roasted pork cooked over charcoal with local herbs, lemon grass, and sea salt, resulting in juicy meat and crispy skin.", "Roasted Meats", "url_here"),
  new MenuItem(101, 1, "Boneless Zubuchon", 490.00, "All-belly roast pork seasoned with organic herbs and spices, offering extra rich, fatty flavor without any bones.", "Roasted Meats", "url_here"),
  new MenuItem(102, 1, "Pritchon", 530.00, "Chopped lechon that is deep-fried to achieve an extra crunchy outer texture while keeping the meat tender.", "Roasted Meats", "url_here"),
  new MenuItem(103, 1, "Lechon Kare-Kare", 370.00, "Crispy lechon served in a rich peanut sauce stew with native vegetables and a side of savory shrimp paste (bagoong).", "Traditional Filipino Mains", "url_here"),
  new MenuItem(104, 1, "Zubuchon Dinuguan", 370.00, "A rich, blood-thickened pork stew made exclusively with lechon meat (no innards) and smooth coconut cream.", "Traditional Filipino Mains", "url_here"),
  new MenuItem(105, 1, "Classic Zubuchon Adobo", 490.00, "Old-fashioned adobo cooked without soy sauce—tender pork marinated in vinegar, salt, and garlic, slow-cooked over charcoal.", "Traditional Filipino Mains", "url_here"),
  new MenuItem(106, 1, "Lechon Fried Rice", 240.00, "Sautéed fried rice tossed with savory, crispy bits of Zubuchon lechon.", "Fried Rice Specialties", "url_here"),
  new MenuItem(107, 1, "Crab & Aligue Fried Rice", 240.00, "Flavorful fried rice infused with rich crab fat (aligue) and tender crab meat.", "Fried Rice Specialties", "url_here"),
  new MenuItem(108, 1, "Chorizo & Egg Fried Rice", 240.00, "Fried rice seasoned with house-made skinless native chorizo and scrambled eggs.", "Fried Rice Specialties", "url_here"),

  // 2 - Ngohiong Express
  new MenuItem(109, 2, "Cebuano Ngohiong", 33.00, "Deep-fried batter-coated spring roll stuffed with jicama (singkamas), heart of palm (ubod), ground pork, and five-spice seasoning.", "Fried Snacks & Bites", "url_here"),
  new MenuItem(110, 2, "Tempura", 33.00, "Street-style deep-fried flour and fish logs served with sweet-spicy dipping sauce.", "Fried Snacks & Bites", "url_here"),
  new MenuItem(111, 2, "Squid Rolls", 50.00, "Crispy rolled squid meatballs fried to a golden brown.", "Fried Snacks & Bites", "url_here"),
  new MenuItem(112, 2, "Steamed Siomai Meal", 92.00, "4 pieces of savory steamed pork siomai served over a cup of hot white rice with garlic chili sauce.", "Budget Rice Meals", "url_here"),
  new MenuItem(113, 2, "Pork Chop Meal", 110.00, "Breaded and deep-fried pork chop paired with a cup of rice.", "Budget Rice Meals", "url_here"),
  new MenuItem(114, 2, "Bacon Roll Meal", 83.00, "2 pieces of savory bacon-wrapped rolls served alongside white rice.", "Budget Rice Meals", "url_here"),
  new MenuItem(115, 2, "Batchoy Special", 183.00, "Noodle soup loaded with pork meat, liver, green onions, crispy chicharon, and a soft egg.", "Noodle Soups", "url_here"),
  new MenuItem(116, 2, "Makimi", 132.00, "Thick starch-based soup served with ramen noodles, pork toppings, fried garlic, and black pepper.", "Noodle Soups", "url_here"),
  new MenuItem(117, 2, "Wanton Soup", 110.00, "Noodle soup with savory pork wanton dumplings in a garlic broth.", "Noodle Soups", "url_here"),

  // 3 - Paolito
  new MenuItem(118, 3, "Kinilaw (Fish Ceviche)", 279.00, "Fresh raw fish cubed and marinated in vinegar, calamansi, onions, and chili.", "Roasted Meats", "url_here"),
  new MenuItem(119, 3, "Suglaw with Gata", 335.00, "A delicious combination of grilled pork belly (sinugba) and fish ceviche (kinilaw) tossed in creamy coconut milk.", "Roasted Meats", "url_here"),
  new MenuItem(120, 3, "Crispy Kangkong", 455.00, "Deep-fried river spinach leaves coated in a light, crunchy batter and served with a dipping sauce.", "Roasted Meats", "url_here"),
  new MenuItem(121, 3, "Baked Scallops", 255.00, "Coated in rich, melted butter and cheese; widely considered an absolute must-order when visiting.", "Mains", "url_here"),
  new MenuItem(122, 3, "Grilled Tuna Panga (Tuna Jaw)", 450.00, "A legendary local staple that is expertly charred while keeping the inside incredibly juicy and tender.", "Mains", "url_here"),
  new MenuItem(123, 3, "Sinugbang Gusok", 799.00, "Smoky, marinated pork spare ribs grilled to a perfect, tender char.", "Mains", "url_here"),
  new MenuItem(124, 3, "Pochero / Sizzling Pochero", 1145.00, "A rich, comforting beef shank soup with vegetables, or served on a hot sizzling plate draped in gravy.", "Sabaw", "url_here"),
  new MenuItem(125, 3, "Fish Tinola", 455.00, "A clean, traditional ginger-and-onion clear fish broth that perfectly captures home-style Cebuano cooking.", "Sabaw", "url_here"),
  new MenuItem(126, 3, "Shrimp Sinigang", 455.00, "A sharply sour and savory tamarind soup loaded with local vegetables and your choice of protein.", "Sabaw", "url_here"),

  // 4 - Leona
  new MenuItem(127, 4, "Mango Cake", 50.00, "Light and airy chiffon cake layered with fresh whipped cream and sweet mango slices.", "Signature Cakes", "url_here"),
  new MenuItem(128, 4, "Ube Cheese Cake", 53.00, "Sponge cake infused with purple yam (ube) flavor and rich cheese fillings/toppings.", "Signature Cakes", "url_here"),
  new MenuItem(129, 4, "Japanese Cheesecake", 95.00, "Fluffy, melt-in-your-mouth soufflé-style cheesecake.", "Signature Cakes", "url_here"),
  new MenuItem(130, 4, "Pork Empanada", 38.00, "Flaky baked pastry shell filled with seasoned ground pork, potatoes, and raisins.", "Savory Bakes & Pastries", "url_here"),
  new MenuItem(131, 4, "Chicken Turnover", 44.00, "Golden puff pastry stuffed with creamed chicken filling.", "Savory Bakes & Pastries", "url_here"),
  new MenuItem(132, 4, "Meatroll", 38.00, "Soft bread roll baked around a savory meat filling.", "Savory Bakes & Pastries", "url_here"),
  new MenuItem(133, 4, "Egg Tart", 29.00, "Baked pastry cup with a smooth, sweet egg custard center.", "Desserts & Bars", "url_here"),
  new MenuItem(134, 4, "S'mores Bar", 162.00, "Rich graham-based chocolate squares topped with toasted marshmallow cream.", "Desserts & Bars", "url_here"),
  new MenuItem(135, 4, "Chocolate Brownies", 162.00, "Fudgy chocolate brownies baked to a soft center with a crinkled top.", "Desserts & Bars", "url_here")
];