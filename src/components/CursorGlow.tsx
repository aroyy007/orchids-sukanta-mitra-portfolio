"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(202, 255, 51, 0.1) 0%, rgba(202, 255, 51, 0.05) 30%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(202, 255, 51, 0.05) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
};
