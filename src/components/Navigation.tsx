"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about", active: true },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "BLOG", href: "#blog" },
];

const socialIcons = [
  { icon: "in", href: "#" },
  { icon: "be", href: "#" },
  { icon: "fb", href: "#" },
  { icon: "ig", href: "#" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            className="font-heading text-lg font-bold text-[#CAFF33] tracking-wide leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            SUKANTA<br />MITRA
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 tracking-wide relative ${
                  item.active ? "text-[#CAFF33]" : "text-white/70 hover:text-[#CAFF33]"
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-[#CAFF33] hover:text-[#CAFF33] transition-all text-xs font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:helloatmitra@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-[#CAFF33] text-[#0a1628] text-xs font-bold rounded-md hover:bg-[#CAFF33]/90 transition-colors"
            >
              <Mail size={14} />
              helloatmitra@gmail.com
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block text-lg font-medium transition-colors ${
                    item.active ? "text-[#CAFF33]" : "text-white/70 hover:text-[#CAFF33]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="mailto:helloatmitra@gmail.com"
                  className="text-sm text-[#CAFF33]"
                >
                  helloatmitra@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
