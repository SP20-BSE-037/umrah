"use client";
import { useState } from "react";
import Image from "next/image";

export default function Ziyarat() {
  const [selectedCity, setSelectedCity] = useState("Makkah");

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 mt-12">
        <div className="text-center mt-10">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00565C]">
            Accomodation
          </h2>

          {/* Subheading with rounded button style */}
          <div className="inline-block mt-2 px-4 sm:px-6 py-2 bg-gray-100 text-[#00565C] text-lg sm:text-xl md:text-2xl rounded-full shadow-md w-64 sm:w-72">
            Stay Near the Haram
          </div>
        </div>

        {/* Hotel Selection */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 mt-6 space-y-4 sm:space-y-0">
          {/* City Toggle */}
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="city"
                checked={selectedCity === "Makkah"}
                onChange={() => setSelectedCity("Makkah")}
              />
              <span className="text-yellow-500 font-semibold">MAK</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="city"
                checked={selectedCity === "Madinah"}
                onChange={() => setSelectedCity("Madinah")}
              />
              <span className="text-gray-500">MAD</span>
            </label>
          </div>

          {/* Star Rating Filter */}
          <div className="flex gap-2 items-center flex-wrap justify-center">
            <span className="text-yellow-500">● 5 Star</span>
            <span className="text-gray-400">● 4 Star</span>
            <span className="text-gray-400">● 3 Star</span>
          </div>
        </div>

        {/* Hotel Options */}
        <div className="flex overflow-x-auto gap-6 mb-24 pb-4 snap-x snap-mandatory">
          {[
            { name: "Swissotel Makkah", image: "/image3.svg" },
            { name: "Pullman ZamZam", image: "/image3.svg" },
            { name: "Jabal Omar Hyatt", image: "/image3.svg" },
            { name: "Anjum Makkah", image: "/image3.svg" },
          ].map((hotel, index) => (
            <div
              key={index}
              className="text-center w-[280px] flex-shrink-0 rounded-3xl shadow-md overflow-hidden snap-center"
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={280}
                height={280}
                className="w-full h-auto rounded-t-3xl"
              />
              <p className="mt-2 text-sm sm:text-base font-medium py-2 bg-white">
                {hotel.name}
              </p>
            </div>
          ))}
        </div>

        {/* Ziyarat Section */}
        <div className="border-t pt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
            What Ziyarat’s <span className="text-yellow-500">We provide?</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
            {/* Ziyarat List */}
            <div className="w-full md:w-1/2">
              <div className="flex gap-4 mb-4 justify-center md:justify-start">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="ziyarat"
                    checked={selectedCity === "Makkah"}
                    onChange={() => setSelectedCity("Makkah")}
                  />
                  <span className="text-yellow-500 font-semibold">Makkah</span>
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="ziyarat"
                    checked={selectedCity === "Madinah"}
                    onChange={() => setSelectedCity("Madinah")}
                  />
                  <span className="text-gray-500">Madinah</span>
                </label>
              </div>
              <ul className="text-gray-700 grid grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg md:text-xl">
                <li>1. Jabal al-Thawr</li>
                <li>2. Jabal-e-Rehmat</li>
                <li>3. Mina and Muzdalifah</li>
                <li>4. Janat al-Moula</li>
                <li>5. Masjid Shajra</li>
                <li>6. Maidan-e-Arafat</li>
                <li>7. Canal of Zubeidah</li>
                <li>8. Cave of Hira</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/stone.svg"
                alt="Jabal al-Thawr"
                width={500}
                height={300}
                className="rounded-lg w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* Call Now Button */}
          <div className="text-center mt-6">
            <button className="bg-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg">
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-teal-900 text-white text-xl sm:text-2xl md:text-4xl p-4 sm:p-6 text-center mt-12 rounded-lg w-full bg-[url('/images/bg.svg')] bg-cover">
        <p>
          We are proud to be an authorized <br /> partner of the
          <span className="text-green-300 font-semibold"> Saudi Visa </span>
          for Processing.
        </p>
      </div>
    </>
  );
}
