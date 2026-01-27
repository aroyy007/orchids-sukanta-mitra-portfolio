"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const CircularGallery = dynamic(() => import("./CircularGallery"), { ssr: false });

const beyondScreenImages = [
  { image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop", text: "Kayaking" },
  { image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop", text: "Marathon" },
  { image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", text: "Speaking" },
  { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", text: "Conference" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", text: "Portrait" },
  { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", text: "Team Work" },
  { image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop", text: "Hosting" },
];

const bookshelfImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop", alt: "Show Your Work" },
  { id: 2, src: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop", alt: "Know Your Onions" },
  { id: 3, src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop", alt: "Design of Everyday Things" },
  { id: 4, src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&h=300&fit=crop", alt: "Ruined by Design" },
  { id: 5, src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&h=300&fit=crop", alt: "Hooked" },
  { id: 6, src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop", alt: "Don't Make Me Think" },
  { id: 7, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=300&fit=crop", alt: "Steal Like an Artist" },
  { id: 8, src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=300&fit=crop", alt: "Sprint" },
  { id: 9, src: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=200&h=300&fit=crop", alt: "Atomic Habits" },
  { id: 10, src: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=200&h=300&fit=crop", alt: "The Mom Test" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export function LifeWorkSection() {
  const [bookIndex, setBookIndex] = useState(0);
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(7);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(3);
      } else if (window.innerWidth < 768) {
        setVisibleCount(5);
      } else {
        setVisibleCount(7);
      }
    };
    
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextBook = () => {
    setBookIndex((prev) => (prev + 1) % bookshelfImages.length);
  };

  const prevBook = () => {
    setBookIndex((prev) => (prev - 1 + bookshelfImages.length) % bookshelfImages.length);
  };

  const getVisibleBooks = () => {
    const books = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (bookIndex + i) % bookshelfImages.length;
      books.push({ ...bookshelfImages[index], position: i });
    }
    return books;
  };

  return (
    <motion.section 
      className="py-12 md:py-16 bg-[#1a2744]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 text-[#CAFF33] text-sm font-medium mb-3" style={{ fontFamily: 'Krub, sans-serif' }}>
            <Sparkles className="w-4 h-4" />
            <span>LIFE & WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight" style={{ fontFamily: 'Anton, sans-serif' }}>
            BEYOND THE <span className="text-[#CAFF33]">SCREEN</span>
          </h2>
        </div>

        <div className="relative mb-12 md:mb-16" style={{ height: '350px' }}>
          <CircularGallery
            items={beyondScreenImages}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
            font="bold 24px Krub"
          />
        </div>

        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-3" style={{ fontFamily: 'Anton, sans-serif' }}>
            ON MY <span className="text-[#CAFF33]">BOOKSHELF</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto" style={{ fontFamily: 'Krub, sans-serif' }}>
            The magical land where reality is suspended and imagination reigns supreme. Brace yourself for a wild ride!
          </p>
        </div>

        <div className="relative bg-[#e8e8e8] rounded-xl sm:rounded-2xl py-6 sm:py-8 px-4 md:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 overflow-hidden">
            {getVisibleBooks().map((book, idx) => (
              <motion.div
                key={`${book.id}-${idx}`}
                className="relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer shadow-lg"
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                animate={{
                  scale: hoveredBook === book.id ? 1.3 : 1,
                  zIndex: hoveredBook === book.id ? 50 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  width: "70px",
                  height: "105px",
                }}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  className="object-cover"
                  sizes="70px"
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevBook}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-[#1a2744]/80 hover:bg-[#1a2744] rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>
          <button
            onClick={nextBook}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-[#1a2744]/80 hover:bg-[#1a2744] rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>

          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {bookshelfImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBookIndex(idx)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                  idx === bookIndex ? "bg-[#1a2744]" : "bg-[#1a2744]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
