"use client";
import Image from "next/image";
import { FaPlane, FaHotel, FaCar, FaPassport } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="relative bg-[#EAF6F6] p-10 rounded-3xl flex items-center overflow-hidden w-7xl mx-auto rounded-b-[150px] mt-24">
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
        <div className="grid grid-cols-2 gap-6 mt-8">
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
      </div>
    </>
  );
}
