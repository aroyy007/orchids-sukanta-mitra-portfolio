"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  sort_order: number;
}

export function BeyondScreenSection() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase
          .from('gallery_images')
          .select('*')
          .order('sort_order', { ascending: true });

        if (error) {
          console.error("Error fetching gallery images:", error);
          return;
        }

        if (data) {
          setImages(data);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const getVisibleImages = () => {
    if (images.length === 0) return [];
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      if (images.length > 0) {
        const index = (currentIndex + i) % images.length;
        visible.push({ ...images[index], position: i });
      }
    }
    return visible;
  };

  return (
    <section className="bg-[#0D0D0D] py-12 md:py-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
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
            {loading ? (
              <div className="flex gap-6 animate-pulse">
                {[1, 2, 3].map(n => (
                  <div key={n} className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] aspect-[3/2] bg-white/5 rounded-none" />
                ))}
              </div>
            ) : images.length > 0 ? (
              <motion.div
                className="flex gap-6"
                initial={false}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {getVisibleImages().map((image) => (
                    <motion.div
                      key={`${image.id}-${image.position}-${currentIndex}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                    >
                      <div className="relative aspect-[3/2] rounded-none overflow-hidden group">
                        <Image
                          src={image.image_url}
                          alt={image.title || "Gallery image"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="text-center text-white/50 py-12">
                No gallery images found.
              </div>
            )}
          </div>

          {!loading && images.length > 0 && (
            <>
              <div className="flex justify-center gap-4 mt-6">
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

              <div className="flex justify-center gap-2 mt-4">
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
