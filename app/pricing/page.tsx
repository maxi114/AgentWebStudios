"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const plans = [
  {
    index: 0,
    name: "Discovery Package",
    price: "Free",
    features: [
      "Landing page",

      "1-3 days turn around time",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Perfect single page website for a single agent.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Starter Package",
    price: "Agent & Teams",
    features: [
      "Landing page",
      "Fully responsive on all screens",
      "Inegration with 3rd party tools (CRM)"
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Integrate your CRM and capture leads effectively",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Professional package",
    price: "IDX solution",
    features: [
      "Design + Development",
      "Fully responsive on all screens",
      "Contact and lead capture forms",
      "IDX search capability",
      "Neighborhood guides"

    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div className="w-full h-screen md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden">

      <Navbar
        scrollToWebsiteDesign={() => { }}
        scrollToServices={() => { }}
      />

      <div className="flex items-center justify-center flex-col   ">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Real Estate Websites <br /> For Agents and Teams
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6  "
            >
              <div className={plan.style}>
                <div className="text-4xl flex  items-center font-medium">
                  {plan.name}

                </div>
                <div className="text-3xl pt-6 ">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg  py-2 flex space-x-2 items-center"
                    >
                      {/* render checkmark only for enterprise tab*/}
                      <PiCheckCircleFill className="text-green-600 mr-2 text-xl " />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={plan.button}>
                {index === 0 && (
                   <Link
                   href="/book"
                   className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                 >
                   Book Consultation
                 </Link>
                )}
                {index === 1 && (
                  <Link
                    href="/book"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Book Consultation
                  </Link>
                )}
                {index === 2 && (

                  <Link
                    href="/book"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Book Consultation
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
};

export default Pricing;