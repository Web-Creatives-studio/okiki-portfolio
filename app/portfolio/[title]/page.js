"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { projectData } from "../../data/projectData";
import {
  FaTimes,
  FaDesktop,
  FaMobileAlt,
  FaExternalLinkAlt,
  FaGithub,
  FaRobot,
} from "react-icons/fa";

export default function Preview() {
  const router = useRouter();
  const { title } = useParams();
  const selectedProject = projectData.find((project) => project.slug === title);

  if (!selectedProject) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <button
            onClick={() => router.push("/#projects")}
            className="px-4 py-2 bg-[#ffdb70] text-[#121212] font-bold rounded-xl text-xs uppercase"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  // Detect if the project category is a Bot or Chatbot
  const isBotCategory =
    selectedProject.category?.toLowerCase() === "bot" ||
    selectedProject.category?.toLowerCase() === "chatbot" ||
    selectedProject.category?.toLowerCase() === "automation";

  return (
    <div className="min-h-screen bg-[#121212] py-8 px-4 flex items-center justify-center text-white">
      <div className="bg-[#1e1e1f] w-full max-w-5xl rounded-3xl p-5 sm:p-8 relative border border-[#383838] shadow-2xl flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={() => router.push("/#projects")}
          className="absolute top-5 right-5 p-2 bg-[#2b2b2c] hover:bg-[#383838] text-gray-400 hover:text-[#ffdb70] rounded-full border border-[#383838] transition cursor-pointer z-20"
          aria-label="Close Preview"
        >
          <FaTimes className="text-sm" />
        </button>

        {/* 1. HEADER */}
        <div className="pr-12 mb-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              {selectedProject.title}
            </h1>
          </div>
          {selectedProject.category && (
            <span className="text-xs font-mono text-[#ffdb70] uppercase tracking-wider block mt-1">
              {selectedProject.category}
            </span>
          )}
        </div>

        {/* 2. CONDITIONAL MEDIA & CONTENT GRID */}
        {isBotCategory ? (
          /* ==================== BOT / AUTOMATION LAYOUT ==================== */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
            
            {/* GRID 1: MOBILE VIEW ONLY */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono mb-2">
                <FaRobot className="text-[#ffdb70]" />
                <span>Bot Interface (Mobile Preview)</span>
              </div>

              {/* Smartphone Frame */}
              <div className="bg-[#121212] border-2 border-[#383838] rounded-[2rem] p-2 shadow-2xl flex flex-col items-center w-full max-w-[280px] aspect-[9/18] overflow-hidden">
                <div className="w-12 h-2.5 bg-[#2b2b2c] rounded-full mb-2 flex-shrink-0" />
                <div className="flex-1 w-full rounded-[1.4rem] overflow-hidden bg-black border border-[#383838]">
                  <video
                    src={selectedProject.mobile || selectedProject.desktop}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* GRID 2: FULL DESCRIPTION & DETAILS */}
            <div className="bg-[#2b2b2c] p-6 rounded-2xl border border-[#383838] space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#ffdb70] border-b border-[#383838] pb-2">
                  Bot Architecture & Overview
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light whitespace-pre-line">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#383838]">
                {/* Tech Stack */}
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Technologies & Triggers
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech?.map((techItem) => (
                      <span
                        key={techItem}
                        className="text-[10px] font-semibold px-2.5 py-1 bg-[#1e1e1f] text-[#ffdb70] border border-[#383838] rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3 pt-2">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 bg-[#ffdb70] text-[#121212] font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-opacity-90 transition"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Test Bot Live</span>
                    </a>
                  )}
                  {selectedProject.code && (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 bg-[#1e1e1f] hover:bg-[#383838] text-white border border-[#383838] text-xs font-medium px-4 py-2.5 rounded-xl transition"
                    >
                      <FaGithub className="text-xs" />
                      <span>Workflow Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ==================== WEB / APP LAYOUT (MOBILE + DESKTOP ON ALL SCREENS) ==================== */
          <div className="space-y-6">
            {/* Media Grid: Grid 2 columns even on small mobile screens */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 items-center">
              
              {/* DESKTOP PREVIEW */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs text-gray-400 font-mono mb-1.5 truncate">
                  <FaDesktop className="text-[#ffdb70] flex-shrink-0" />
                  <span>Desktop View</span>
                </div>

                <div className="bg-[#121212] border border-[#383838] rounded-xl overflow-hidden shadow-lg flex flex-col">
                  {/* Browser Bar */}
                  <div className="bg-[#2b2b2c] px-2.5 py-1.5 border-b border-[#383838] flex items-center space-x-1 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 inline-block" />
                  </div>

                  {/* Desktop Video */}
                  <div className="bg-black aspect-video overflow-hidden">
                    <video
                      src={selectedProject.desktop}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* MOBILE PREVIEW */}
              <div className="flex flex-col justify-center items-center">
                <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs text-gray-400 font-mono mb-1.5 truncate">
                  <FaMobileAlt className="text-[#ffdb70] flex-shrink-0" />
                  <span>Mobile View</span>
                </div>

                {/* Mobile Frame */}
                <div className="bg-[#121212] border-2 border-[#383838] rounded-[1.2rem] sm:rounded-[1.8rem] p-1 shadow-lg flex flex-col items-center w-full max-w-[160px] sm:max-w-[220px] aspect-[9/18] overflow-hidden">
                  <div className="w-8 h-1.5 bg-[#2b2b2c] rounded-full mb-1 flex-shrink-0" />
                  <div className="flex-1 w-full rounded-[0.8rem] sm:rounded-[1.2rem] overflow-hidden bg-black border border-[#383838]">
                    <video
                      src={selectedProject.mobile}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* DESCRIPTION & TECH FOOTER */}
            <div className="bg-[#2b2b2c] p-4 sm:p-6 rounded-2xl border border-[#383838] space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#383838]">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech?.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-[10px] font-semibold px-2 py-0.5 bg-[#1e1e1f] text-[#ffdb70] border border-[#383838] rounded-md"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1.5 bg-[#ffdb70] text-[#121212] font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-opacity-90 transition"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.code && (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1.5 bg-[#1e1e1f] hover:bg-[#383838] text-white border border-[#383838] text-xs font-medium px-3.5 py-2 rounded-xl transition"
                    >
                      <FaGithub className="text-[10px]" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}