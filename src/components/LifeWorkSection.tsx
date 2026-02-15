"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const CircularGallery = dynamic(() => import('./CircularGallery'), { ssr: false });

const beyondScreenImages = [
  { image: "/BTS1.png", text: "" },
  { image: "/BTS2.png", text: "" },
  { image: "/BTS3.png", text: "" },
  { image: "/BTS4.png", text: "" },
  { image: "/BTS5.png", text: "" },
];

const bookshelfImages = [
  { id: 1, src: "/showyourwork.webp", alt: "Show Your Work" },
  { id: 2, src: "/knowyouronions.jpg", alt: "Know Your Onions" },
  { id: 3, src: "/thedesignofeverydaythings.webp", alt: "Design of Everyday Things" },
  { id: 4, src: "/RuinedbyDesign.jpg", alt: "Ruined by Design" },
  { id: 5, src: "/hooked.png", alt: "Hooked" },
  { id: 6, src: "/dontmakemethink.webp", alt: "Don't Make Me Think" },
  { id: 7, src: "/steallikeabartist.webp", alt: "Steal Like an Artist" },
  { id: 8, src: "/sprint.png", alt: "Sprint" },
  { id: 9, src: "/atomichabits.webp", alt: "Atomic Habits" },
];

export function LifeWorkSection() {
  const [bookIndex, setBookIndex] = useState(0);
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const visibleBookCount = 8;

  const nextBook = useCallback(() => {
    setBookIndex((prev) => (prev + 1) % bookshelfImages.length);
  }, []);

  const prevBook = useCallback(() => {
    setBookIndex((prev) => (prev - 1 + bookshelfImages.length) % bookshelfImages.length);
  }, []);

  const getVisibleBooks = () => {
    const books = [];
    for (let i = 0; i < visibleBookCount; i++) {
      const index = (bookIndex + i) % bookshelfImages.length;
      books.push({ ...bookshelfImages[index], position: i });
    }
    return books;
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#1a2744]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-[#CAFF33] text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="font-krub">LIFE & WORK</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            BEYOND THE <span className="text-[#CAFF33]">SCREEN</span>
          </h2>
        </div>

        <div className="relative mb-24 md:mb-32 w-full" style={{ height: 'min(600px, 70vh)' }}>
          <CircularGallery
            items={beyondScreenImages}
            bend={3}
            textColor="#CAFF33"
            borderRadius={0.05}
            scrollSpeed={1.5}
            scrollEase={0.01}
            font="bold 24px Krub"
          />
        </div>

        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            ON MY <span className="text-[#CAFF33]">BOOKSHELF</span>
          </h2>
          <p className="font-krub text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            The magical land where reality is suspended and imagination reigns supreme. Brace yourself for a wild ride!
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-[#e8e8e8] rounded-xl sm:rounded-2xl py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-6 md:px-10 lg:px-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-6 md:py-8 overflow-x-auto scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0 sm:overflow-visible">
            {getVisibleBooks().map((book, idx) => (
              <motion.div
                key={`${book.id}-${idx}`}
                className="relative flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                animate={{
                  scale: hoveredBook === book.id ? (typeof window !== 'undefined' && window.innerWidth < 640 ? 1.08 : 1.15) : 1,
                  y: hoveredBook === book.id ? (typeof window !== 'undefined' && window.innerWidth < 640 ? -8 : -12) : 0,
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                style={{
                  width: "clamp(70px, 8vw, 120px)",
                  height: "clamp(105px, 12vw, 180px)",
                  zIndex: hoveredBook === book.id ? 50 : 1,
                  boxShadow: hoveredBook === book.id 
                    ? "0 12px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(202, 255, 51, 0.15)" 
                    : "0 2px 6px rgba(0, 0, 0, 0.12)",
                }}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 70px, (max-width: 1024px) 90px, 120px"
                />
              </motion.div>
            ))}
            </div>
          </div>

          <button
            onClick={prevBook}
            className="absolute left-1 sm:left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1a2744]/90 hover:bg-[#1a2744] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-[60]"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={nextBook}
            className="absolute right-1 sm:right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1a2744]/90 hover:bg-[#1a2744] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-[60]"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10">
            {bookshelfImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBookIndex(idx)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${idx === bookIndex ? "bg-[#1a2744] scale-125" : "bg-[#1a2744]/30 hover:bg-[#1a2744]/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
