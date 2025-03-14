import Image from "next/image";
import Hero from "./components/Hero";
import PopularPackages from "./components/PopularPackages";
import Ziyarat from "./components/Ziyarat";
import BookingProcess from "./components/BookingProcess";
import TravelNumbers from "./components/TravelNumbers";
import RealStories from "./components/RealStories";
import ImageGallery from "./components/ImageGallery";
import UmrahPackage from "./components/UmrahPackage";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularPackages />
      <Ziyarat />
      <BookingProcess />
      <TravelNumbers />
      <RealStories />
      <ImageGallery />
      <UmrahPackage />
      <Footer />
    </>
  );
}
