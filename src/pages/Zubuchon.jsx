import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import RestaurantIcon from "../components/RestaurantIcon";
import { restaurants, menuItems } from "../data/restaurantData";
import Tabs from "../components/Tabs";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";

export default function Zubuchon() {

    const restaurantMenu = restaurants[0].getMenu(menuItems);
    const menuCategories = ["All", ...new Set(restaurantMenu.map(item => item.getCategory()))];
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("")

    const filteredItems = restaurantMenu.filter(item => {
        const matchesCategory = activeCategory === "All" || item.getCategory() === activeCategory;
        const matchesSearch = item.getName().toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <HeroBanner Title1="Zubuchon" image="/images/ZUBUICON.jpeg" />

            <section className="relative w-full max-w-7xl mx-auto">

                <div className="flex justify-end mb-6 m-4">
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        placeholder="Search from menu..."
                    />
                </div>

                <Tabs
                    title="All Offers from Zubuchon"
                    categories={menuCategories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <FoodCard
                    menuItems={filteredItems}
                />

                <h1 id="Restaurants" className="text-3xl font-extrabold text-gray-800 mt-7">Restaurants / Shops</h1>
                <div className="flex flex-wrap gap-4 mt-6">
                    <RestaurantIcon Restaurant="Paolito's STK ta Bai!" Path="/Paolito" src="/images/PAOS.jpeg"/>
                    <RestaurantIcon Restaurant="Ngohiong Express" Path="/NgohiongExpress" src="/images/NGOS.jpeg" />
                    <RestaurantIcon Restaurant="Leona's Cakes & Pastries" Path="/Leona" src="/images/LEOS.jpeg"/>
                </div>
            </section>


        </>
    );
}