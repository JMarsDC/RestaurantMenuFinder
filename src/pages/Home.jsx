import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Card from "../components/Card";
import Tabs from "../components/Tabs";

export default function Home(){

const categoryData = {
    "Local Delicacies": [
      { title: "Zubu Chon", desc: "Crispy, juicy authentic Lechon Cebu.", bg: "bg-orange-500" },
      { title: "Bruh Chon", desc: "Testing description for another spot", bg: "bg-orange-500" }
    ],
    "Street Food": [
      { title: "Larsian BBQ", desc: "Open-air charcoal pork and chicken skewers.", bg: "bg-red-500" },
      { title: "Siomai sa Tisa", desc: "Famous street-style steamed siomai with chili oil.", bg: "bg-red-500" }
    ],
    "Seafoods": [
      { title: "STK ta Bay!", desc: "Fresh baked scallops and grilled tuna panga.", bg: "bg-blue-500" }
    ],
    "Sweet Treats": [
      { title: "Leona's Pastries", desc: "Cebuano cakes, otap, and sweet pastries.", bg: "bg-pink-500" }
    ]
  };

const [activeCategory, setActiveCategory] = useState(Object.keys(categoryData)[0]);

return (
  <>
    <HeroBanner />

    <section className="relative w-full max-w-7xl mx-auto">
      
      {/* Header & Category Buttons */}
      <Tabs 
        title="Select what you crave for!" 
        categoryData={categoryData} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/*Conditional Rendering: Dynamic Card Appears at the Bottom */}
      <Card categoryData={categoryData} activeCategory={activeCategory}/>

    </section>

    </>
  );
}