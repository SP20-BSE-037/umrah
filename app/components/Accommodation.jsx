"use client";
import { useState } from "react";
import Image from "next/image";

export default function Accommodation() {
  const [location, setLocation] = useState("MAK");
  const [starRating, setStarRating] = useState("5 Star");

  const hotels = [
    { name: "Swissotel Makkah", image: "/makah.svg" },
    { name: "Pullman ZamZam", image: "/zamzam.svg" },
    { name: "Jabal Omar Hyatt", image: "/jabal.svg" },
    { name: "Anjum Makkah", image: "/anjum.svg" },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 w-full max-w-7xl mx-auto flex flex-col">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-900">
          Accomodation
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl bg-gray-100 px-4 py-2 rounded-lg inline-block mt-4">
          Stay Near the Haram
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 sm:mb-10 px-2">
        {/* Mobile View: Dropdowns */}
        <div className="flex sm:hidden flex-row justify-between gap-8">
          {/* Location Dropdown (Left) */}
          <div className="bg-white px-4 py-2 rounded-lg w-[2/2]">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-white text-gray-800 text-sm focus:outline-none"
            >
              <option value="MAK">MAK</option>
              <option value="MAD">MAD</option>
            </select>
          </div>

          {/* Star Rating Dropdown (Right) */}
          <div className="bg-white px-4 py-2 rounded-lg shadow-md w-[2/2]">
            <select
              value={starRating}
              onChange={(e) => setStarRating(e.target.value)}
              className="w-full bg-white text-gray-800 text-sm focus:outline-none"
            >
              <option value="5 Star">5 Star</option>
              <option value="4 Star">4 Star</option>
              <option value="3 Star">3 Star</option>
            </select>
          </div>
        </div>

        {/* Desktop View: Buttons */}
        <div className="hidden sm:flex bg-white px-4 py-2 gap-2 items-start">
          <button
            className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              location === "MAK" ? "bg-yellow-400" : "bg-gray-200"
            }`}
            onClick={() => setLocation("MAK")}
          >
            <span className="w-3 h-3 rounded-full border border-black bg-yellow-400"></span>{" "}
            MAK
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              location === "MAD" ? "bg-yellow-400" : "bg-gray-200"
            }`}
            onClick={() => setLocation("MAD")}
          >
            <span className="w-3 h-3 rounded-full border border-black bg-white"></span>{" "}
            MAD
          </button>
        </div>
        <div className="hidden sm:flex bg-white shadow-md rounded-full px-4 py-2 gap-2 items-center">
          {["5 Star", "4 Star", "3 Star"].map((star) => (
            <button
              key={star}
              className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                starRating === star ? "bg-yellow-400" : "bg-gray-200"
              }`}
              onClick={() => setStarRating(star)}
            >
              <span
                className={`w-3 h-3 rounded-full border border-black ${
                  starRating === star ? "bg-yellow-400" : "bg-white"
                }`}
              ></span>{" "}
              {star}
            </button>
          ))}
        </div>
      </div>

      {/* Hotel Cards - Desktop */}
      <div className="hidden sm:grid grid-cols-4 gap-6 justify-center items-center">
        {hotels.map((hotel, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full h-full sm:w-full sm:h-full rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center text-gray-800 font-medium">
              {hotel.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden mt-6 flex overflow-x-auto space-x-4 px-4 scrollbar-hide justify-center items-center">
        {hotels.map((hotel, index) => (
          <div key={index} className="flex flex-col items-center min-w-[55%]">
            <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={250}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center text-gray-800 font-medium">
              {hotel.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
