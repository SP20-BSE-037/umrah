"use client";
import Image from "next/image";

export default function UmrahBanner() {
  return (
    <>
      <div
        className="relative max-w-7xl mx-auto rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 overflow-hidden h-[390px]"
        style={{
          backgroundImage: "url('/Rectangle.svg')", // Replace with actual background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Text Content */}
        <div className="w-full md:w-2/3 space-y-4 relative z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            All Inclusive Umrah <br /> Package with{" "}
            <span className="text-black">Guided Tour.</span>
          </h2>
          <p className="text-black text-lg">
            All packages include flights, visa processing, <br /> accommodation
            near Haram, ground transport, <br /> and a guided tour. Meals are
            optional.
          </p>
          <div className="flex justify-center md:justify-center">
            <img src="/arrow.svg" alt="arrow" className="w-12 h-12" />
          </div>
          {/* Call to Action Button */}
          <div className="flex items-center gap-2 ml-0 md:ml-[400px]">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition">
              Get quote - it's free
            </button>
          </div>
        </div>

        {/* Right Image Content (Desktop) */}
        <div className="md:w-1/3 relative z-10 mt-12  ">
          <Image
            src="/Clock-Tower.svg" // Change to actual image path
            alt="Mecca Clock Tower"
            width={500}
            height={600}
            className="rounded-lg"
          />
        </div>

        {/* Mobile Screen View */}
        <div className="flex md:hidden bg-[#467e7e] rounded-xl p-6 flex-col items-center gap-4 overflow-hidden">
          {/* Left Text Content */}
          <div className="w-full text-center space-y-3">
            <h2 className="text-2xl font-bold text-white">
              All Inclusive Umrah Package with{" "}
              <span className="text-gray-200">Guided Tour.</span>
            </h2>
            <p className="text-gray-300 text-sm">
              All packages include flights, visa processing, accommodation near
              Haram, ground transport, and a guided tour. Meals are optional.
            </p>
            <div className="mt-12">
              <img src="/arrow.svg" alt="arrow" className="ml-[200px]" />
            </div>
            {/* Call to Action Button */}
            <div className="flex items-center justify-center gap-2">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition">
                Get quote - it’s free
              </button>
            </div>
          </div>
          {/* Right Image Content (Mobile) */}
          <div className="w-full relative mt-8">
            <Image
              src="/Clock-Tower.svg" // Change to actual image path
              alt="Mecca Clock Tower"
              width={200} // Smaller size for mobile
              height={200}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
