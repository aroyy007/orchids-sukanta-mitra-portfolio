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
    <section className="relative bg-[#CAFF33] py-4 sm:py-6 overflow-hidden">
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
                <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0a1628] tracking-wider px-3 sm:px-6" style={{ fontFamily: 'Krub, sans-serif' }}>
                  {service}
                </span>
                <span className="text-[#0a1628] text-base sm:text-xl mx-2 sm:mx-4">✦</span>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
