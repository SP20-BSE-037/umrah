"use client";
import Image from "next/image";

export default function RealStories() {
  return (
    <div className="py-16 px-6 w-7xl mx-auto">
      {/* Testimonials Slider */}
      <div className="overflow-hidden w-full flex space-x-5 px-4 shadow-2xl">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="min-w-[400px] bg-white p-4 rounded-lg shadow-2xl"
          >
            <Image src="/star.svg" alt="Review" width={100} height={50} />
            <p className="text-lg text-gray-700 mt-2">
              <strong>Imran Sohail</strong>
              <br />
              Excellent service. Spoke to Momina about my transaction with held.
              She helped me and my transaction was successful within no time.
              Highly recommended. Great staff. Very politeand skill full."
            </p>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-gray-400"></div>
        ))}
      </div>

      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold text-teal-900 mt-8">
        Watch <span className="text-yellow-600">Real</span> Stories
      </h2>

      {/* Video Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto h-[700px]">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-300  rounded-lg flex items-center justify-center  h-[500px]"
          >
            <span className="text-gray-500">Video {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
