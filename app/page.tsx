'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/Ui/Spotlight"; 
import Image from "next/image";
import Link from "next/link";
import SliderOne from "@/components/Ui/slider";
import WebsiteDesign from "./website-design";
import Brands from "./brand";
import Services from "./services";
import FAQS from "./faq";

export default function Home() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };


  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
  <div className="max-w-5xl mx-auto">
    <Navbar
      scrollToWebsiteDesign={scrollToWebsiteDesign}
      scrollToServices={scrollToServices}
    />

    <Spotlight className="hidden md:flex md:-top-80 left-80   " fill="white" />
    <div className="p-4 pt-10 md:pt-20 px-2">
      <h1 className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
         Personalized Websites for<br /> Real Estate Agents
      </h1>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        A profile website all about you, your expertise and results.
      </p>

      <Link
        href={"/book"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
      >
        Book a call
      </Link>

      <div className="pt-20">
        <SliderOne />
      </div>
      <div ref={websiteDesignRef} id="webdesign"> 
        <WebsiteDesign />
      </div>
      <div ref={servicesRef} id ='services'>
        <Services />
      </div>
      <FAQS />
    </div>
  </div>
</div>

  );
}
