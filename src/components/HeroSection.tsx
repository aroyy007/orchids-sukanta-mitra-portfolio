"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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
    <div ref={ref} className="font-krub text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#CAFF33]">
      {count.toString().padStart(2, "0")}{suffix}
    </div>
  );
}

export function HeroSection() {
  const services = [
    "GRAPHIC DESIGN",
    "BRANDING",
    "PUBLICATIONS",
    "EVENT BRANDING",
  ];

  return (
    <section id="home" className="relative min-h-screen bg-[#050d1d] overflow-hidden flex flex-col">
      <div className="absolute inset-0">
        {/* Main center glow - more prominent blue gradient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[650px] lg:w-[800px] h-[350px] sm:h-[500px] md:h-[650px] lg:h-[800px] bg-[#1a3a6e]/70 rounded-full blur-[100px] md:blur-[150px]" />
        {/* Secondary glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-[#0c2d5a]/80 rounded-full blur-[80px] md:blur-[120px]" />
        {/* Top right subtle glow */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-[#0a2040]/60 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      <div className="absolute top-24 sm:top-32 right-8 sm:right-16 md:right-24 lg:right-32 hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <svg width="40" height="40" className="md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33" />
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
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33" />
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 md:pb-8 flex-1">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 md:gap-8 items-center min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-8rem)] lg:min-h-[75vh]">
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
                <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33" />
              </svg>
              <span className="font-krub text-[#CAFF33] text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
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
              className="font-krub text-white/70 text-base sm:text-lg md:text-xl italic"
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-krub px-4 sm:px-5 py-2 sm:py-2.5 bg-[#CAFF33] text-[#0a1628] font-bold text-[10px] sm:text-xs uppercase tracking-wider border-2 border-[#CAFF33] hover:bg-transparent hover:text-[#CAFF33] transition-all duration-300"
              >
                DOWNLOAD CV
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-krub flex items-center gap-2 sm:gap-3 text-white font-semibold text-[10px] sm:text-xs uppercase tracking-wider hover:text-[#CAFF33] transition-all duration-300"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center">
                  <Play size={10} className="sm:w-3 sm:h-3 text-[#0a1628] ml-0.5" fill="#0a1628" />
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
                src="/heroimg.png"
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
              <p className="font-krub text-white/70 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">YEARS OF EXPERIENCE</p>
            </div>
            <div className="text-center lg:text-left">
              <CountUpNumber end={375} suffix="+" />
              <p className="font-krub text-white/70 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">HAPPY CLIENTS</p>
            </div>
            <div className="text-center lg:text-left">
              <CountUpNumber end={500} suffix="+" />
              <p className="font-krub text-white/70 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">PROJECTS DONE</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Banner */}
      <div className="relative bg-[#CAFF33] py-4 sm:py-5 md:py-6 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex items-center"
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...services, ...services, ...services, ...services].map((service, index) => (
              <div key={index} className="flex items-center">
                <span className="font-krub text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0a1628] tracking-wider px-3 sm:px-4 md:px-6">
                  {service}
                </span>
                <span className="text-[#0a1628] text-base sm:text-lg md:text-xl mx-2 sm:mx-4">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
