import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import { restaurants } from "../data/restaurantData";
import RestaurantIcon from "../components/RestaurantIcon";

export default function Home() {

  const categories = [...new Set(restaurants.map((r) => r.getCuisineType()))];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      <HeroBanner Title1="Feast Your Senses," Title2=" Fast and Fresh" image="/images/Home.jpg" />

      <section className="relative w-full max-w-7xl mx-auto">

        <Tabs
          title="Select what you crave for!"
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <Card
          restaurants={restaurants}
          activeCategory={activeCategory}
        />

        <h1 id="Restaurants" className="text-3xl font-extrabold text-gray-800 mt-7">Restaurants / Shops</h1>
        <div className="flex flex-wrap gap-4 mt-6">
          <RestaurantIcon Restaurant="Paolito's STK ta Bai!" Path="/Paolito" src="/images/PAOS.jpeg"/>
          <RestaurantIcon Restaurant="Zubuchon" Path="/Zubuchon" src="/images/ZUBS.jpeg"/>
          <RestaurantIcon Restaurant="Ngohiong Express" Path="/NgohiongExpress" src="/images/NGOS.jpeg" />
          <RestaurantIcon Restaurant="Leona's Cakes & Pastries" Path="/Leona" src="/images/LEOS.jpeg"/>
        </div>

      </section>


    </>
  );
}