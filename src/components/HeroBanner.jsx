
export default function HeroBanner(){
    return(
    <section className="relative w-full max-w-7xl mx-auto bg-gradient-to-r from-[#C2512F] to-[#E5811F] rounded-3xl p-8 lg:p-12 overflow-hidden shadow-2xl">
      
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* ================= LEFT CONTENT: Text & Input ================= */}
        <div className="flex flex-col space-y-6 max-w-xl text-white">
          <p className="text-sm font-medium opacity-90">
            Order Restaurant food and takeaway.
          </p>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Feast Your Senses, <br />
            <span className="text-[#FFC107]">Fast and Fresh</span>
          </h1>
          
        </div>

        {/* ================= RIGHT CONTENT: Placeholder Divs ================= */}
        <div className="relative flex items-center justify-center w-full lg:w-1/2 min-h-[380px]">
          
          {/* Main Hero Model Placeholder Box (Replaces main woman image) */}
          <div className="w-64 h-80 bg-orange-200/40 rounded-3xl border-2 border-dashed border-orange-100 flex items-center justify-center text-white font-bold text-sm shadow-inner">
            [ HERO IMAGE BOX ]
          </div>

          {/* Floating Order Status Cards Stack */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
            
            {/* Card 1 */}
            <div className="relative bg-white p-3.5 rounded-2xl shadow-xl w-64 text-xs border border-gray-100">
              {/* Badge Number 1 */}
              <span className="absolute -top-2.5 -right-2 bg-[#FF8C00] text-white font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md">
                1
              </span>
              <p className="font-extrabold text-[#C2512F] text-sm">CebuBites</p>
              <p className="font-bold text-gray-800 mt-0.5">We've Received your order!</p>
              <p className="text-gray-500 text-[10px] mt-0.5">Awaiting restaurant acceptance 📍</p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white p-3.5 rounded-2xl shadow-xl w-64 text-xs border border-gray-100">
              {/* Badge Number 2 */}
              <span className="absolute -top-2.5 -right-2 bg-[#FF8C00] text-white font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md">
                2
              </span>
              <p className="font-extrabold text-[#C2512F] text-sm">CebuBites</p>
              <p className="font-bold text-gray-800 mt-0.5">Order Accepted! ✅</p>
              <p className="text-gray-500 text-[10px] mt-0.5">Your order will be delivered shortly</p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white p-3.5 rounded-2xl shadow-xl w-64 text-xs border border-gray-100">
              {/* Badge Number 3 */}
              <span className="absolute -top-2.5 -right-2 bg-[#FF8C00] text-white font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md">
                3
              </span>
              <p className="font-extrabold text-[#C2512F] text-sm">CebuBites</p>
              <p className="font-bold text-gray-800 mt-0.5">Your rider's nearby 🛵</p>
              <p className="text-gray-500 text-[10px] mt-0.5">They're almost there – get ready!</p>
            </div>

          </div>

        </div>

      </div>
    </section>
    );
}