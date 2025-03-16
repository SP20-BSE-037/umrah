"use client";
import { useState } from "react";
import { FaPlane, FaHotel, FaCar, FaPassport } from "react-icons/fa";

const PackageInclusions = () => {
  const items = [
    {
      icon: <FaPlane />,
      title: "Flights for Umrah",
      content: "Includes round-trip airfare for Umrah.",
    },
    {
      icon: <FaPassport />,
      title: "Visa Processing",
      content: "Complete visa processing assistance.",
    },
    {
      icon: <FaHotel />,
      title: "Accommodation",
      content: "Comfortable hotel stays during Umrah.",
    },
    {
      icon: <FaCar />,
      title: "Private Transport",
      content: "Dedicated transport for your journey.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  return (
    <div className="text-center p-6 mt-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-gray-800">
        What’s <span className="text-yellow-500">Included</span> in Your{" "}
        <span className="text-yellow-600">Package?</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow-md cursor-pointer flex flex-col items-center w-full"
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl text-teal-600">{item.icon}</span>
              <span className="text-gray-700 font-medium">{item.title}</span>
            </div>
            {expanded === index && (
              <p className="mt-2 text-gray-600 text-sm text-center">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageInclusions;
