"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import Image from "next/image";

function TypewriterText({ 
  text, 
  typingSpeed = 80, 
  initialDelay = 0
}: { 
  text: string; 
  typingSpeed?: number; 
  initialDelay?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, initialDelay);
    return () => clearTimeout(startTimer);
  }, [initialDelay]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayText, hasStarted, isComplete, text, typingSpeed]);

  if (!hasStarted) {
    return (
      <span className="relative">
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[4px] h-[1.1em] bg-[#CAFF33] align-middle"
        />
      </span>
    );
  }

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[4px] h-[1.1em] bg-[#CAFF33] ml-1 align-middle"
      />
    </span>
  );
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
    <div ref={ref} className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#CAFF33]">
      {count.toString().padStart(2, "0")}{suffix}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#1e3a5f]/60 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-[#0d2847]/80 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      <div className="absolute top-24 sm:top-32 right-8 sm:right-16 md:right-24 lg:right-32 hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <svg width="40" height="40" className="md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33"/>
          </svg>
        </motion.div>
      </div>
      <div className="absolute top-36 sm:top-48 right-4 sm:right-12 md:right-16 lg:right-20 hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <svg width="20" height="20" className="md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 md:pt-28 pb-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-8 items-center min-h-[calc(100vh-8rem)] lg:min-h-[75vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3 sm:space-y-4 z-10 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 60 60" fill="none">
                <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33"/>
              </svg>
              <span className="text-[#CAFF33] text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                HEY THERE!
              </span>
            </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-1"
              >
                <h1 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.05] tracking-tight">
                  <span className="text-[#CAFF33] block">
                    <TypewriterText 
                      text="I'M SUKANTA MITRA"
                      typingSpeed={80}
                      initialDelay={1500}
                    />
                  </span>
                </h1>
                <h2 className="font-anton text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white leading-[1.05] tracking-tight">
                  VISUAL COMMUNICATION
                </h2>
                <h2 className="font-anton text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white leading-[1.05] tracking-tight">
                  DESIGNER
                </h2>
              </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-white/70 text-base sm:text-lg md:text-xl italic"
            >
              Based in South Asia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#CAFF33] text-[#0a1628] font-bold text-xs sm:text-sm rounded-md hover:bg-[#CAFF33]/90 transition-all duration-300"
              >
                <Download size={14} className="sm:w-4 sm:h-4" />
                DOWNLOAD CV
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-white font-semibold text-xs sm:text-sm hover:text-[#CAFF33] transition-all duration-300"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <Play size={12} className="sm:w-[14px] sm:h-[14px]" fill="white" />
                </div>
                SHOW REEL
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center z-0 order-1 lg:order-2"
          >
            <div className="relative w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[430px] lg:w-[380px] lg:h-[500px] xl:w-[420px] xl:h-[550px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/60a7b160-09b1-41c6-95c0-7650ac8f0cf1/heroimg-1768677571195.png?width=8000&height=8000&resize=contain"
                alt="Sukanta Mitra - Visual Communication Designer"
                fill
                className="object-contain object-bottom"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-row lg:flex-col justify-center gap-6 sm:gap-8 z-10 lg:pl-8 order-3 w-full lg:w-auto"
          >
            <div className="text-center lg:text-left">
              <CountUpNumber end={6} suffix="+" />
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">YEARS OF EXPERIENCE</p>
            </div>
            <div className="text-center lg:text-left">
              <CountUpNumber end={375} suffix="+" />
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">HAPPY CLIENTS</p>
            </div>
            <div className="text-center lg:text-left">
              <CountUpNumber end={500} suffix="+" />
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">PROJECTS DONE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
