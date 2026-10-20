import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <nav className="bg-[#dca847] 
            flex px-4 py-4
            shadow-md md:px-8">

        <div >
            <Link className="font-serif italic text-[1.2rem] font-bold text-white md:text-[1.5rem]" 
            to="/">Cebu Bites</Link>
        </div>

        <div className="flex gap-4 md:gap-8">
            <Link to="/Home" className="font-serif rounded-3xl px-2 py-2 text-base text-[#FDFBF7] 
            transition-colors duration-200 hover:bg-[#f3b645] md:px-4">Home </Link>

            <a href="#Restaurants" className="font-serif rounded-3xl px-2 py-2 text-base text-[#FDFBF7] 
            transition-colors duration-200 hover:bg-[#f3b645] md:px-4">Restaurants</a>

        </div>
    </nav>
    );
}