"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

import { supabase } from "@/lib/supabase";

interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  image_url: string;
  url?: string;
  sort_order: number;
}

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    async function fetchBlogPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error('Error loading blog posts:', error);
      } else {
        setBlogPosts(data || []);
      }
      setLoading(false);
    }
    fetchBlogPosts();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / visibleCount);

  const getVisiblePosts = () => {
    if (blogPosts.length === 0) return [];
    const posts = [];
    for (let i = 0; i < visibleCount; i++) {
      // Handle wrapping around if needed, or just show less if not enough posts
      if (i < blogPosts.length) {
        const index = (currentIndex + i) % blogPosts.length;
        posts.push(blogPosts[index]);
      }
    }
    return posts;
  };

  return (
    <section id="blog" className="bg-[#0f1729] py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[#CAFF33] text-xs sm:text-sm font-medium mb-3">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-krub">MY BLOG</span>
          </div>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            MY LATEST <span className="text-[#CAFF33]">BLOG</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {getVisiblePosts().map((post, index) => (
            <motion.article
              key={`${post.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer h-full"
            >
              <a href={post.url || '#'} target="_blank" className="block h-full">
                <div className="bg-[#CAFF33] rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#1a2744] flex items-center justify-center flex-shrink-0">
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#1a2744]" />
                      </div>
                      <span className="font-krub text-[#1a2744]/70 text-[10px] sm:text-xs font-medium uppercase tracking-wider truncate">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-krub text-base sm:text-lg font-bold text-[#1a2744] leading-tight mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="font-krub text-[#1a2744]/60 text-xs sm:text-sm mt-auto block">{post.date}</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * visibleCount)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${Math.floor(currentIndex / visibleCount) === idx ? "bg-[#CAFF33]" : "bg-white/30"
                }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
