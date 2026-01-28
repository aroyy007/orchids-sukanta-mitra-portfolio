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
              <span className="font-krub text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0a1628] tracking-wider px-4 sm:px-5 md:px-6">
                {service}
              </span>
              <span className="text-[#0a1628] text-base sm:text-lg md:text-xl mx-2 sm:mx-3 md:mx-4">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
