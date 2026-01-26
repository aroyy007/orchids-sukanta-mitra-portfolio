"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Dribbble } from "lucide-react";

export function ContactFooter() {
  return (
    <footer className="bg-[#0D0D0D]">
      {/* Tea Section */}
      <div className="relative overflow-hidden py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white">
        {/* Background Repeating Text */}
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none flex flex-col justify-center">
          <div className="whitespace-nowrap opacity-[0.03]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="text-[80px] md:text-[120px] lg:text-[160px] font-black leading-none tracking-tighter text-[#1a2744]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                LET'S CHAT OVER TEA! LET'S CHAT OVER TEA! LET'S CHAT OVER TEA!
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#1a2744] leading-[0.9] tracking-tighter mb-4"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              LET'S CHAT OVER TEA!
            </h2>
            <motion.a
              href="mailto:helloatmitra@gmail.com"
              className="text-xl md:text-2xl text-[#1a2744] hover:text-[#CAFF33] transition-colors duration-300"
              style={{ fontFamily: 'Krub, sans-serif', fontWeight: 500 }}
              whileHover={{ x: 5 }}
            >
              helloatmitra@gmail.com
            </motion.a>
          </motion.div>

          {/* Right Visual (Tea Cups) */}
          <div className="relative w-[280px] h-[220px] md:w-[350px] md:h-[280px] flex-shrink-0">
            <svg viewBox="0 0 350 280" className="w-full h-full">
              {/* Shadows */}
              <ellipse cx="140" cy="240" rx="70" ry="10" fill="#000" opacity="0.05"/>
              <ellipse cx="210" cy="245" rx="70" ry="10" fill="#000" opacity="0.05"/>
              
              {/* First Glass (Back) */}
              <g transform="translate(40, 40) rotate(-8, 60, 100)">
                <path d="M15 160 L25 45 Q30 32 50 32 L90 32 Q110 32 115 45 L125 160 Q128 172 113 172 L27 172 Q12 172 15 160Z" fill="#fff" stroke="#1a2744" strokeWidth="2.5"/>
                {/* Tea Level */}
                <path d="M20 100 L120 100 L124 155 Q126 168 112 168 L28 168 Q14 168 16 155 Z" fill="#D2691E" opacity="0.9"/>
                {/* Glass reflections/lines */}
                <line x1="45" y1="40" x2="45" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2"/>
                <line x1="70" y1="40" x2="70" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2"/>
                <line x1="95" y1="40" x2="95" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2"/>
                {/* Steam */}
                <g opacity="0.6">
                  <path d="M50 25 Q45 10 50 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M50 25 Q45 10 50 0;M50 25 Q55 10 50 0;M50 25 Q45 10 50 0" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M80 25 Q85 10 80 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M80 25 Q85 10 80 0;M80 25 Q75 10 80 0;M80 25 Q85 10 80 0" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
                  </path>
                </g>
              </g>

              {/* Second Glass (Front) */}
              <g transform="translate(140, 60) rotate(5, 60, 100)">
                <path d="M15 160 L25 45 Q30 32 50 32 L90 32 Q110 32 115 45 L125 160 Q128 172 113 172 L27 172 Q12 172 15 160Z" fill="#fff" stroke="#1a2744" strokeWidth="2.5"/>
                {/* Tea Level */}
                <path d="M20 90 L120 90 L124 155 Q126 168 112 168 L28 168 Q14 168 16 155 Z" fill="#8B4513" opacity="0.9"/>
                {/* Glass reflections/lines */}
                <line x1="45" y1="40" x2="45" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2"/>
                <line x1="70" y1="40" x2="70" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2"/>
                <line x1="95" y1="40" x2="95" y2="165" stroke="#1a2744" strokeWidth="1" opacity="0.2"/>
                {/* Steam */}
                <g opacity="0.6">
                  <path d="M60 25 Q55 10 60 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M60 25 Q55 10 60 0;M60 25 Q65 10 60 0;M60 25 Q55 10 60 0" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M90 25 Q95 10 90 0" stroke="#1a2744" strokeWidth="2" fill="none">
                    <animate attributeName="d" values="M90 25 Q95 10 90 0;M90 25 Q85 10 90 0;M90 25 Q95 10 90 0" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite"/>
                  </path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 
                className="text-2xl font-bold text-white mb-2 tracking-tight"
                style={{ fontFamily: 'Krub, sans-serif' }}
              >
                SUKANTA MITRA
              </h3>
              <p 
                className="text-white/40 text-sm tracking-widest uppercase"
                style={{ fontFamily: 'Krub, sans-serif' }}
              >
                Visual Communication Designer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 
                className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ fontFamily: 'Krub, sans-serif' }}
              >
                CONTACT
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+8801980643483"
                  className="flex items-center gap-3 text-white/60 hover:text-[#CAFF33] transition-colors group text-sm"
                  style={{ fontFamily: 'Krub, sans-serif' }}
                >
                  <Phone className="w-4 h-4" />
                  +8801980643483
                </a>
                <a
                  href="mailto:helloatmitra@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#CAFF33] transition-colors group text-sm"
                  style={{ fontFamily: 'Krub, sans-serif' }}
                >
                  <Mail className="w-4 h-4" />
                  helloatmitra@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:text-right"
            >
              <h4 
                className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'Krub, sans-serif' }}
              >
                FOLLOW ME
              </h4>
              <div className="flex gap-4 md:justify-end">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Dribbble, href: "#", label: "Dribbble" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white/60 hover:bg-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300 border border-white/5"
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
            className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p 
              className="text-white/20 text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Krub, sans-serif' }}
            >
              © 2026 SUKANTA MITRA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <span className="text-white/20 text-xs tracking-widest uppercase cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <span className="text-white/20 text-xs tracking-widest uppercase cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
