"use client";
import Image from "next/image";

export default function TravelNumbers() {
  return (
    <div
      className="bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: "url('/bg2.svg')" }}
    >
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-white">
        Al Habib Travel <span className="text-yellow-600">in Numbers</span>
      </h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto justify-end px-6">
        {[
          {
            title: "Rate 4.8 on Trustpilot",
            desc: "Based on hundreds of customer reviews.",
            img: "/1.svg",
          },
          {
            title: "5000+ Pilgrims Served",
            desc: "Helping Muslims fulfill their Hajj & Umrah journey.",
            img: "/2.svg",
          },
          {
            title: "10K+ YouTube Viewers Monthly",
            desc: "Guiding travelers with expert content.",
            img: "/youtube.svg",
          },
          {
            title: "70+ Exclusive Hotel Partnerships",
            desc: "From budget to 5-star stays near Haram",
            img: "/hotel.svg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
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
