import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <nav className=" 
            flex px-4 py-4
            shadow-md md:px-8">

        <div >
            <Link className="font-serif italic text-[1.2rem] font-bold text-white md:text-[1.5rem]" 
            to="/"> 
            <span className="text-[#6FAF4F] text-4xl">Cebu</span>
            <span className="text-[#C44A3A] text-4xl">Bites</span>         
            </Link>
        </div>

        <div className="flex gap-4 md:gap-8">
            <Link to="/Home" className=" rounded-3xl px-2 py-2 text-base text-black 
            transition-colors duration-200 hover:bg-[#FC8A06] hover:text-white md:px-4 ml-10">Home </Link>

            <a href="#Restaurants" className=" rounded-3xl px-2 py-2 text-base text-black 
            transition-colors duration-200 hover:bg-[#FC8A06] hover:text-white md:px-4 ml-7">Restaurants</a>

        </div>
    </nav>
    );
}