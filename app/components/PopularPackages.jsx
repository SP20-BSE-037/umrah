"use client";
import { useState } from "react";

export default function PopularPackages() {
  const [selectedPackage, setSelectedPackage] = useState("Luxury");

  const handlePackageSelection = (packageType) => {
    setSelectedPackage(packageType);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen w-full max-w-7xl mx-auto mt-8 sm:mt-20">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 px-2 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-4 sm:mb-0">
          Popular package
        </h1>
        <button className="px-3 py-2 rounded-full flex items-center gap-2 text-gray-600 bg-white shadow-sm">
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
        <button
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base ${
            selectedPackage === "Luxury"
              ? "bg-yellow-600 text-white font-bold"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handlePackageSelection("Luxury")}
        >
          Luxury
        </button>
        <button
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base ${
            selectedPackage === "Premium"
              ? "bg-yellow-600 text-white font-bold"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handlePackageSelection("Premium")}
        >
          Premium
        </button>
        <button
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base ${
            selectedPackage === "Economic"
              ? "bg-yellow-600 text-white font-bold"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handlePackageSelection("Economic")}
        >
          Economic
        </button>
      </div>

      {/* Package cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-16 mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="w-full sm:flex-1 bg-white overflow-hidden flex flex-col sm:rounded-lg shadow-md"
          >
            {/* Mobile view: Image left, details right */}
            <div className="sm:hidden flex flex-col p-3">
              <div className="flex flex-row gap-4 mb-3">
                {/* Image with top-left overlay */}
                <div className="w-2/5 h-48 relative">
                  <img
                    src="/kaba.jpg"
                    alt="Kaaba at night with Abraj Al-Bait in background"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Top-left package info */}
                  <div className="absolute top-2 left-0 bg-yellow-600/90 text-white text-xs font-bold py-1 px-2 rounded-2xl">
                    7 Nights 4 Star
                  </div>
                </div>

                {/* Details section */}
                <div className="w-3/5 p-3 bg-[rgba(0,86,92,0.9)] flex flex-col justify-center rounded-lg">
                  <h2 className="text-white font-bold text-sm">
                    Umrah Package
                  </h2>
                  <p className="text-white flex items-center gap-1 mt-1 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Makkah: 4N, Madinah: 3N
                  </p>
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="bg-white/30 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <span className="h-2 w-2 bg-yellow-400 rounded-full mr-1"></span>
                      Ziarah & Meal Optional
                    </span>
                    <span className="bg-white/30 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <span className="h-2 w-2 bg-yellow-400 rounded-full mr-1"></span>
                      All-inclusive
                    </span>
                  </div>
                </div>
              </div>

              {/* Book now button below details on mobile */}
              <button
                className="bg-yellow-600 text-white py-2 text-base font-semibold hover:bg-yellow-700 transition-colors 
              w-[150px] rounded-lg mr-32"
              >
                Book Now
              </button>
            </div>

            {/* Desktop view: Image on top, details overlay */}
            <div className="hidden sm:block relative w-full">
              <img
                src="/kaba.jpg"
                alt="Kaaba at night with Abraj Al-Bait in background"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-t-lg"
              />
              {/* Package details overlay (blue div) */}
              <div className="absolute bottom-0 left-0 right-0 mx-auto bg-[rgba(0,86,92,0.6)] w-5/6 text-start px-3 py-3 rounded-3xl mb-4">
                <h2 className="text-white font-bold">
                  7 Nights 4 Star, Umrah Package
                </h2>
                <p className="text-white flex items-center gap-1 mt-1">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Makkah: 4N, Madinah: 3N
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-white/30 text-white text-xs px-3 py-1 rounded-full flex items-center">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mr-1"></span>
                    Ziarah & Meal Optional
                  </span>
                  <span className="bg-white/30 text-white text-xs px-3 py-1 rounded-full flex items-center">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mr-1"></span>
                    All-inclusive Package
                  </span>
                </div>
              </div>
            </div>

            {/* View price button for desktop */}
            <button className="hidden sm:block bg-yellow-600 text-white py-3 sm:py-4 text-base sm:text-xl font-semibold hover:bg-yellow-700 transition-colors w-full rounded-b-lg">
              View Price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
