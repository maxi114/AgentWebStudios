"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/navbar";

const Book = () => {
  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-black/[0.96]  bg-grid-white/[0.02]   ">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToServices={() => {}}
        />
        <div className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Lets do this!
        </div>

        <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
            Take the first step towards a beautiful new profile website by booking your consultation below.
        </p>

        <br />
        <InlineWidget url="https://calendly.com/maxkodi081/free-consultation" />
      </div>
    </>
  );
};

export default Book;