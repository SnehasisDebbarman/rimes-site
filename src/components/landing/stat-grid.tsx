"use client";
import React from "react";
import { motion } from "framer-motion";
import SmoothFadingCircle from "./moving-ball";
import Image from "next/image";
import People from "@/assets/Images/grid/people.png";

interface StatCardProps {
  value: string;
  description: string;
  className?: string;
  background?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  valueColor?: string;
  descriptionColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  description,
  className,
  background,
  valueColor = "text-white",
  descriptionColor = "text-white",
}) => (
  <motion.div
    className={`p-4 h-full flex flex-col-reverse bg-cover bg-center relative ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {typeof background === "string" ? (
      <Image
        src={background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    ) : background ? (
      React.createElement(background, { className: "absolute inset-0" })
    ) : null}
    <div className={`relative z-10`}>
      <h3 className={`text-4xl font-bold ${valueColor}`}>{value}</h3>
      <p className={`text-sm mt-2 ${descriptionColor}`}>{description}</p>
    </div>
  </motion.div>
);

const StatsDashboard: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl max-w-screen-lg justify-center ">
      <h2 className="text-3xl font-bold text-emerald-900 mb-4 text-center">
        H2 Stats
      </h2>
      <p className="text-emerald-700 mb-6 text-center max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolo aliquyam erat, sed diam
        voluptua.
      </p>

      <div className="grid grid-cols-12 grid-rows-12 h-56">
        <StatCard
          value="100M+"
          description="Lorem ipsum dolor sit amet."
          className="col-span-4 row-span-12 bg-[#143A33] rounded-l"
        />
        <div className="col-span-3 row-span-12 bg-emerald-200 overflow-hidden">
          <SmoothFadingCircle />
        </div>
        <StatCard
          value="700K+"
          description="Lorem ipsum dolor sit amet."
          className="col-span-3   row-span-12 bg-[#85C7AD] rounded-r"
          valueColor="text-emerald-900"
          descriptionColor="text-emerald-900"
        />
      </div>

      <div className="grid grid-cols-12 grid-rows-2 h-56">
        <div className="col-span-1 row-span-2"></div>
        <StatCard
          value="1,200+"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing."
          className="col-span-3 row-span-2 rounded-l"
          background={People.src}
          valueColor="text-emerald-900"
          descriptionColor="text-emerald-900"
        />
        <StatCard
          value="#1"
          description="Lorem ipsum dolor sit amet consetetur."
          className="col-span-3 row-span-2 bg-[#77BE7F]"
          valueColor="text-emerald-900"
          descriptionColor="text-emerald-900"
        />
        <StatCard
          value="98%"
          description="Lorem ipsum dolor sit amet."
          className="col-span-5 row-span-2 bg-emerald-800 rounded-r"
        />
      </div>
    </div>
  );
};

export default StatsDashboard;
