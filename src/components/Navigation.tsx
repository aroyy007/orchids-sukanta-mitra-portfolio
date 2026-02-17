"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home", sectionId: "home" },
  { label: "ABOUT ME", href: "#about", sectionId: "about" },
  { label: "PORTFOLIO", href: "#portfolio", sectionId: "portfolio" },
  { label: "BLOG", href: "#blog", sectionId: "blog" },
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to detect active section
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#0a1628]/95 backdrop-blur-md border-b border-white/5"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="font-anton text-lg font-bold text-[#CAFF33] tracking-wide leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            SUKANTA<br />MITRA
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.sectionId)}
                className={`font-anton text-sm transition-colors duration-300 tracking-widest relative group ${activeSection === item.sectionId
                  ? "text-[#CAFF33] font-bold"
                  : "text-white/70 font-medium hover:text-[#CAFF33]"
                  }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#CAFF33] origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="font-krub w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-[#CAFF33] hover:text-[#CAFF33] transition-all text-xs font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:helloatmitra@gmail.com"
              className="font-krub flex items-center gap-2 px-4 py-2 bg-[#CAFF33] text-[#0a1628] text-xs font-bold rounded-md hover:bg-[#CAFF33]/90 transition-colors"
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
                  className={`font-krub block text-lg transition-colors ${activeSection === item.sectionId
                    ? "text-[#CAFF33] font-bold"
                    : "text-white/70 font-medium hover:text-[#CAFF33]"
                    }`}
                  onClick={() => handleNavClick(item.sectionId)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="mailto:helloatmitra@gmail.com"
                  className="font-krub text-sm text-[#CAFF33]"
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
