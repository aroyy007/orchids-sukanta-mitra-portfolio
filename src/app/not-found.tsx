"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050d1d] flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1a3a6e]/50 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[350px] h-[350px] bg-[#0c2d5a]/60 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-anton text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4 sm:mb-6 tracking-tight uppercase"
        >
          Error 404. The page does not exist
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-krub text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
        >
          Sorry! The page you are looking for can not be found. Perhaps the page you requested was moved or deleted. 
          It is also possible that you made a small typo when entering the address. Go to the main page.
        </motion.p>

        {/* Animated 404 Explosion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-[440px] min-h-[410px] mx-auto mb-8 sm:mb-12"
        >
          {/* Cloud/Background Image */}
          <img
            src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true"
            alt="404 explosion cloud"
            className="w-full h-auto"
          />

          {/* Animated 404 Elements */}
          <div className="absolute top-[108px] left-[102px] w-[84px] h-[106px] animate-el1-move bg-[url('https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-1.png?raw=true')] bg-center bg-no-repeat bg-contain z-[2]" />
          <div className="absolute top-[92px] left-[136px] w-[184px] h-[106px] animate-el2-move bg-[url('https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-2.png?raw=true')] bg-center bg-no-repeat bg-contain z-[2]" />
          <div className="absolute top-[108px] left-[180px] w-[284px] h-[106px] animate-el3-move bg-[url('https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-3.png?raw=true')] bg-center bg-no-repeat bg-contain z-[2]" />
        </motion.div>

        {/* Go Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block font-krub w-full max-w-[260px] px-8 py-4 bg-[#CAFF33] text-[#0a1628] font-bold text-lg sm:text-xl uppercase tracking-wider rounded-full shadow-[0_5px_0_#9cb800,inset_0_0_18px_rgba(202,255,51,0.75)] hover:bg-[#d4ff4d] hover:shadow-[0_5px_0_#9cb800,inset_0_0_25px_rgba(202,255,51,0.9)] transition-all duration-300 text-center"
          >
            Go Home
          </Link>
        </motion.div>

        {/* Decorative stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-4 mt-12"
        >
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33" opacity="0.3" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33" opacity="0.5" />
          </svg>
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33" opacity="0.3" />
          </svg>
        </motion.div>
      </div>
    </main>
  );
}
