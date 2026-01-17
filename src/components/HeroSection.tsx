"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import Image from "next/image";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isVisible, text]);

  return <span>{displayText}</span>;
}

function CountUpNumber({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="font-heading text-5xl md:text-6xl font-extrabold text-[#CAFF33]">
      {count.toString().padStart(2, "0")}{suffix}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1e3a5f]/60 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0d2847]/80 rounded-full blur-[100px]" />
      </div>

      <div className="absolute top-32 right-32 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33"/>
          </svg>
        </motion.div>
      </div>
      <div className="absolute top-48 right-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-8">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center min-h-[75vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 60 60" fill="none">
                <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33"/>
              </svg>
              <span className="text-[#CAFF33] text-sm font-semibold tracking-[0.15em] uppercase">
                <TypewriterText text="HEY THERE!" delay={300} />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]"
            >
              <TypewriterText text="I'M SUKANTA MITRA" delay={600} />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-tight"
            >
              <TypewriterText text="VISUAL COMMUNICATION" delay={1200} />
              <br />
              <TypewriterText text="DESIGNER" delay={2000} />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-white/60 text-base md:text-lg"
            >
              <TypewriterText text="Based in South Asia." delay={2500} />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-[#CAFF33] text-[#0a1628] font-bold text-sm rounded-md hover:bg-[#CAFF33]/90 transition-all duration-300"
              >
                <Download size={16} />
                DOWNLOAD CV
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm hover:text-[#CAFF33] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <Play size={14} fill="white" />
                </div>
                SHOW REEL
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center z-0"
          >
            <div className="relative w-[280px] h-[400px] md:w-[320px] md:h-[450px] lg:w-[380px] lg:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"
                alt="Sukanta Mitra - Visual Communication Designer"
                fill
                className="object-cover object-top"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8 z-10 lg:pl-8"
          >
            <div>
              <CountUpNumber end={6} suffix="+" />
              <p className="text-white/70 text-sm font-semibold tracking-wide uppercase mt-1">YEARS OF EXPERIENCE</p>
            </div>
            <div>
              <CountUpNumber end={375} suffix="+" />
              <p className="text-white/70 text-sm font-semibold tracking-wide uppercase mt-1">HAPPY CLIENTS</p>
            </div>
            <div>
              <CountUpNumber end={500} suffix="+" />
              <p className="text-white/70 text-sm font-semibold tracking-wide uppercase mt-1">PROJECTS DONE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
