"use client";
import { useState } from "react";

export default function PopularPackages() {
  const [selectedPackage, setSelectedPackage] = useState("Luxury");

  const handlePackageSelection = (packageType) => {
    setSelectedPackage(packageType);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50  w-full max-w-7xl mx-auto mt-8 sm:mt-20">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 px-2 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-4 sm:mb-0">
          Popular Packages
        </h1>
        <button className="px-3 py-2 rounded-full flex items-center gap-2 text-gray-600 bg-white shadow-lg">
          Preferred Month
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Package type selection */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-10 px-2 sm:px-6">
        {["Luxury", "Premium", "Economic"].map((type) => (
          <button
            key={type}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base ${
              selectedPackage === type
                ? "bg-yellow-600 text-white font-bold"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => handlePackageSelection(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Package cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white shadow-md rounded-t-2xl overflow-hidden"
          >
            {/* Desktop view */}
            <div className="hidden sm:block relative">
              <img
                src="/kaba.jpg"
                alt="Kaaba"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 mx-auto bg-[rgba(0,86,92,0.6)] w-5/6 text-start px-3 py-3 rounded-3xl mb-4">
                <h2 className="text-white font-bold">
                  7 Nights 4 Star, Umrah Package
                </h2>
                <p className="text-white text-sm">Makkah: 4N, Madinah: 3N</p>
                <div className="flex gap-2 mt-1">
                  <span className="bg-white/30 text-white text-xs px-3 py-1 rounded-full">
                    Ziarah & Meal Optional
                  </span>
                  <span className="bg-white/30 text-white text-xs px-3 py-1 rounded-full">
                    All-inclusive Package
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden flex flex-row items-center p-3 gap-4">
              <div className="w-1/3 relative ">
                <img
                  src="/kaba.jpg"
                  alt="Kaaba"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-white text-black text-xs py-1 px-2 rounded-full">
                  7 Nights
                </div>
              </div>
              <div className="w-2/3 flex flex-col">
                <h2 className="text-gray-900 font-bold text-sm">
                  5 Star Umrah Package
                </h2>
                <p className="text-gray-700 text-xs">
                  <span className="text-yellow-500">Makkah:</span> Hilton Makkah
                  (3N), <span className="text-yellow-500">Madinah:</span>
                  Madinah: Pullman Zam Zam (4N)
                </p>
                <p className="text-gray-600 text-xs">
                  <span className="text-yellow-500">Includes:</span> Flight |
                  Visa | Transport | Accommodation
                </p>
                <button className="bg-yellow-600 text-white text-sm py-1 mt-2 rounded-lg w-32">
                  Book Now
                </button>
              </div>
            </div>

            {/* Desktop button */}
            <button className="hidden sm:block bg-yellow-600 text-white py-3 text-lg font-semibold hover:bg-yellow-700 transition-colors w-full rounded-b-lg">
              View Price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
