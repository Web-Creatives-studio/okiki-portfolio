"use client";

import { useState, useEffect } from "react";
import Reveal from "./Animations/Reveal";
import Slide from "./Animations/Slide";
import {
  FaEnvelope,
  FaDownload,
  FaTerminal,
  FaCheckCircle,
  FaFolderOpen,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiZapier,
  SiMake,
  SiN8N,
} from "react-icons/si";

export default function Hero() {
  const roles = [
    "Frontend Developer",
    "Workflow Automation Engineer",
    "Conversational AI Specialist",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="py-20 md:py-40 bg-[#1e1e1f] p-6 md:p-10 overflow-hidden"
    >
      {/* 2-COLUMN GRID (LEFT vs RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ==================== LEFT COLUMN: INTRO & ACTIONS ==================== */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Developer Availability Badge */}
          <Slide direction="down" delay={0.1} width="fit-content">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#2b2b2c] border border-[#383838] rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffdb70] animate-pulse" />
              <span className="text-xs font-semibold text-[#ffdb70]">
                Open for Projects & Engineering Roles
              </span>
            </div>
          </Slide>

          {/* Headline Name */}
          <Reveal delay={0.2} width="100%">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Olodude Idowu <span className="text-[#ffdb70]">Okikiola</span>
              </h1>

              {/* Dynamic Typing Subtitle */}
              <div className="h-8 flex items-center">
                <p className="text-base sm:text-lg md:text-xl font-bold font-mono text-gray-300">
                  &gt;{" "}
                  <span className="text-[#ffdb70] border-r-2 border-[#ffdb70] pr-1 animate-pulse">
                    {currentText}
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Pitch */}
          <Reveal delay={0.3} width="100%">
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
              I engineer web platforms, build automated workflow pipelines, and
              develop intelligent chatbots. From multi-vendor platforms and school
              systems to automated webhook integrations, I deliver clean,
              production-ready code.
            </p>
          </Reveal>

          {/* Quick Developer Credentials Badges */}
          <Slide direction="left" delay={0.4} width="100%">
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-300 font-mono">
              <div className="flex items-center space-x-2 bg-[#2b2b2c] p-2.5 rounded-xl border border-[#383838]">
                <FaCheckCircle className="text-[#ffdb70] text-sm flex-shrink-0" />
                <span>Frontend Developer</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#2b2b2c] p-2.5 rounded-xl border border-[#383838]">
                <FaCheckCircle className="text-[#ffdb70] text-sm flex-shrink-0" />
                <span>Low-Code Automation</span>
              </div>
            </div>
          </Slide>

          {/* Call To Action Buttons */}
          <Slide direction="up" delay={0.5} width="fit-content">
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center space-x-2 bg-[#ffdb70] text-[#121212] font-bold py-3 px-6 rounded-2xl hover:bg-opacity-90 transition duration-300 text-xs uppercase tracking-wider shadow-lg"
              >
                <FaEnvelope />
                <span>Let's Collaborate</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center space-x-2 bg-[#2b2b2c] hover:bg-[#383838] text-white border border-[#383838] font-semibold py-3 px-6 rounded-2xl transition duration-300 text-xs uppercase tracking-wider shadow-md"
              >
                <FaDownload className="text-[#ffdb70]" />
                <span>Download CV</span>
              </a>
            </div>
          </Slide>
        </div>

        {/* ==================== RIGHT COLUMN: PHOTO & DEV TERMINAL ==================== */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-6">
          
          {/* Profile Photo Container with Dev Tag */}
          <Slide direction="right" delay={0.2} width="fit-content">
            <div className="relative group">
              <div className="w-36 h-36 md:w-44 md:h-44 bg-[#2b2b2c] rounded-3xl overflow-hidden p-1.5 border-2 border-[#ffdb70]/50 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/olodude-profile.jpg"
                  alt="Olodude Idowu Okikiola"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Corner Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#2b2b2c] border border-[#383838] p-2.5 rounded-2xl text-[#ffdb70] shadow-lg flex items-center space-x-1.5 text-xs font-mono">
                <FaTerminal />
                <span>dev.okikiola</span>
              </div>
            </div>
          </Slide>

          {/* Developer Code Terminal Box */}
          <Slide direction="right" delay={0.4} width="100%">
            <div className="w-full bg-[#121212] border border-[#383838] rounded-2xl overflow-hidden shadow-2xl text-left font-mono text-xs">
              {/* Terminal Header */}
              <div className="bg-[#2b2b2c] px-4 py-2 flex items-center justify-between border-b border-[#383838]">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-[10px] text-gray-400 font-sans flex items-center gap-1">
                  <FaFolderOpen className="text-[#ffdb70]" /> developer-info.json
                </span>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 space-y-1 text-gray-300 leading-relaxed overflow-x-auto">
                <p>
                  <span className="text-[#ffdb70]">const</span>{" "}
                  <span className="text-white">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">name:</span>{" "}
                  <span className="text-green-400">"Olodude Okikiola"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">primaryStack:</span> [
                  <span className="text-green-400">"React"</span>,{" "}
                  <span className="text-green-400">"Next.js"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">automation:</span> [
                  <span className="text-green-400">"n8n"</span>,{" "}
                  <span className="text-green-400">"Zapier"</span>,{" "}
                  <span className="text-green-400">"Botpress"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">status:</span>{" "}
                  <span className="text-[#ffdb70]">"Ready for deployment"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </Slide>

          {/* Floating Stack Icons Row */}
          <Slide direction="up" delay={0.6} width="fit-content">
            <div className="flex items-center justify-center space-x-4 text-gray-400 text-lg pt-1">
              <FaReact
                className="hover:text-[#ffdb70] transition"
                title="React"
              />
              <SiNextdotjs
                className="hover:text-white transition"
                title="Next.js"
              />
              <SiTailwindcss
                className="hover:text-[#ffdb70] transition"
                title="Tailwind CSS"
              />
              <SiZapier
                className="hover:text-[#ffdb70] transition"
                title="Zapier"
              />
              <SiN8N
                className="hover:text-[#ffdb70] transition"
                title="n8n"
              />
              <SiMake
                className="hover:text-[#ffdb70] transition"
                title="Make"
              />
            </div>
          </Slide>

        </div>
      </div>
    </section>
  );
}