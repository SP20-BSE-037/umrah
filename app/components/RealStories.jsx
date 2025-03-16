"use client";
import { useState } from "react";
import Image from "next/image";

export default function RealStories() {
  const testimonials = [
    {
      name: "Imran Sohail",
      date: "Jul 12, 2024",
      review:
        "Excellent service. Spoke to Momina about my transaction with held. She helped me and my transaction was successful within no time. Highly recommended. Great staff. Very polite and skill full.",
    },
    {
      name: "Ayesha Khan",
      date: "Aug 05, 2024",
      review:
        "A wonderful experience! The team guided me throughout the Umrah journey. Highly professional and caring staff. Thank you for your support!",
    },
    {
      name: "Mohammad Rafi",
      date: "Sep 10, 2024",
      review:
        "Fantastic service! They made my Umrah trip smooth and stress-free. I highly recommend their services to everyone.",
    },
    {
      name: "Zainab Fatima",
      date: "Oct 02, 2024",
      review:
        "Very satisfied with their service. The booking process was easy, and the support team was always available to help. A five-star experience!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-teal-900">
        Our Happy <span className="text-yellow-600">Pilgrims</span>
      </h2>

      {/* Desktop View */}
      <div className="hidden sm:flex overflow-hidden w-full space-x-5 px-4 mt-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[400px] bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <Image src="/verified.svg" alt="Rating" width={100} height={20} />
              <span className="text-gray-500 text-sm">{item.date}</span>
            </div>
            <p className="font-semibold mt-3">{item.review.slice(0, 40)}...</p>
            <p className="text-gray-700 text-sm mt-2">{item.review}</p>
            <h3 className="font-bold text-gray-900 mt-4">{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Mobile View - Centered Active Card */}
      <div className="sm:hidden flex flex-col items-center mt-10">
        <div className="relative w-80">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <Image
                src="/trustpilot-stars.svg"
                alt="Rating"
                width={100}
                height={20}
              />
              <span className="text-gray-500 text-sm">
                {testimonials[activeIndex].date}
              </span>
            </div>
            <p className="font-semibold mt-3">
              {testimonials[activeIndex].review.slice(0, 40)}...
            </p>
            <p className="text-gray-700 text-sm mt-2">
              {testimonials[activeIndex].review}
            </p>
            <h3 className="font-bold text-gray-900 mt-4">
              {testimonials[activeIndex].name}
            </h3>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
          >
            ▶
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-6 rounded-full ${
                activeIndex === index ? "bg-teal-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
