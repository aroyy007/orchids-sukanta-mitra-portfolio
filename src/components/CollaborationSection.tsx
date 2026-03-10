"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

// Row 1: 5 logos (British Council + first 4 PNGs)
const row1Logos = [
  { id: "bc", name: "British Council", type: "component" as const },
  { id: "palnetwork", name: "PAL Network", type: "image" as const, src: "/collaboration/palnetwork.png" },
  { id: "unitednations", name: "United Nations", type: "image" as const, src: "/collaboration/unitednations.png" },
  { id: "bracuni", name: "BRAC University", type: "image" as const, src: "/collaboration/bracuni.png" },
  { id: "wateraid", name: "WaterAid", type: "image" as const, src: "/collaboration/wateraid.png" },
];

// Row 2: 3 logos (remaining PNGs)
const row2Logos = [
  { id: "cs", name: "CS", type: "image" as const, src: "/collaboration/cs.png" },
  { id: "law", name: "Law", type: "image" as const, src: "/collaboration/law.png" },
  { id: "ministryofplanning", name: "Ministry of Planning", type: "image" as const, src: "/collaboration/ministryofplanning.png" },
];

function BritishCouncilLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-[#5C2D5C]" />
        ))}
      </div>
      <div className="text-[#1a2744]">
        <div className="text-xl font-bold tracking-wide leading-tight">BRITISH</div>
        <div className="text-xl font-bold tracking-wide leading-tight">COUNCIL</div>
      </div>
    </div>
  );
}

function LogoItem({ logo }: { logo: typeof row1Logos[number] }) {
  if (logo.type === "component") {
    return (
      <div className="flex-shrink-0 w-[190px] sm:w-[250px] md:w-[280px] lg:w-[320px] h-[100px] sm:h-[110px] md:h-[130px] flex items-center justify-center mx-2 sm:mx-3 md:mx-4 lg:mx-5">
        <BritishCouncilLogo />
      </div>
    );
  }
  return (
    <div className="flex-shrink-0 w-[190px] sm:w-[250px] md:w-[280px] lg:w-[320px] h-[100px] sm:h-[110px] md:h-[130px] flex items-center justify-center mx-2 sm:mx-3 md:mx-4 lg:mx-5">
      <div className="relative w-full h-[70px] sm:h-[85px] md:h-[100px]">
        <Image
          src={logo.src!}
          alt={logo.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 260px"
        />
      </div>
    </div>
  );
}

export function CollaborationSection() {
  // Duplicate logos for seamless infinite scroll
  const row1Items = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos];
  const row2Items = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section className="bg-white py-2 sm:py-4 md:py-6 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 text-[#1a2744] text-xs sm:text-sm font-medium">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-krub uppercase tracking-wider">Collaborated With</span>
          </div>
        </motion.div>
      </div>

      {/* Row 1: Scrolls left to right */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {row1Items.map((logo, index) => (
            <LogoItem key={`row1-${logo.id}-${index}`} logo={logo} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Scrolls right to left */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            },
          }}
        >
          {row2Items.map((logo, index) => (
            <LogoItem key={`row2-${logo.id}-${index}`} logo={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
