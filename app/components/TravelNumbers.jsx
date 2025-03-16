"use client";
import Image from "next/image";

export default function TravelNumbers() {
  const stats = [
    {
      title: "Rate 4.8 on Trustpilot",
      desc: "Based on hundreds of customer reviews.",
      img: "/verified.svg",
    },
    {
      title: "5000+ Pilgrims Served",
      desc: "Helping Muslims fulfill their Hajj & Umrah journey.",
      img: "/kabasmall.svg",
    },
    {
      title: "10K+ YouTube Viewers Monthly",
      desc: "Guiding travelers with expert content.",
      img: "/youtube.svg",
    },
    {
      title: "70+ Exclusive Hotel Partnerships",
      desc: "From budget to 5-star stays near Haram.",
      img: "/hotel.svg",
    },
  ];

  return (
    <div
      className="bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: "url('/bg2.svg')" }}
    >
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-white">
        Al Habib Travel <span className="text-yellow-600">in Numbers</span>
      </h2>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            <Image
              src={item.img}
              alt="icon"
              width={30}
              height={30}
              className="mt-4"
            />
          </div>
        ))}
      </div>

      {/* Mobile View - Zig-Zag Layout */}
      <div className="md:hidden flex flex-col items-center mt-10 space-y-10 relative">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-72 ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
          >
            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            <Image
              src={item.img}
              alt="icon"
              width={40}
              height={40}
              className="mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
