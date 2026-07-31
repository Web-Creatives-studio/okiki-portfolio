"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { projectData } from "../../data/projectData";
import {
  FaArrowLeft,
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
      <div className="h-dvh  bg-[#121212] flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <button
            onClick={() => router.push("/#projects")}
            className="px-5 py-2.5 bg-[#ffdb70] text-[#121212] font-bold rounded-xl text-xs uppercase cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const isBotCategory =
    selectedProject.category?.toLowerCase() === "bot" ||
    selectedProject.category?.toLowerCase() === "chatbot" ||
    selectedProject.category?.toLowerCase() === "automation";

  return (
    <div className="h-dvh bg-[#121212] text-white flex flex-col overflow-hidden select-none">
      
      {/* 1. TOP NAVBAR */}
      <header className="h-14 sm:h-16 bg-[#1e1e1f] border-b border-[#383838] px-4 sm:px-8 flex items-center justify-between flex-shrink-0 z-30 shadow-md">
        <div className="flex items-center space-x-3 min-w-0">
          <button
            onClick={() => router.push("/#projects")}
            className="p-2 bg-[#2b2b2c] hover:bg-[#383838] text-gray-300 hover:text-[#ffdb70] rounded-xl border border-[#383838] transition cursor-pointer flex items-center space-x-2 flex-shrink-0"
            aria-label="Back to projects"
          >
            <FaArrowLeft className="text-xs" />
            <span className="text-xs font-semibold hidden sm:inline">Back</span>
          </button>

          <div className="min-w-0">
            <h1 className="text-xs sm:text-base font-bold text-white truncate leading-tight">
              {selectedProject.title}
            </h1>
            {selectedProject.category && (
              <span className="text-[10px] font-mono text-[#ffdb70] uppercase tracking-wider block">
                {selectedProject.category}
              </span>
            )}
          </div>
        </div>

        {/* Action Header Links */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {selectedProject.demo && (
            <a
              href={selectedProject.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 bg-[#ffdb70] text-[#121212] font-bold text-xs px-3.5 py-1.5 sm:py-2 rounded-xl hover:bg-opacity-90 transition"
            >
              <FaExternalLinkAlt className="text-[10px]" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>
          )}
          {selectedProject.code && (
            <a
              href={selectedProject.code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 bg-[#2b2b2c] hover:bg-[#383838] text-white border border-[#383838] text-xs font-medium px-3.5 py-1.5 sm:py-2 rounded-xl transition"
            >
              <FaGithub className="text-[10px]" />
              <span className="hidden sm:inline">Source Code</span>
              <span className="sm:hidden">Code</span>
            </a>
          )}
        </div>
      </header>

      {/* 2. MAIN CONTAINER */}
      <main className="flex-1 min-h-0 p-3 sm:p-6 overflow-y-auto md:overflow-hidden flex flex-col justify-between">
        <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between space-y-3 md:space-y-0">
          
          {isBotCategory ? (
            /* ==================== BOT / AUTOMATION LAYOUT ==================== */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center flex-1 min-h-0">
              
              {/* MOBILE PREVIEW */}
              <div className="md:col-span-5 bg-[#1e1e1f] p-4 rounded-3xl border border-[#383838] flex flex-col items-center justify-center shadow-xl h-full min-h-0">
                <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono mb-2 flex-shrink-0">
                  <FaRobot className="text-[#ffdb70]" />
                  <span>Bot Mobile View</span>
                </div>

                <div className="bg-[#121212] border-2 border-[#383838] rounded-[1.8rem] p-1.5 shadow-2xl flex flex-col items-center w-full max-w-[220px] md:max-w-[240px] aspect-[9/18] max-h-[55vh] md:max-h-[65vh] overflow-hidden">
                  <div className="w-10 h-2 bg-[#2b2b2c] rounded-full mb-1 flex-shrink-0" />
                  <div className="flex-1 w-full rounded-[1.2rem] overflow-hidden bg-black border border-[#383838]">
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

              {/* ARCHITECTURE DETAILS */}
              <div className="md:col-span-7 bg-[#1e1e1f] p-5 sm:p-6 rounded-3xl border border-[#383838] flex flex-col justify-between shadow-xl h-full min-h-0 overflow-y-auto md:overflow-hidden">
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white border-b border-[#383838] pb-2 mb-3 flex items-center justify-between">
                    <span>Overview & Architecture</span>
                    <span className="text-[10px] font-mono text-[#ffdb70]">Workflow</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light whitespace-pre-line">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#383838] mt-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Tech Stack & Integrations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech?.map((techItem) => (
                      <span
                        key={techItem}
                        className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 bg-[#2b2b2c] text-[#ffdb70] border border-[#383838] rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ==================== WEB / APP LAYOUT ==================== */
            <div className="flex flex-col justify-between h-full min-h-0 space-y-3 md:space-y-4">
              
              {/* MEDIA CONTAINER: Stacked on Mobile, Side-by-Side on Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center flex-1 min-h-0 overflow-hidden">
                
                {/* DESKTOP PREVIEW (Spans 8 Cols Desktop) */}
                <div className="md:col-span-8 flex flex-col justify-center h-full min-h-0">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono mb-1 flex-shrink-0">
                    <FaDesktop className="text-[#ffdb70]" />
                    <span>Desktop Preview</span>
                  </div>

                  <div className="bg-[#1e1e1f] border border-[#383838] rounded-2xl overflow-hidden shadow-2xl flex flex-col flex-1 min-h-0 max-h-[30vh] sm:max-h-[40vh] md:max-h-[52vh]">
                    <div className="bg-[#2b2b2c] px-3 py-1.5 border-b border-[#383838] flex items-center space-x-1 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <div className="bg-black flex-1 min-h-0 overflow-hidden">
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

                {/* MOBILE PREVIEW (Spans 4 Cols Desktop) */}
                <div className="md:col-span-4 flex flex-col items-center justify-center h-full min-h-0">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono mb-1 flex-shrink-0">
                    <FaMobileAlt className="text-[#ffdb70]" />
                    <span>Mobile Preview</span>
                  </div>

                  <div className="bg-[#1e1e1f] border-2 border-[#383838] rounded-[1.6rem] p-1.5 shadow-2xl flex flex-col items-center w-full max-w-[170px] md:max-w-[200px] aspect-[9/18] max-h-[30vh] sm:max-h-[40vh] md:max-h-[52vh] overflow-hidden">
                    <div className="w-8 h-1.5 bg-[#2b2b2c] rounded-full mb-1 flex-shrink-0" />
                    <div className="flex-1 w-full rounded-[1.1rem] overflow-hidden bg-black border border-[#383838]">
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

              {/* FOOTER DESCRIPTION & TECH */}
              <div className="bg-[#1e1e1f] p-4 sm:p-5 rounded-2xl border border-[#383838] flex-shrink-0 space-y-2.5">
                <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-3 md:line-clamp-2">
                  {selectedProject.description}
                </p>

                <div className="pt-2 border-t border-[#383838] flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mr-2">
                    Stack:
                  </span>
                  {selectedProject.tech?.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-[10px] font-semibold px-2 py-0.5 bg-[#2b2b2c] text-[#ffdb70] border border-[#383838] rounded-md truncate"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

    </div>
  );
}