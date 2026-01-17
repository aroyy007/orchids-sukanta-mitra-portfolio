"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Dribbble } from "lucide-react";
import Image from "next/image";

export function ContactFooter() {
  return (
    <footer className="bg-[#0D0D0D]">
      <div className="relative overflow-hidden py-6 md:py-8 px-4 md:px-8 lg:px-16 bg-[#f5f5f5]">
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none flex flex-col justify-center">
          <div className="text-center whitespace-nowrap">
            <div className="font-heading text-[18px] sm:text-[28px] md:text-[40px] lg:text-[52px] xl:text-[60px] font-extrabold text-[#e8e8e8] tracking-tight leading-none">
              LET'S CHAT OVER TEA!
            </div>
          </div>
          <div className="text-center whitespace-nowrap">
            <div className="font-heading text-[18px] sm:text-[28px] md:text-[40px] lg:text-[52px] xl:text-[60px] font-extrabold text-[#e8e8e8] tracking-tight leading-none">
              LET'S CHAT OVER TEA!
            </div>
          </div>
          <div className="text-center whitespace-nowrap">
            <div className="font-heading text-[18px] sm:text-[28px] md:text-[40px] lg:text-[52px] xl:text-[60px] font-extrabold text-[#e8e8e8] tracking-tight leading-none">
              LET'S CHAT OVER TEA!
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2744] mb-2 leading-tight tracking-tight">
              LET'S CHAT OVER TEA!
            </h2>
            <motion.a
              href="mailto:helloatmitra@gmail.com"
              className="inline-block text-sm md:text-base text-[#CAFF33] hover:text-[#b8e62e] transition-colors duration-300 mb-2"
              whileHover={{ scale: 1.02 }}
            >
              helloatmitra@gmail.com
            </motion.a>

            <div className="relative w-[200px] h-[160px] md:w-[280px] md:h-[200px]">
              <svg viewBox="0 0 360 280" className="w-full h-full">
                <ellipse cx="180" cy="260" rx="100" ry="15" fill="#e0e0e0" opacity="0.5"/>
                
                <g transform="translate(70, 30)">
                  <path d="M20 200 L35 55 Q42 42 65 42 L115 42 Q138 42 145 55 L160 200 Q163 212 148 212 L32 212 Q17 212 20 200Z" fill="#f8f4eb" stroke="#2a3a5c" strokeWidth="2.5"/>
                  <rect x="40" y="70" width="100" height="115" rx="4" fill="#c9a66b"/>
                  <rect x="40" y="70" width="100" height="40" rx="4" fill="#b8956a"/>
                  <path d="M40 110 Q90 122 140 110" stroke="#a6845c" strokeWidth="2" fill="none"/>
                  <g>
                    <path d="M70 42 Q63 18 70 0 Q77 18 70 42" stroke="#d4956a" strokeWidth="3" fill="none" opacity="0.9">
                      <animate attributeName="d" values="M70 42 Q63 18 70 0 Q77 18 70 42;M70 42 Q77 18 70 0 Q63 18 70 42;M70 42 Q63 18 70 0 Q77 18 70 42" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M110 42 Q103 12 110 -8 Q117 12 110 42" stroke="#d4956a" strokeWidth="3" fill="none" opacity="0.9">
                      <animate attributeName="d" values="M110 42 Q103 12 110 -8 Q117 12 110 42;M110 42 Q117 12 110 -8 Q103 12 110 42;M110 42 Q103 12 110 -8 Q117 12 110 42" dur="2.5s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  <line x1="52" y1="80" x2="52" y2="170" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="70" y1="80" x2="70" y2="170" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="88" y1="80" x2="88" y2="170" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="106" y1="80" x2="106" y2="170" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="124" y1="80" x2="124" y2="170" stroke="#b8956a" strokeWidth="4"/>
                </g>

                <g transform="translate(155, 50) rotate(18)">
                  <path d="M18 180 L32 50 Q38 38 58 38 L102 38 Q122 38 128 50 L142 180 Q145 192 130 192 L28 192 Q13 192 16 180Z" fill="#f8f4eb" stroke="#2a3a5c" strokeWidth="2.5"/>
                  <rect x="36" y="62" width="88" height="105" rx="4" fill="#c9a66b"/>
                  <rect x="36" y="62" width="88" height="36" rx="4" fill="#b8956a"/>
                  <path d="M36 98 Q80 108 124 98" stroke="#a6845c" strokeWidth="2" fill="none"/>
                  <g>
                    <path d="M62 38 Q55 14 62 -4 Q69 14 62 38" stroke="#d4956a" strokeWidth="3" fill="none" opacity="0.9">
                      <animate attributeName="d" values="M62 38 Q55 14 62 -4 Q69 14 62 38;M62 38 Q69 14 62 -4 Q55 14 62 38;M62 38 Q55 14 62 -4 Q69 14 62 38" dur="2.2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M98 38 Q91 10 98 -8 Q105 10 98 38" stroke="#d4956a" strokeWidth="3" fill="none" opacity="0.9">
                      <animate attributeName="d" values="M98 38 Q91 10 98 -8 Q105 10 98 38;M98 38 Q105 10 98 -8 Q91 10 98 38;M98 38 Q91 10 98 -8 Q105 10 98 38" dur="2.8s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  <line x1="46" y1="70" x2="46" y2="155" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="62" y1="70" x2="62" y2="155" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="78" y1="70" x2="78" y2="155" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="94" y1="70" x2="94" y2="155" stroke="#b8956a" strokeWidth="4"/>
                  <line x1="110" y1="70" x2="110" y2="155" stroke="#b8956a" strokeWidth="4"/>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                SUKANTA MITRA
              </h3>
              <p className="text-white/40 text-sm">
                Visual Communication Designer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h4 className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                CONTACT
              </h4>
              <a
                href="tel:+8801980643483"
                className="flex items-center gap-3 text-white/60 hover:text-[#CAFF33] transition-colors group text-sm"
              >
                <Phone className="w-4 h-4" />
                +8801980643483
              </a>
              <a
                href="mailto:helloatmitra@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-[#CAFF33] transition-colors group text-sm"
              >
                <Mail className="w-4 h-4" />
                helloatmitra@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:text-right"
            >
              <h4 className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                FOLLOW ME
              </h4>
              <div className="flex gap-3 md:justify-end">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Dribbble, href: "#", label: "Dribbble" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white/60 hover:bg-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
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
            className="border-t border-white/5 mt-10 pt-8 text-center"
          >
            <p className="text-white/30 text-sm">
              All Rights Reserved/2026
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
