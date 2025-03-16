"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageGallery() {
  const images = [
    { src: "/kaba.jpg", alt: "Kaaba" },
    { src: "/kaba.jpg", alt: "Madinah" },
    { src: "/kaba.jpg", alt: "Mountains" },
    { src: "/kaba.jpg", alt: "Clock Tower" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-teal-900">
        Image <span className="text-yellow-600">Gallery</span>
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center mt-10 relative">
        {/* Blurred Background Images */}
        <div className="absolute inset-0 flex justify-between opacity-30">
          {images.map((img, index) => (
            <div key={index} className="w-1/5">
              <Image
                src={img.src}
                alt={img.alt}
                width={150}
                height={100}
                className="rounded-lg blur-sm"
              />
            </div>
          ))}
        </div>

        {/* Main Active Image */}
        <div className="relative z-10 w-[500px] h-[300px] bg-white p-3 rounded-lg shadow-lg border">
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Thumbnail Navigation (Right Side) */}
        <div className="flex flex-col space-y-2 ml-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all ${
                activeIndex === index ? "opacity-100 scale-105" : "opacity-70"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Number Badge */}
              <div className="absolute -left-2 -top-2 bg-teal-900 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                {index + 1}
              </div>

              {/* Thumbnail Image */}
              <Image
                src={img.src}
                alt={img.alt}
                width={60}
                height={100}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center mt-10 relative">
        {/* Blurred Background Images */}
        <div className="absolute inset-0 flex justify-between opacity-30">
          {images.map((img, index) => (
            <div key={index} className="w-1/4">
              <Image
                src={img.src}
                alt={img.alt}
                width={100}
                height={70}
                className="rounded-lg blur-sm"
              />
            </div>
          ))}
        </div>

        {/* Scrollable Images */}
        <div className="relative z-10 flex overflow-x-auto space-x-3 px-4 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, index) => (
            <div key={index} className="relative min-w-[80%] snap-center">
              {/* Number Badge */}
              <div className="absolute -top-2 left-2 bg-teal-900 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                {index + 1}
              </div>

              {/* Image */}
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
