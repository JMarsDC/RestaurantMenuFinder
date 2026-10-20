
export default function HeroBanner({ Title1, Title2, image }) {
  return (
    <section className="relative w-full max-w-7xl mx-auto bg-gradient-to-r from-[#C2512F] to-[#E5811F] rounded-3xl p-8 lg:p-12 overflow-hidden shadow-2xl">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

        <div className="flex flex-col space-y-6 max-w-xl text-white ml-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            {Title1} <br />
            <span className="text-[#FFC107]">{Title2}</span>
          </h1>
        </div>

        <div className="relative flex items-center justify-center w-full lg:w-1/2 min-h-[380px]">

          <div className="w-full h-80 bg-orange-200/40 rounded-3xl border-2 border-dashed border-orange-100 flex items-center justify-center text-white font-bold text-sm shadow-inner">
            <img src={image}
            className="rounded-3xl"/>
          </div>
        </div>

      </div>
    </section>
  );
}