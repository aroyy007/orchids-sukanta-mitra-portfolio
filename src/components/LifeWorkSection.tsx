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
    <section className="py-10 sm:py-12 md:py-16 bg-[#1a2744]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#CAFF33] text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="font-krub">LIFE & WORK</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            BEYOND THE <span className="text-[#CAFF33]">SCREEN</span>
          </h2>
        </div>

        <div className="relative mb-20 w-full" style={{ height: 'min(600px, 70vh)' }}>
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

        <div className="text-center mb-8">
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-3">
            ON MY <span className="text-[#CAFF33]">BOOKSHELF</span>
          </h2>
          <p className="font-krub text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            The magical land where reality is suspended and imagination reigns supreme. Brace yourself for a wild ride!
          </p>
        </div>

        <div className="relative bg-[#e8e8e8] rounded-2xl py-8 px-4 md:px-8">
          <div className="flex items-center justify-center gap-3 md:gap-4 overflow-hidden">
            {getVisibleBooks().map((book, idx) => (
              <motion.div
                key={`${book.id}-${idx}`}
                className="relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer shadow-lg"
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                animate={{
                  scale: hoveredBook === book.id ? 1.5 : 1,
                  zIndex: hoveredBook === book.id ? 50 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  width: "100px",
                  height: "150px",
                }}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevBook}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a2744]/80 hover:bg-[#1a2744] rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={nextBook}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a2744]/80 hover:bg-[#1a2744] rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {bookshelfImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBookIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === bookIndex ? "bg-[#1a2744]" : "bg-[#1a2744]/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
