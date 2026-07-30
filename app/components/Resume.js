"use client";

import Reveal from "./Animations/Reveal";
import Slide from "./Animations/Slide";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Resume() {
  const experience = [
    {
      role: "Frontend Developer",
      timeline: "2022 — Present",
      description:
        "Building responsive web platforms, food marketplaces, school management platforms, ecommerce with Next.js, React.js, Neon, and Supabase.",
    },
    {
      role: "Automation Specialist",
      timeline: "2025 — Present",
      description:
        "Building automated webhook workflows with Botpress, Supabase, n8n, Make, and Zapier.",
    },
  ];

  const education = [
    {
      degree: "Microbiology (Undergraduate)",
      timeline: "In Progress",
      description:
        "Applying logical analysis and system architectures to technical web engineering and automation projects.",
    },
  ];

  return (
    <section id="resume" className="space-y-10 py-10 md:py-18">
      {/* SECTION HEADER */}
      <Reveal delay={0.1} width="100%">
        <header className="relative pb-3 border-b border-[#383838]">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Resume
          </h2>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
        </header>
      </Reveal>

      {/* EXPERIENCE TIMELINE */}
      <div className="space-y-6">
        <Reveal delay={0.2} width="100%">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#2b2b2c] rounded-lg text-[#ffdb70] border border-[#383838]">
              <FaBriefcase />
            </div>
            <h3 className="text-xl font-bold text-white">Experience</h3>
          </div>
        </Reveal>

        <div className="border-l border-[#383838] ml-4 space-y-6 pl-6">
          {experience.map((item, idx) => (
            <Slide key={idx} direction="left" delay={0.3 + idx * 0.1} width="100%">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#ffdb70] rounded-full ring-4 ring-[#1e1e1f]" />
                <h4 className="text-base font-bold text-white">{item.role}</h4>
                <span className="text-xs text-[#ffdb70] font-mono">
                  {item.timeline}
                </span>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Slide>
          ))}
        </div>
      </div>

      {/* EDUCATION TIMELINE */}
      <div className="space-y-6">
        <Reveal delay={0.4} width="100%">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#2b2b2c] rounded-lg text-[#ffdb70] border border-[#383838]">
              <FaGraduationCap />
            </div>
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>
        </Reveal>

        <div className="border-l border-[#383838] ml-4 space-y-6 pl-6">
          {education.map((item, idx) => (
            <Slide key={idx} direction="left" delay={0.5 + idx * 0.1} width="100%">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#ffdb70] rounded-full ring-4 ring-[#1e1e1f]" />
                <h4 className="text-base font-bold text-white">{item.degree}</h4>
                <span className="text-xs text-[#ffdb70] font-mono">
                  {item.timeline}
                </span>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
}