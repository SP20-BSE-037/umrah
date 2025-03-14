"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const includes = [
  "Return Flight",
  "Accomodation",
  "Visa Processing",
  "Ground Transport",
  "Rawdah Permit",
  "Umrah Kit",
];

const exclusive = [
  "Meal",
  "Laundry",
  "GST & TCS",
  "Ziyarat’s Transport",
  "Additional Checked Baggage",
  "Room Service",
];

const faqs = [
  {
    question: "What is your refund policy in case of cancellation?",
    answer:
      "Yes, we provide flexible installment plans to make it easier for you to manage the cost of your trip. You can secure your package with an initial deposit, and the remaining balance can be paid in installments. Let us know what works best for you, and we’ll guide you through the process.",
  },
  {
    question:
      "Will you provide assistance if I face any issues during my trip?",
    answer:
      "Yes, we have a dedicated support team available 24/7 to assist you.",
  },
  {
    question:
      "Will I be traveling with a group, or is it an individual package?",
    answer:
      "We offer both group and individual packages as per your preference.",
  },
  {
    question: "Are there any discounts for families or groups?",
    answer:
      "Yes, we offer discounts for families and groups. Contact us for details.",
  },
];

export default function UmrahPackage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto ">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-teal-900 mb-8">
        Umrah <span className="text-yellow-600">Package</span>
      </h2>

      {/* Includes & Exclusive */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-12">
        <div>
          <h3 className="bg-yellow-600 text-white text-lg font-semibold py-2 px-4 rounded-md text-center">
            Includes
          </h3>
          {includes.map((item, index) => (
            <div
              key={index}
              className="border p-3 rounded-md mt-2 flex justify-between"
            >
              {item}
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          ))}
        </div>

        <div>
          <h3 className="bg-yellow-600 text-white text-lg font-semibold py-2 px-4 rounded-md text-center">
            Exclusive
          </h3>
          {exclusive.map((item, index) => (
            <div
              key={index}
              className="border p-3 rounded-md mt-2 flex justify-between"
            >
              {item}
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <h3 className="text-2xl font-bold text-teal-900 text-center mb-6">
        Frequently Asked Questions{" "}
        <span className="text-yellow-600">(FAQs)</span>
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-16 ">
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md mb-3">
              <button
                className="w-full p-3 text-left flex justify-between items-center gap-y-20"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-3 bg-gray-100 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-teal-900 text-white p-6 rounded-md text-center flex flex-col items-center ">
          <div className="w-12 h-12 bg-white text-teal-900 rounded-full flex items-center justify-center mb-3">
            📞
          </div>
          <p className="mb-4">
            Our team will answer all your questions. We ensure a quick response.
          </p>
          <button className="bg-yellow-600 text-white py-2 px-6 rounded-xl text-lg font-semibold">
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
}
