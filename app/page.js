import Image from "next/image";
import Hero from "./components/Hero";
import PopularPackages from "./components/PopularPackages";
import BookingProcess from "./components/BookingProcess";
import TravelNumbers from "./components/TravelNumbers";
import RealStories from "./components/RealStories";
// import ImageGallery from "./components/ImageGallery";
import UmrahPackage from "./components/UmrahPackage";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Package from "./components/Package";
import Accommodation from "./components/Accommodation";
import ZiyaratComponent from "./components/ZiyaratComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Package />
      <PopularPackages />
      <Accommodation />
      <ZiyaratComponent />
      <BookingProcess />
      <TravelNumbers />
      <RealStories />
      {/* <ImageGallery /> */}
      <UmrahPackage />
      <Footer />
    </>
  );
}
