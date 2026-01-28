"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = ["ALL", "EVENT BRANDING", "PUBLICATIONS", "LOGOS & BRANDING", "STATIC"];

const projects = [
  {
    id: 1,
    title: "Training manual design for BRAC Centre for and Justice",
    category: "PUBLICATION DESIGN",
    filterCategory: "PUBLICATIONS",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Training manual design for BRAC Centre for and Justice",
    category: "EVENT BRANDING",
    filterCategory: "EVENT BRANDING",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Logo and full branding design for Glintify",
    category: "LOGO & BRANDING",
    filterCategory: "LOGOS & BRANDING",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Research Highlights design on Generative AI in Education",
    category: "PUBLICATION DESIGN",
    filterCategory: "PUBLICATIONS",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Training manual design for BRAC Centre for and Justice",
    category: "PUBLICATION DESIGN",
    filterCategory: "PUBLICATIONS",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Training manual design for BRAC Centre for and Justice",
    category: "PUBLICATION DESIGN",
    filterCategory: "PUBLICATIONS",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL"
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="portfolio" className="bg-[#020b1a] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 60 60" fill="none">
              <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="#CAFF33"/>
            </svg>
            <span className="font-krub text-[#CAFF33] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
              PROJECTS
            </span>
          </div>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
            MY FEATURED <span className="text-[#CAFF33]">PORTFOLIO</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 mb-8 sm:mb-12 overflow-x-auto pb-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-krub text-xs sm:text-sm font-medium transition-all duration-300 relative whitespace-nowrap px-2 py-1 ${
                activeFilter === category
                  ? "text-[#CAFF33]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {category}
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#CAFF33]"
                />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#CAFF33] hover:shadow-2xl hover:shadow-[#CAFF33]/20 transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-[#e8e8e8]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="bg-[#CAFF33] p-4 sm:p-5">
                    <span className="font-krub text-[#020b1a]/70 text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase block mb-2">
                      {project.category}
                    </span>
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <h3 className="font-krub text-base sm:text-lg md:text-xl font-bold text-[#020b1a] leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#020b1a] flex items-center justify-center group-hover:bg-[#020b1a] transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#020b1a] group-hover:text-[#CAFF33] transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-krub inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-white/30 text-white text-xs sm:text-sm font-medium rounded-md hover:border-[#CAFF33] hover:text-[#CAFF33] transition-all duration-300"
          >
            MORE PROJECTS
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
