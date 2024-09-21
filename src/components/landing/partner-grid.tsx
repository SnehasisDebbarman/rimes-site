"use client";
import { Undo2 } from "lucide-react";
import React, { useState } from "react";
import dell from "@/assets/svgs/partner/dell.svg";
import zoom from "@/assets/svgs/partner/zoom.svg";
import asana from "@/assets/svgs/partner/asana.svg";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: "Dell",
    logo: dell,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
  },
  {
    name: "Zoom",
    logo: zoom,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
  },
  {
    name: "Asana",
    logo: asana,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
  },
  {
    name: "Partner 4",
    logo: dell,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
  },
];

const PartnerBox: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-48 w-full perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-[#85C7AD66] p-6 rounded-lg flex justify-center items-center">
          <div className="text-4xl font-bold text-gray-800 ">
            <Image src={partner.logo} alt={partner.name} />
          </div>
          <button className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#277365] text-white rounded-full flex items-center justify-center">
            <Undo2 className="w-3 h-3" />
          </button>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-[#85C7AD] p-6 rounded-lg flex flex-col justify-between rotate-y-180">
          <p className="text-sm text-gray-700">{partner.description}</p>
          <a
            href="#"
            className="text-[#143A33] hover:underline mt-2 inline-block"
          >
            Read More &gt;
          </a>
          <button className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#277365] text-white rounded-full flex items-center justify-center">
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

const H2ExplorePartners: React.FC = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        H2 Explore Partners
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut lare et dolore
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {partners.map((partner) => (
          <PartnerBox key={partner.name} partner={partner} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {partners.map((partner) => (
          <PartnerBox key={partner.name} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default H2ExplorePartners;
