import { HoverEffect } from "@/components/Ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor } from "react-icons/pi";
import { FaLaptopHouse, FaSearch  } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { CiMobile1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoIosCall } from "react-icons/io";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [

    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Custom Profile Website",
        description:
          "Custom Design Tailored to Your Brand.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaLaptopHouse className="w-8 h-8 text-blue-600" /></div>,
        title: "Integrated Property Listings",
        description:
          "Provide a convenient way to display your listings to your clients.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><CiMobile1 className="w-8 h-8 text-blue-600" /></div>,
        title: "Mobile responsive",
        description:
          "Your profile website will work seamlessly on phones, tablets, laptops and desktops",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><MdAnalytics className="w-8 h-8 text-blue-600" /></div>,
        title: "Track Performance",
        description:
          "Equiped with google analytics to allow you to track the performance of your promotions.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><IoIosCall className="w-8 h-8 text-blue-600" /></div>,
        title: "Call to action",
        description:
          "Strategically placed call to action to engage with potential clients.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><SlCalender className="w-8 h-8 text-blue-600" /></div>,
        title: "Calendar Integration",
        description:
          "Intergration with calendly to allow propects to book showings with you.",
      
      },

];

" and be in control of defining your personal brand."