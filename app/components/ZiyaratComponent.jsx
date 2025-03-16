"use client";
import { useState } from "react";
import Image from "next/image";

export default function Ziyarat() {
  const [location, setLocation] = useState("Makkah");

  const ziyaratList = {
    Makkah: [
      "Jabal al-Thawr",
      "Jabal-e-Rehmat",
      "Mina and Muzdalifah",
      "Janat al-Moula",
      "Masjid Shajra",
      "Maidan-e-Arafat",
      "Canal of Zubeidah",
      "Cave of Hira",
    ],
    Madinah: [
      "Masjid Quba",
      "Masjid Qiblatain",
      "Uhud Mountain",
      "Baqi Cemetery",
      "Masjid Nabawi",
      "Seven Mosques",
      "Masjid Jummah",
      "Masjid Ghamama",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-20 shadow-lg">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-teal-900 mb-4">
        What Ziyarat’s <span className="text-yellow-500">We provide?</span>
      </h2>

      {/* Location Switch */}
      <div className="flex justify-items-start items-center gap-4 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="location"
            value="Makkah"
            checked={location === "Makkah"}
            onChange={() => setLocation("Makkah")}
            className="hidden"
          />
          <span
            className={`w-3 h-3 border border-black rounded-full ${
              location === "Makkah" ? "bg-yellow-400" : "bg-white"
            }`}
          ></span>
          Makkah
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="location"
            value="Madinah"
            checked={location === "Madinah"}
            onChange={() => setLocation("Madinah")}
            className="hidden"
          />
          <span
            className={`w-3 h-3 border border-black rounded-full ${
              location === "Madinah" ? "bg-yellow-400" : "bg-white"
            }`}
          ></span>
          Madinah
        </label>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex justify-between items-start gap-12">
        <div className="grid grid-cols-2 gap-12 text-teal-900 font-medium text-lg mt-4">
          {ziyaratList[location].map((place, index) => (
            <p key={index}>
              {index + 1}. {place}
            </p>
          ))}
        </div>
        <div className="w-[500px] h-[300px] relative shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/stone.svg"
            alt="Jabal al-Thawr"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded-md">
            Jabal al-Thawr
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-2 text-teal-900 font-medium text-lg">
          {ziyaratList[location].map((place, index) => (
            <p key={index}>
              {index + 1}. {place}
            </p>
          ))}
        </div>
        {/* Image for Mobile View */}
        <div className="w-full h-48 relative shadow-lg rounded-lg overflow-hidden mt-4">
          <Image
            src="/stone.svg"
            alt="Jabal al-Thawr"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded-md">
            Jabal al-Thawr
          </p>
        </div>
      </div>
    </div>
  );
}
