"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollKit() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Show scroll-to-top button after scrolling down 300px
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle parameters for progress ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="relative flex items-center justify-center w-12 h-12 bg-[#2b2b2c] text-[#ffdb70] rounded-full border border-[#383838] shadow-2xl hover:bg-[#383838] transition cursor-pointer group"
          >
            {/* Circular Progress SVG Ring */}
            <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none">
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="text-[#383838]"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="text-[#ffdb70]"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
            </svg>

            {/* Up Arrow Icon */}
            <FaArrowUp className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}