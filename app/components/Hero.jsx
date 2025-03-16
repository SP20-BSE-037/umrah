"use client";
import Image from "next/image";

export default function UmrahBanner() {
  return (
    <>
      {/* Desktop View - Hidden on Mobile */}
      <div
        className="relative max-w-7xl mx-auto rounded-b-[100px] p-8 flex flex-col md:flex-row items-center gap-6 overflow-hidden shadow-lg hidden md:flex"
        style={{
          backgroundImage: "url('/Rectangle.svg')",
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

        {/* Right Image Content (Desktop) - Using absolute positioning */}
        <div className="md:w-1/3 relative z-10 md:absolute ml-[820px]">
          <Image
            src="/Clock-Tower.svg"
            alt="Mecca Clock Tower"
            width={500}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Mobile View - Shown only on Mobile */}
      <div className="md:hidden relative w-full bg-teal-900 rounded-b-[60px] overflow-hidden h-[550px] shaow-lg">
        {/* Content Container */}
        <div className="relative z-10 px-6 py-12 flex flex-col justify-between min-h-[300px] w-[300px]">
          {/* Top Section with Header */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-white leading-tight">
              All Inclusive Umrah Package with Guided Tour.
            </h1>

            <p className="mt-4 text-white text-base">
              All packages include flights, visa processing, accommodation near
              Haram, ground transport, and a guided tour. Meals are optional.
            </p>
          </div>

          {/* Bottom Section with CTA */}
          <div className="mb-2 relative mt-20">
            {/* Arrow pointing to button */}
            <div className="absolute -top-16 right-28">
              <img src="/leftarrow.svg" alt="arrow" className="w-12 h-12" />
            </div>

            {/* CTA Button */}
            <button className="bg-yellow-500  hover:bg-yellow-600 text-black font-medium py-1 px-2 rounded-full text-base transition duration-300 mb-16">
              Get quote - it's free
            </button>
          </div>
        </div>

        {/* Image of Kaaba Clock Tower */}
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] ">
          <div className="absolute bottom-0 right-0 w-full h-full">
            {/* Yellow Circle Background */}
            <div className="absolute bottom-2 right-0 w-32 h-32 rounded-full bg-yellow-500 opacity-50"></div>

            {/* Building Image */}
            <div className="absolute bottom-0 right-0 w-full h-full">
              <Image
                src="/Clock-Tower.svg"
                alt="Mecca Clock Tower"
                width={300}
                height={450}
                className="object-contain object-bottom-right"
                style={{
                  position: "absolute",
                  right: "0",
                  bottom: "0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
