import { Link } from "react-router-dom";

export default function RestaurantIcon({ Restaurant, Path }) {
    return (
        <>
            <Link to={Path} className="flex flex-col w-44 rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow cursor-pointer">

                <div className="w-full aspect-square p-2 flex items-center justify-center">
                    <img
                        src="YOUR_IMAGE_URL_HERE.jpg"
                        alt={Restaurant}
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>

                <div className="bg-orange-500 py-2.5 px-2 text-center">
                    <span className="text-white text-s font-bold leading-tight line-clamp-1">
                        {Restaurant}
                    </span>
                </div>
            </Link>
        </>
    );
}