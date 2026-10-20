import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import { restaurants } from "../data/restaurantData"; 

export default function Home(){
  
const categories = [...new Set(restaurants.map((r) => r.getCuisineType()))];

const [activeCategory, setActiveCategory] = useState(categories[0]);

return (
  <>
    <HeroBanner />

    <section className="relative w-full max-w-7xl mx-auto">
      
      {/* Header & Category Buttons */}
      <Tabs 
          title="Select what you crave for!" 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

      {/*Conditional Rendering: Dynamic Card Appears at the Bottom */}
      <Card 
          restaurants={restaurants} 
          activeCategory={activeCategory} 
        />

    </section>

    </>
  );
}