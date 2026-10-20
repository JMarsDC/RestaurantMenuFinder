import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import { restaurants } from "../data/restaurantData"; 
import RestaurantIcon from "../components/RestaurantIcon";

export default function Home(){

const categories = [...new Set(restaurants.map((r) => r.getCuisineType()))];

const [activeCategory, setActiveCategory] = useState(categories[0]);

return (
  <>
    <HeroBanner Title1="Feast Your Senses," Title2=" Fast and Fresh" image="..."/>

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

    <h1 id="Restaurants" className="text-3xl font-extrabold text-gray-800 mt-7">Restaurants / Shops</h1>
    <div className="flex flex-wrap gap-4 mt-6">
    <RestaurantIcon Restaurant="Paolito's STK ta Bai!" Path="/Paolito"/>
    <RestaurantIcon Restaurant="Zubuchon" Path="/Zubuchon"/>
    <RestaurantIcon Restaurant="Ngohiong Express" Path="/NgohiongExpress"/>
    <RestaurantIcon Restaurant="Leona's Cakes & Pastries" Path="/Leona"/>
    </div>

    </section>


    </>
  );
}