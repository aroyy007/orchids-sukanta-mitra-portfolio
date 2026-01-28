"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "DARRELL STEWARD",
    title: "Founder & Leader",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis",
  },
  {
    id: 2,
    name: "DARRELL STEWARD",
    title: "Founder & Leader",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis",
  },
  {
    id: 3,
    name: "DARRELL STEWARD",
    title: "Founder & Leader",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#CAFF33] text-sm font-semibold tracking-[0.2em] uppercase">
            TESTIMONIAL
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">
            WHAT CLIENTS SAY
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  const testimonial = testimonials[index];
                  return (
                    <div
                      key={testimonial.id}
                      className="bg-[#161616] rounded-2xl p-6 md:p-8 relative group hover:bg-[#1A1A1A] transition-colors duration-300 border border-white/5"
                    >
                      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#CAFF33]/20" />
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#CAFF33]/30">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-white text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-white/40 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {testimonial.text}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#CAFF33] hover:border-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#CAFF33] hover:border-[#CAFF33] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#CAFF33] w-6" : "bg-white/20 hover:bg-white/40"
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
