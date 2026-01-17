"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const collaborators = [
  {
    id: 1,
    name: "British Council",
    logo: (
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
    ),
  },
  {
    id: 2,
    name: "UNDRR",
    logo: (
      <div className="flex items-center gap-3">
        <svg width="50" height="50" viewBox="0 0 100 100" className="text-[#1a5a96]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 70 Q50 30 70 70" fill="none" stroke="#2e8b57" strokeWidth="3" />
          <path d="M35 65 Q50 35 65 65" fill="none" stroke="#3cb371" strokeWidth="2" />
          <circle cx="60" cy="35" r="8" fill="#f4a460" />
          <path d="M55 55 L50 45 L45 55 L50 50 Z" fill="#ff6347" />
        </svg>
        <div>
          <div className="text-xl font-bold text-[#1a5a96] tracking-wide">UNDRR</div>
          <div className="text-[10px] text-[#1a5a96]">UN Office for Disaster Risk Reduction</div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "PAL Network",
    logo: (
      <div className="flex items-center gap-3">
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path d="M20 80 L50 30 L80 80 Z" fill="none" stroke="#2e8b57" strokeWidth="3" />
          <path d="M30 75 L50 40 L70 75 Z" fill="none" stroke="#3cb371" strokeWidth="2" />
          <rect x="35" y="55" width="30" height="25" fill="#f5f5dc" stroke="#daa520" strokeWidth="2" />
          <circle cx="65" cy="45" r="8" fill="#ff6347" />
          <path d="M62 42 L68 48 M62 48 L68 42" stroke="#fff" strokeWidth="2" />
        </svg>
        <div>
          <div className="text-xl font-bold text-[#1a2744]">PAL <span className="text-[#2e8b57]">NETWORK</span></div>
          <div className="text-xs text-[#2e8b57]">People&apos;s Action for Learning</div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: "United Nations Network on Migration",
    logo: (
      <div className="flex items-center gap-3">
        <svg width="50" height="50" viewBox="0 0 100 100" className="text-[#1a5a96]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div>
          <div className="text-sm text-[#1a5a96] leading-tight">United Nations</div>
          <div className="text-sm font-bold text-[#1a5a96] leading-tight">Network on Migration</div>
          <div className="text-[10px] text-[#2e8b57] italic">Working Better Together</div>
        </div>
      </div>
    ),
  },
];

export function CollaborationSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[#1a2744] text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-wider">Collaborated With</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-20"
        >
          {collaborators.map((collab, index) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              {collab.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
