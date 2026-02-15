"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

import { supabase } from "@/lib/supabase";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar_url: string;
  text: string;
  sort_order: number;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('Error loading testimonials:', error);
      } else {
        setTestimonials(data || []);
      }
    }
    fetchTestimonials();
  }, []);

  const nextSlide = useCallback(() => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials]);

  const prevSlide = useCallback(() => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Get visible testimonials based on screen size (handled via CSS)
  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];
    return [0, 1, 2].map((offset) => {
      const index = (currentIndex + offset) % testimonials.length;
      return { ...testimonials[index], offset };
    });
  };

  return (
    <section className="bg-[#0D0D0D] py-10 sm:py-12 md:py-16 lg:py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="font-krub text-[#CAFF33] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            TESTIMONIAL
          </span>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-2">
            WHAT CLIENTS SAY
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-4 sm:gap-5"
              >
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <motion.div
                    key={`${testimonial.id}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`bg-[#161616] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 relative group hover:bg-[#1A1A1A] transition-colors duration-300 border border-white/5 flex-1 ${idx === 0 ? '' : 'hidden md:block'
                      } ${idx === 2 ? 'md:hidden lg:block' : ''}`}
                  >
                    <Quote className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-[#CAFF33]/20" />
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#CAFF33]/30 flex-shrink-0">
                        <Image
                          src={testimonial.avatar_url}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-krub font-bold text-white text-xs sm:text-sm truncate">
                          {testimonial.name}
                        </h4>
                        <p className="font-krub text-white/40 text-[10px] sm:text-xs truncate">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="font-krub text-white/60 leading-relaxed text-xs sm:text-sm line-clamp-4">
                      {testimonial.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-6 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#CAFF33] hover:border-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#CAFF33] hover:border-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-3 sm:mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#CAFF33] w-5" : "bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

