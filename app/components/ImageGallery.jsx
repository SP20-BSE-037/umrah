"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/kaba.jpg", // Main Image
  "/kaba.jpg", // Right Small 1
  "/kaba.jpg", // Right Small 2
  "/kaba.jpg", // Right Small 3
];

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto relative">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-teal-900 mb-8">
        Image <span className="text-yellow-600">Gallery</span>
      </h2>

      {/* Background Faded Images */}
      <div className="absolute inset-0 flex items-center justify-between opacity-20 -z-10 px-10">
        {images.map((img, index) => (
          <div key={index} className="w-1/4">
            <Image
              src={img}
              alt={`Background ${index}`}
              width={250}
              height={150}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Gallery Container */}
      <div className="flex items-center justify-center space-x-4 relative">
        {/* Left Side Number */}
        <div className="relative">
          <div className="w-12 h-12 bg-teal-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div className="h-1 w-20 bg-teal-800 mt-2"></div>
        </div>

        {/* Main Image */}
        <div className="relative">
          <Image
            src={images[activeIndex]}
            alt="Main Image"
            width={400}
            height={300}
            className="rounded-xl shadow-lg transition-all duration-500"
          />
          <span className="absolute top-2 right-2 bg-teal-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
            2
          </span>
        </div>

        {/* Right Smaller Images */}
        <div className="flex flex-col space-y-4">
          {images.slice(1).map((img, index) => (
            <div key={index} className="relative">
              <span className="absolute top-2 left-2 bg-teal-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                {index + 3}
              </span>
              <Image
                src={img}
                alt={`Side ${index}`}
                width={120}
                height={180}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center mt-6 space-x-6">
        <button
          onClick={prevImage}
          className="p-3 bg-gray-300 hover:bg-gray-400 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="p-3 bg-gray-300 hover:bg-gray-400 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
