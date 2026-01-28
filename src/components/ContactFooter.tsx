"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Dribbble } from "lucide-react";

export function ContactFooter() {
  return (
    <footer className="bg-[#0D0D0D]">
      {/* Tea Section */}
      <div className="relative overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        {/* Background Repeating Text */}
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none flex flex-col justify-center">
          <div className="whitespace-nowrap opacity-[0.03]">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="font-anton text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-normal leading-none tracking-tighter text-[#1a2744]"
              >
                LET'S CHAT OVER TEA! LET'S CHAT OVER TEA! LET'S CHAT OVER TEA!
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2
              className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#1a2744] leading-[0.95] tracking-tighter mb-2 sm:mb-3"
            >
              LET'S CHAT OVER TEA!
            </h2>
            <motion.a
              href="mailto:helloatmitra@gmail.com"
              className="font-krub text-sm sm:text-base md:text-lg lg:text-xl text-[#1a2744] hover:text-[#CAFF33] transition-colors duration-300 font-medium break-all"
              whileHover={{ x: 5 }}
            >
              helloatmitra@gmail.com
            </motion.a>
          </motion.div>

          {/* Right Visual (Tea Cups) */}
          <div className="relative w-[120px] h-[96px] sm:w-[150px] sm:h-[120px] md:w-[180px] md:h-[144px] lg:w-[220px] lg:h-[176px] flex-shrink-0">
            <svg viewBox="0 0 350 280" className="w-full h-full">
              {/* Shadows */}
              <ellipse cx="140" cy="240" rx="70" ry="10" fill="#000" opacity="0.05" />
              <ellipse cx="210" cy="245" rx="70" ry="10" fill="#000" opacity="0.05" />

              {/* First Glass (Back) */}
              <g transform="translate(40, 40) rotate(-8, 60, 100)">
                <path d="M15 160 L25 45 Q30 32 50 32 L90 32 Q110 32 115 45 L125 160 Q128 172 113 172 L27 172 Q12 172 15 160Z" fill="#fff" stroke="#1a2744" strokeWidth="2.5" />
                {/* Tea Level */}
                <path d="M20 100 L120 100 L124 155 Q126 168 112 168 L28 168 Q14 168 16 155 Z" fill="#D2691E" opacity="0.9" />
                {/* Glass reflections/lines */}
                <line x1="45" y1="40" x2="45" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2" />
                <line x1="70" y1="40" x2="70" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2" />
                <line x1="95" y1="40" x2="95" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2" />
                {/* Steam */}
                <g opacity="0.6">
                  <path d="M50 25 Q45 10 50 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M50 25 Q45 10 50 0;M50 25 Q55 10 50 0;M50 25 Q45 10 50 0" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M80 25 Q85 10 80 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M80 25 Q85 10 80 0;M80 25 Q75 10 80 0;M80 25 Q85 10 80 0" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                  </path>
                </g>
              </g>

              {/* Second Glass (Front) */}
              <g transform="translate(140, 60) rotate(5, 60, 100)">
                <path d="M15 160 L25 45 Q30 32 50 32 L90 32 Q110 32 115 45 L125 160 Q128 172 113 172 L27 172 Q12 172 15 160Z" fill="#fff" stroke="#1a2744" strokeWidth="2.5" />
                {/* Tea Level */}
                <path d="M20 90 L120 90 L124 155 Q126 168 112 168 L28 168 Q14 168 16 155 Z" fill="#8B4513" opacity="0.9" />
                {/* Glass reflections/lines */}
                <line x1="45" y1="40" x2="45" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2" />
                <line x1="70" y1="40" x2="70" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2" />
                <line x1="95" y1="40" x2="95" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2" />
                {/* Steam */}
                <g opacity="0.6">
                  <path d="M60 25 Q55 10 60 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M60 25 Q55 10 60 0;M60 25 Q65 10 60 0;M60 25 Q55 10 60 0" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                  </path>
                  <path d="M90 25 Q95 10 90 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M90 25 Q95 10 90 0;M90 25 Q85 10 90 0;M90 25 Q95 10 90 0" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
                  </path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-left"
            >
              <h3
                className="font-krub text-lg sm:text-xl font-bold text-white mb-1 tracking-tight"
              >
                SUKANTA MITRA
              </h3>
              <p
                className="font-krub text-white/40 text-xs sm:text-sm tracking-widest uppercase"
              >
                Visual Communication Designer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 sm:space-y-3 text-center sm:text-left"
            >
              <h4
                className="font-krub text-white/40 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase"
              >
                CONTACT
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="tel:+8801980643483"
                  className="font-krub flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-white/60 hover:text-[#CAFF33] transition-colors group text-xs sm:text-sm"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  +8801980643483
                </a>
                <a
                  href="mailto:helloatmitra@gmail.com"
                  className="font-krub flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-white/60 hover:text-[#CAFF33] transition-colors group text-xs sm:text-sm break-all"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  helloatmitra@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center sm:text-left md:text-right"
            >
              <h4
                className="font-krub text-white/40 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3 sm:mb-4"
              >
                FOLLOW ME
              </h4>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start md:justify-end">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Dribbble, href: "#", label: "Dribbble" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white/60 hover:bg-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300 border border-white/5"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-white/5 mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3"
          >
            <p
              className="font-krub text-white/20 text-[10px] sm:text-xs tracking-widest uppercase text-center"
            >
              © 2026 SUKANTA MITRA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <span className="font-krub text-white/20 text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <span className="font-krub text-white/20 text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
