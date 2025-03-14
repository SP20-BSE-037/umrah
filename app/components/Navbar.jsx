"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side: Hamburger (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-teal-900 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Right Side: Logos and Text (Mobile and Desktop) */}
          <div className="flex flex-col items-end">
            {/* Logos */}
            <div className="flex items-center space-x-1">
              <Image
                className=""
                src="/logo.gif" // Second logo
                alt="Umrah Logo"
                width={70}
                height={50}
              />
            </div>
            {/* Text Below Logos */}
            <span className="text-sm font-medium text-black mt-1">
              Al Habib Travel
            </span>
          </div>

          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300">
              Home
            </button>
            <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300">
              Packages
            </button>
            <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300">
              About
            </button>
            <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300">
              Contact
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition duration-300">
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile Menu (Toggles on Hamburger Click) */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } mt-3 flex flex-col space-y-4 pb-4 mr-8`}
        >
          <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300 text-left">
            Home
          </button>
          <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300 text-left">
            Packages
          </button>
          <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300 text-left">
            About
          </button>
          <button className="text-teal-900 font-medium hover:text-yellow-500 transition duration-300 text-left">
            Contact
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition duration-300 w-fit">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};
