"use client";

import { motion } from "framer-motion";

const services = [
  "GRAPHIC DESIGN",
  "BRANDING",
  "PUBLICATIONS",
  "EVENT BRANDING",
];

export function ScrollingBanner() {
  return (
    <section className="relative bg-[#CAFF33] py-4 sm:py-5 md:py-6 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#0a1628] px-4 md:px-8 uppercase">
                {service}
              </span>
              <span className="text-[#0a1628] text-2xl sm:text-3xl md:text-4xl mx-2 md:mx-4">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
