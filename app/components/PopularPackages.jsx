"use client";
import { useState } from "react";

export default function PopularPackages() {
  const [selectedPackage, setSelectedPackage] = useState("Luxury");

  const handlePackageSelection = (packageType) => {
    setSelectedPackage(packageType);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-7xl mx-auto mt-20 ">
      {/* Header section */}
      <div className="flex justify-between items-center mb-8 px-6">
        <h1 className="text-3xl font-bold text-teal-900 ">Popular package</h1>
        <button className="px-4 py-2   rounded-full flex items-center gap-2 text-gray-600">
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
      <div className="flex gap-4 mb-10 px-6 ">
        <button
          className={`px-6 py-3 rounded-full min-w-32 ${
            selectedPackage === "Luxury"
              ? "bg-yellow-600 text-white font-bold"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handlePackageSelection("Luxury")}
        >
          Luxury
        </button>
        <button
          className={`px-6 py-3 rounded-full min-w-32 ${
            selectedPackage === "Premium"
              ? "bg-yellow-600 text-white font-bold"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handlePackageSelection("Premium")}
        >
          Premium
        </button>
        <button
          className={`px-6 py-3 rounded-full min-w-32 ${
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
      <div className="flex flex-wrap gap-16  mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex-1 bg-white overflow-hidden flex flex-col  rounded-lg"
          >
            {/* Package image */}
            <div className="relative w-full">
              <img
                src="/kaba.jpg" // Replace with your actual image path (e.g., "/images/kaaba.jpg")
                alt="Kaaba at night with Abraj Al-Bait in background"
                className="w-full h-[500px] object-cover rounded-t-4xl"
              />
              {/* Package details overlay (blue div) */}
              <div className="absolute bottom-[-1] left-0 right-0 mx-auto bg-[rgba(0,86,92,0.6)] w-5/6 h-28 text-start px-2 rounded-3xl p-3 mb-4 mr-6">
                {" "}
                {/* Reduced width to w-5/6 and centered with mx-auto */}
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
                <div className="flex  gap-2">
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

            {/* View price button (yellow div) */}
            <button className="bg-yellow-600 text-white py-4 text-xl font-semibold hover:bg-yellow-700 transition-colors mt-1 w-92 mx-auto rounded-b-xl ">
              View Price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
