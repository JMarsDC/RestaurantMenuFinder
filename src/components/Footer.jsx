
export default function Footer(){
    return(
<footer className="w-full bg-[#030816] py-6 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">

  <p>Order.uk Copyright 2024, All Rights Reserved.</p>

  <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
    <a href="#" className="hover:text-white transition-colors">Terms</a>
    <a href="#" className="hover:text-white transition-colors">Pricing</a>
    <a href="#" className="hover:text-white transition-colors">Do not sell or share my personal information</a>
  </div>
</footer>
    );
}