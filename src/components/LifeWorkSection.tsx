"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const beyondScreenImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop", alt: "Kayaking adventure" },
  { id: 2, src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop", alt: "Marathon running" },
  { id: 3, src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", alt: "Public speaking" },
  { id: 4, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", alt: "Tech conference" },
  { id: 5, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", alt: "Portrait" },
  { id: 6, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", alt: "Team collaboration" },
  { id: 7, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop", alt: "Event hosting" },
];

const bookshelfImages = [
  { id: 1, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404580714i/18290401.jpg", alt: "Show Your Work" },
  { id: 2, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328765592i/9505449.jpg", alt: "Know Your Onions" },
  { id: 3, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442460745i/840.jpg", alt: "Design of Everyday Things" },
  { id: 4, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627068569i/44142998.jpg", alt: "Ruined by Design" },
  { id: 5, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407245133i/22668729.jpg", alt: "Hooked" },
  { id: 6, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384736554i/18197267.jpg", alt: "Don't Make Me Think" },
  { id: 7, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348495562i/10127019.jpg", alt: "Steal Like an Artist" },
  { id: 8, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387770614i/18077903.jpg", alt: "Sprint" },
  { id: 9, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535115320i/27220736.jpg", alt: "Atomic Habits" },
  { id: 10, src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624206110i/52578297.jpg", alt: "The Mom Test" },
];

export function LifeWorkSection() {
  const [beyondIndex, setBeyondIndex] = useState(0);
  const [bookIndex, setBookIndex] = useState(0);
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const visibleBeyondCount = 5;
  const visibleBookCount = 7;

  const nextBeyond = useCallback(() => {
    setBeyondIndex((prev) => (prev + 1) % beyondScreenImages.length);
  }, []);

  const prevBeyond = useCallback(() => {
    setBeyondIndex((prev) => (prev - 1 + beyondScreenImages.length) % beyondScreenImages.length);
  }, []);

  const nextBook = useCallback(() => {
    setBookIndex((prev) => (prev + 1) % bookshelfImages.length);
  }, []);

  const prevBook = useCallback(() => {
    setBookIndex((prev) => (prev - 1 + bookshelfImages.length) % bookshelfImages.length);
  }, []);

  const getVisibleBeyondImages = () => {
    const images = [];
    for (let i = 0; i < visibleBeyondCount; i++) {
      const index = (beyondIndex + i) % beyondScreenImages.length;
      images.push({ ...beyondScreenImages[index], position: i });
    }
    return images;
  };

  const getVisibleBooks = () => {
    const books = [];
    for (let i = 0; i < visibleBookCount; i++) {
      const index = (bookIndex + i) % bookshelfImages.length;
      books.push({ ...bookshelfImages[index], position: i });
    }
    return books;
  };

  return (
    <section className="py-16 md:py-24 bg-[#1a2744]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#CAFF33] text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span>LIFE & WORK</span>
          </div>
            <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              BEYOND THE <span className="text-[#CAFF33]">SCREEN</span>
            </h2>
          </div>

          <div className="relative mb-20">
              <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden py-8">
                {getVisibleBeyondImages().map((image, idx) => {
                  const isCenter = idx === Math.floor(visibleBeyondCount / 2);
                  const distanceFromCenter = Math.abs(idx - Math.floor(visibleBeyondCount / 2));
                  const rotations = [-8, -4, 0, 4, 8];
                  const rotation = rotations[idx] || 0;
                  
                  return (
                    <motion.div
                      key={`${image.id}-${idx}`}
                      className="relative flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1,
                        scale: isCenter ? 1.05 : 0.95,
                        rotate: rotation,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{
                        width: isCenter ? "200px" : "160px",
                        height: isCenter ? "260px" : "220px",
                        zIndex: visibleBeyondCount - distanceFromCenter,
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-white p-2 pb-6 shadow-xl"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                      >
                        <div className="relative w-full h-full overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 150px, 200px"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <button
                onClick={prevBeyond}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextBeyond}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              <div className="flex justify-center gap-2 mt-4">
                {beyondScreenImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setBeyondIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === beyondIndex ? "bg-[#CAFF33]" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

          <div className="text-center mb-8">
            <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-3">
              ON MY <span className="text-[#CAFF33]">BOOKSHELF</span>
            </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
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
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === bookIndex ? "bg-[#1a2744]" : "bg-[#1a2744]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
