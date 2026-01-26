"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  { years: "2025-2026", role: "Visual Communication Designer", company: "WaterAid Bangladesh" },
  { years: "2025-2025", role: "Lead, Creative & Design", company: "Intelis" },
  { years: "2024-2025", role: "Senior Assistant Director - Creative", company: "IID" },
  { years: "2022-2024", role: "Assistant Director - Creative", company: "IID" },
  { years: "2021-2022", role: "Visual Designer", company: "StepUp" },
];

const skills = [
  { name: "Photoshop", percentage: 88, color: "#CAFF33" },
  { name: "Illustrator", percentage: 96, color: "#CAFF33" },
  { name: "InDesign", percentage: 84, color: "#CAFF33" },
  { name: "Premiere Pro", percentage: 74, color: "#CAFF33" },
  { name: "After Effects", percentage: 72, color: "#CAFF33" },
];

function SkillBar({ name, percentage, color }: { name: string; percentage: number; color: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-white/70 font-medium text-sm">{name}</span>
        <span className="text-white/50 text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="about" className="bg-[#0D0D0D] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#CAFF33] text-sm font-semibold tracking-[0.2em] uppercase">
            MY EXPERIENCE
          </span>
            <h2 className="font-anton text-3xl md:text-5xl font-normal text-white mt-3">
              MY WORK EXPERIENCE
            </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-5 bg-[#161616] rounded-2xl hover:bg-[#1A1A1A] transition-colors duration-300 group border border-white/5"
              >
                <div className="flex-shrink-0">
                  <span className="text-[#CAFF33] font-heading font-bold text-sm">
                    {exp.years}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white group-hover:text-[#CAFF33] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">{exp.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-[#161616] rounded-2xl p-6 md:p-8 border border-white/5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
