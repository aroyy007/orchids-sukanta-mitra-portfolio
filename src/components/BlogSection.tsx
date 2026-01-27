"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    date: "27 Dec, 2025",
    category: "VISUAL DESIGN",
    title: "The Importance of visibility in Event Branding",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    date: "01 Dec, 2025",
    category: "BRANDING",
    title: "Uses of Color theory behind every Brands look",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    date: "27 Dec, 2025",
    category: "PUBLICATIONS DESIGN",
    title: "Why Publication Design Is More Than Just Layout",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    date: "15 Nov, 2025",
    category: "UI/UX",
    title: "Creating Seamless User Experiences in Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    date: "10 Nov, 2025",
    category: "TYPOGRAPHY",
    title: "The Art of Choosing the Right Typeface",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    date: "05 Nov, 2025",
    category: "DESIGN SYSTEMS",
    title: "Building Scalable Design Systems for Teams",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const totalPages = Math.ceil(blogPosts.length / visibleCount);

  const getVisiblePosts = () => {
    const posts = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % blogPosts.length;
      posts.push(blogPosts[index]);
    }
    return posts;
  };

  return (
    <motion.section 
      id="blog" 
      className="bg-[#0f1729] py-12 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[#CAFF33] text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span>MY BLOG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight" style={{ fontFamily: 'Anton, sans-serif' }}>
            MY LATEST <span className="text-[#CAFF33]">BLOG</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {getVisiblePosts().map((post, index) => (
            <motion.article
              key={`${post.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#CAFF33] rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#1a2744] flex items-center justify-center">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#1a2744]" />
                    </div>
                    <span className="text-[#1a2744]/70 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1a2744] leading-tight mb-2 line-clamp-2" style={{ fontFamily: 'Krub, sans-serif' }}>
                    {post.title}
                  </h3>
                  <span className="text-[#1a2744]/60 text-xs sm:text-sm">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * visibleCount)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                Math.floor(currentIndex / visibleCount) === idx ? "bg-[#CAFF33]" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
