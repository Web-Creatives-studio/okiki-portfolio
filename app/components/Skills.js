"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Animations/Reveal";
import Slide from "./Animations/Slide";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiZapier,
  SiMake,
  SiN8N,
} from "react-icons/si";

// Count-up numbers synchronized with the bar animation
function AnimatedCounter({ targetValue, isParentInView, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Reset count to 0 whenever the parent leaves the viewport
    if (!isParentInView) {
      setCount(0);
      return;
    }

    const startDelayTimer = setTimeout(() => {
      let start = 0;
      const duration = 2200; // Matches 2.2s bar animation
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const stepValue = targetValue / steps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(startDelayTimer);
  }, [isParentInView, targetValue, delay]);

  return <span className="text-gray-400 font-mono">{count}%</span>;
}

export default function ResumeTab() {
  const containerRef = useRef(null);

  // CHANGED: `once: false` allows the animation to re-trigger EVERY time you visit the section
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const skillCategories = [
    {
      category: "Frontend & Core Web",
      skills: [
        { name: "HTML5", level: 95, icon: FaHtml5 },
        { name: "CSS3", level: 95, icon: FaCss3Alt },
        { name: "JavaScript (ES6+)", level: 90, icon: FaJs },
        { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
        { name: "Bootstrap", level: 88, icon: FaBootstrap },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React JS", level: 90, icon: FaReact },
        { name: "Next.js", level: 85, icon: SiNextdotjs },
      ],
    },
    {
      category: "Automation & Chatbots",
      skills: [
        { name: "Botpress", level: 88, icon: FaRobot },
        { name: "Zapier", level: 92, icon: SiZapier },
        { name: "Make.com", level: 88, icon: SiMake },
        { name: "n8n", level: 85, icon: SiN8N },
      ],
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "Supabase", level: 88, icon: SiSupabase },
        { name: "Neon DB", level: 85, icon: FaDatabase },
        { name: "Firebase", level: 82, icon: SiFirebase },
      ],
    },
  ];

  return (
    <section id="skills" className="space-y-10 py-10 md:py-18 overflow-hidden" ref={containerRef}>
      {/* SECTION HEADER */}
      <Reveal delay={0.1} width="100%">
        <header className="relative pb-3 border-b border-[#383838]">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
        </header>
      </Reveal>

      {/* SKILLS PROFICIENCY SECTION */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, gIdx) => {
            const slideDirection = gIdx % 2 === 0 ? "left" : "right";

            return (
              <Slide
                key={gIdx}
                direction={slideDirection}
                delay={0.2 + gIdx * 0.1}
                width="100%"
              >
                <div className="bg-[#2b2b2c] p-5 rounded-2xl border border-[#383838] space-y-4 shadow-md h-full">
                  <h4 className="text-sm font-bold text-[#ffdb70] uppercase tracking-wider border-b border-[#383838] pb-2">
                    {group.category}
                  </h4>

                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => {
                      const Icon = skill.icon;
                      const barDelay = 0.3 + sIdx * 0.15;

                      return (
                        <div key={sIdx} className="space-y-1.5">
                          {/* Skill Label & Percentage Counter */}
                          <div className="flex justify-between items-center text-xs">
                            <span className="flex items-center space-x-2 text-white font-medium">
                              <Icon className="text-sm text-[#ffdb70]" />
                              <span>{skill.name}</span>
                            </span>

                            <AnimatedCounter
                              targetValue={skill.level}
                              isParentInView={isInView}
                              delay={barDelay}
                            />
                          </div>

                          {/* Slow-filling Progress Bar */}
                          <div className="w-full h-2 bg-[#1e1e1f] rounded-full overflow-hidden border border-[#383838]">
                            <motion.div
                              className="h-full bg-[#ffdb70] rounded-full"
                              initial={{ width: "0%" }}
                              animate={
                                isInView
                                  ? { width: `${skill.level}%` }
                                  : { width: "0%" }
                              }
                              transition={{
                                duration: 2.2, // Smooth, slow filling duration
                                delay: barDelay,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Slide>
            );
          })}
        </div>
      </div>
    </section>
  );
}