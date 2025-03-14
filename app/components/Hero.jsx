"use client";
import Image from "next/image";
import { FaPlane, FaHotel, FaCar, FaPassport } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="relative bg-[#EAF6F6] p-10 rounded-3xl flex items-center overflow-hidden w-7xl mx-auto rounded-b-[150px]">
        {/* Background Image with full bottom rounding */}
        <div className="absolute inset-0 bg-[url('/images/Rectangle.svg')] bg-cover bg-left m-24 "></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl font-bold text-black">
            All Inclusive Umrah Package with Guided Tour.
          </h2>
          <p className="mt-8 text-black">
            All packages include flights, visa processing, accommodation near
            Haram, ground transport, and a guided tour. Meals are optional.
          </p>
          <div className="mt-6 flex items-center gap-2 ml-[250px]">
            <span className="text-yellow-500 text-xl">➜</span>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600">
              Get quote - it's free
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-[-200px] bottom-0 w-1/2">
          <Image
            src="/Clock-Tower.svg"
            alt="Clock Tower"
            width={400}
            height={300}
            className="relative z-10"
          />

          <div className="absolute top-1/2 -left-10 bg-yellow-400 rounded-full w-20 h-20 -z-10"></div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">
          What's <span className="text-yellow-500">Included</span> in Your{" "}
          <span className="text-yellow-500">Package?</span>
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-md border bg-white text-teal-600 font-medium hover:bg-gray-100">
            <FaPlane className="text-xl" /> Flights for Umrah
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-md border bg-white text-teal-600 font-medium hover:bg-gray-100">
            <FaPassport className="text-xl" /> Visa Processing
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-md border bg-white text-teal-600 font-medium hover:bg-gray-100">
            <FaHotel className="text-xl" /> Accommodation
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-md border bg-white text-teal-600 font-medium hover:bg-gray-100">
            <FaCar className="text-xl" /> Private Transport
          </button>
        </div>

        {/* mobile creen k liye */}
        <div className="bg-teal-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden md:hidden block">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/Clock-Tower.svg" // Replace with the actual image path of Abraj Al Bait
              alt="Abraj Al Bait"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Title */}
            <h2 className="text-2xl font-bold text-white">
              All Inclusive Umrah <br /> Package with Guided Tour.
            </h2>

            {/* Description */}
            <p className="text-sm mt-2 text-white">
              All packages include flights, visa processing, accommodation near
              Haram, ground transport, and a guided tour. Meals are optional.
            </p>

            {/* Button with Arrow */}
            <div className="mt-6 flex items-center">
              <button className="bg-yellow-600 text-teal-900 px-4 py-2 rounded-full text-sm font-semibold">
                Get quote - it’s free
              </button>
              <Image
                src="/vector.svg" // Replace with the actual arrow image path
                alt="Arrow"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
          </div>
          <div className="relative bg-[#0F3B3F] text-white p-6 md:p-10 rounded-3xl max-w-7xl mx-auto overflow-hidden flex flex-col md:flex-row items-center">
            {/*  for Small Screens */}
            <div className="absolute inset-0 md:hidden">
              <Image
                src="/Clock-Tower.svg"
                alt="Clock Tower"
                layout="fill"
                objectFit="cover"
                className="opacity-30"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-lg text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold">
                All Inclusive Umrah Package with Guided Tour.
              </h2>
              <p className="mt-4 md:mt-6">
                All packages include flights, visa processing, accommodation
                near Haram, ground transport, and a guided tour. Meals are
                optional.
              </p>
              <div className="mt-12 flex justify-center md:justify-start">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600 flex items-center gap-2">
                  <span className="text-lg">➜</span> Get quote - it's free
                </button>
              </div>
            </div>

            {/* Right Image for Larger Screens */}
            <div className="hidden md:block relative w-1/2 max-w-sm lg:max-w-md">
              <Image
                src="/Clock-Tower.svg"
                alt="Clock Tower"
                width={400}
                height={300}
                className="relative z-10"
              />
              {/* Yellow Circle Background */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full w-32 h-32 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
