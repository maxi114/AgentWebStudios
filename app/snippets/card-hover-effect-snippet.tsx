import { HoverEffect } from "@/components/Ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor } from "react-icons/pi";
import { FaLaptopHouse, FaSearch  } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

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
        title: "Real Estate Website",
        description:
          "Your website is your opportunity to stand out from the crowd and set yourself apart.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaLaptopHouse className="w-8 h-8 text-blue-600" /></div>,
        title: "IDX-Listings",
        description:
          "Provide a convenient way to display your listings to your clients.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaGears className="w-8 h-8 text-blue-600" /></div>,
        title: "3rd Party Integrations",
        description:
          "Integrate your website with your CRM and capture leads effectively.",
      
      },

];

" and be in control of defining your personal brand."