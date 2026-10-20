import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import RestaurantIcon from "../components/RestaurantIcon";
import { restaurants, menuItems } from "../data/restaurantData";
import Tabs from "../components/Tabs";
import FoodCard from "../components/FoodCard";

export default function Zubuchon(){

const restaurantMenu = restaurants[0].getMenu(menuItems);
const menuCategories = ["All", ...new Set(restaurantMenu.map(item => item.getCategory()))];
const [activeCategory, setActiveCategory] = useState("All");

    return(
        <>
    <HeroBanner Title1="Zubuchon" image="..."/>

    <section className="relative w-full max-w-7xl mx-auto">

        <Tabs 
        title="" 
        categories={menuCategories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
         />

        <FoodCard 
        menuItems={restaurantMenu} 
        activeCategory={activeCategory} 
        />

        <h1 id="Restaurants" className="text-3xl font-extrabold text-gray-800 mt-7">Restaurants / Shops</h1>
            <div className="flex flex-wrap gap-4 mt-6">
                <RestaurantIcon Restaurant="Paolito's STK ta Bai!" Path="/Paolito"/>
                <RestaurantIcon Restaurant="Ngohiong Express" Path="/NgohiongExpress"/>
                <RestaurantIcon Restaurant="Leona's Cakes & Pastries" Path="/Leona"/>
            </div>
    </section>


        </>
    );
}