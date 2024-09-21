"use client";
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import People from "@/assets/Images/grid/people.png";
import SmoothFadingCircle from "./moving-ball";

const animationVariants = [
  {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
];

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
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 }); // Changed to 0.7 for 70% visibility
  const variant = useMemo(
    () =>
      animationVariants[Math.floor(Math.random() * animationVariants.length)],
    []
  );

  return (
    <motion.div
      ref={ref}
      className={`p-4 h-full flex flex-col-reverse bg-cover bg-center relative ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 1, delay: 0.5 }} // Added delay here
    >
      {typeof background === "string" && (
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority={false}
          loading="lazy"
        />
      )}
      {background &&
        typeof background !== "string" &&
        React.createElement(background, { className: "absolute inset-0" })}
      <div className={`relative z-10`}>
        <motion.h3
          className={`text-4xl font-bold ${valueColor}`}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.8 }} // Increased delay
        >
          {value}
        </motion.h3>
        <motion.p
          className={`text-sm mt-2 ${descriptionColor}`}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.9 }} // Increased delay
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const StatsDashboard: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-xl max-w-screen-lg justify-center"
    >
      <motion.h2
        className="text-3xl font-bold text-emerald-900 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        H2 Stats
      </motion.h2>
      <motion.p
        className="text-emerald-700 mb-6 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolo aliquyam erat, sed diam
        voluptua.
      </motion.p>

      <div className="grid grid-cols-12 grid-rows-12 h-56">
        <StatCard
          value="100M+"
          description="Lorem ipsum dolor sit amet."
          className="col-span-4 row-span-12 bg-[#143A33] rounded-l"
        />
        <motion.div
          className="col-span-3 row-span-12 bg-emerald-200 overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SmoothFadingCircle />
        </motion.div>
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
