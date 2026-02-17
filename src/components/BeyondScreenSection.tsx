"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", alt: "Team collaboration" },
  { id: 2, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", alt: "Creative workspace" },
  { id: 3, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop", alt: "Design meeting" },
  { id: 4, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop", alt: "Office environment" },
  { id: 5, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop", alt: "Working on laptop" },
  { id: 6, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", alt: "Team discussion" },
];

export function BeyondScreenSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push({ ...images[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-krub text-[#CAFF33] text-sm font-semibold tracking-[0.2em] uppercase">
            LIFE & WORK
          </span>
          <h2 className="font-anton text-3xl md:text-5xl font-normal text-white mt-3">
            BEYOND THE SCREEN
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={false}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {getVisibleImages().map((image) => (
                  <motion.div
                    key={`${image.id}-${currentIndex}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                  >
                    <div className="relative aspect-[3/2] rounded-2xl overflow-hidden group">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#CAFF33] hover:border-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#CAFF33] hover:border-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#CAFF33] w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
