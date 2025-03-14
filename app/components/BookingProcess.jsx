"use client";
import Image from "next/image";

export default function BookingProcess() {
  return (
    <div className="bg-white py-16 px-6 w-7xl mx-auto">
      {/* Booking Process Section */}
      <h2 className="text-center text-3xl font-bold text-teal-900">
        Our <span className="text-yellow-600">Booking</span> Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10 relative">
        {[
          {
            num: 1,
            title: "Inquiry & Consultation",
            desc: "Discuss your Umrah needs & get a personalized quote.",
          },
          {
            num: 2,
            title: "Select Your Package",
            desc: "Choose from, 3-Star, 4-Star, or 5-Star packages.",
          },
          {
            num: 3,
            title: "Pay the Initial Deposit",
            desc: "Secure your booking with just £99 per person.",
          },
          {
            num: 4,
            title: "Visa & Ticket Processing",
            desc: "We handle your Saudi visa, flights & hotel reservations.",
          },
          {
            num: 5,
            title: "Receive Confirmation",
            desc: "Get your tickets, visa & travel itinerary ready.",
          },
          {
            num: 6,
            title: "Embark on Your Umrah Journey",
            desc: "Travel stress-free & experience a smooth pilgrimage.",
          },
        ].map((step, index, array) => (
          <div key={step.num} className="flex flex-col items-center relative">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-900 text-white text-lg font-bold">
              {step.num}
            </div>
            <h3 className="mt-4 font-bold text-teal-900">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.desc}</p>

            {/* Add arrow except after step 3 & step 6 */}
            {index !== 2 && index !== 5 && (
              <Image
                src="/vector.svg"
                alt="Arrow"
                width={50}
                height={20}
                className="absolute right-[-20px] top-8 hidden md:block"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
