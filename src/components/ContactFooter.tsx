"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export function ContactFooter() {
  return (
    <footer className="bg-[#0D0D0D]">
      {/* Tea Section */}
      <div className="relative overflow-hidden py-2 sm:py-3 md:py-4 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#f5f5f5]">
        {/* Background Repeating Text */}
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none flex flex-col justify-center">
          <div className="whitespace-nowrap opacity-[0.04]">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="font-anton text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-normal leading-tight tracking-tighter text-[#1a2744]"
              >
                LET'S CHAT OVER TEA! LET'S CHAT OVER TEA! LET'S CHAT OVER TEA!
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center relative">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-[#1a2744] leading-[0.9] tracking-tight"
            >
              LET&rsquo;S CHAT OVER TEA!
            </motion.h2>

            {/* Email */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              href="mailto:helloatmitra@gmail.com"
              className="font-krub text-base sm:text-lg md:text-xl lg:text-2xl text-[#1a2744]/70 hover:text-[#1a2744] transition-colors duration-300 font-medium italic mt-2 sm:mt-3"
              whileHover={{ scale: 1.02 }}
            >
              helloatmitra@gmail.com
            </motion.a>

            {/* Tea cups image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-[170px] h-[145px] sm:w-[240px] sm:h-[205px] md:w-[340px] md:h-[290px] lg:w-[420px] lg:h-[360px] mt-[-30px] sm:mt-[-45px] md:mt-[-60px] lg:mt-[-80px]"
            >
              <Image
                src="/teaa.png"
                alt="Two tea cups"
                fill
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-left"
            >
              <h3
                className="font-anton text-lg sm:text-xl text-white mb-1 tracking-tight"
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
                  { icon: <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.linkedin.com/in/sukantamitra", label: "LinkedIn" },
                  { icon: <FaBehance className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.behance.net/sukantamitrasm", label: "Behance" },
                  { icon: <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.facebook.com/share/18TVKtTgxU/", label: "Facebook" },
                  { icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.instagram.com/visual_epitome", label: "Instagram" },
                ].map(({ icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white/60 hover:bg-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300 border border-white/5"
                    aria-label={label}
                  >
                    {icon}
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
    </footer >
  );
}
