'use client';

import React from "react";
import { FaTimes, FaDesktop, FaMobileAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function PopUp({ setPopup, selectedProject }) {
  if (!selectedProject) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-3 sm:p-6"
      onClick={() => setPopup(null)}
    >
      {/* FIXED CONTAINER: No scrollbars, strict height boundary */}
      <div 
        className="bg-[#1e1e1f] border border-[#383838] w-full max-w-5xl h-full max-h-[90vh] rounded-3xl p-4 sm:p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setPopup(null)}
          className="absolute top-4 right-4 p-2 bg-[#2b2b2c] hover:bg-[#383838] text-gray-400 hover:text-[#ffdb70] rounded-full border border-[#383838] transition cursor-pointer z-20"
          aria-label="Close modal"
        >
          <FaTimes className="text-sm" />
        </button>

        {/* 1. HEADER (Compact) */}
        <div className="pr-10 flex-shrink-0">
          <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight truncate">
            {selectedProject.title}
          </h3>
          {selectedProject.category && (
            <span className="text-[10px] sm:text-xs font-mono text-[#ffdb70] uppercase tracking-wider block">
              {selectedProject.category}
            </span>
          )}
        </div>

        {/* 2. MEDIA PREVIEW CONTAINER (Scales automatically inside available space) */}
        <div className="flex-1 min-h-0 my-3 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center overflow-hidden">
          
          {/* DESKTOP PREVIEW */}
          <div className="lg:col-span-8 h-full flex flex-col justify-center overflow-hidden">
            <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono mb-1 flex-shrink-0">
              <FaDesktop className="text-[#ffdb70]" />
              <span>Desktop View</span>
            </div>

            <div className="bg-[#121212] border border-[#383838] rounded-xl overflow-hidden shadow-lg flex flex-col flex-1 min-h-0 max-h-[32vh] sm:max-h-[42vh] lg:max-h-[50vh]">
              {/* Browser Window Bar */}
              <div className="bg-[#2b2b2c] px-3 py-1.5 border-b border-[#383838] flex items-center space-x-1.5 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
              </div>

              {/* Video */}
              <div className="flex-1 min-h-0 bg-black flex items-center justify-center overflow-hidden">
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
          <div className="lg:col-span-4 h-full flex flex-col justify-center items-center overflow-hidden hidden sm:flex">
            <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono mb-1 flex-shrink-0">
              <FaMobileAlt className="text-[#ffdb70]" />
              <span>Mobile View</span>
            </div>

            {/* Compact Smartphone Frame */}
            <div className="bg-[#121212] border-2 border-[#383838] rounded-[1.8rem] p-1.5 shadow-lg flex flex-col items-center max-h-[32vh] sm:max-h-[42vh] lg:max-h-[50vh] aspect-[9/18] overflow-hidden">
              <div className="w-10 h-2 bg-[#2b2b2c] rounded-full mb-1 flex-shrink-0" />
              <div className="flex-1 w-full rounded-[1.2rem] overflow-hidden bg-black border border-[#383838]">
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

        {/* 3. FOOTER DESCRIPTION & TECH (Fixed Bottom Bar) */}
        <div className="bg-[#2b2b2c] p-3 sm:p-4 rounded-2xl border border-[#383838] flex-shrink-0 space-y-2">
          <p className="text-xs text-gray-300 font-light line-clamp-2 leading-relaxed">
            {selectedProject.description}
          </p>

          <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#383838]">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
              {selectedProject.tech?.slice(0, 5).map((techItem) => (
                <span
                  key={techItem}
                  className="text-[10px] font-semibold px-2 py-0.5 bg-[#1e1e1f] text-[#ffdb70] border border-[#383838] rounded-md truncate"
                >
                  {techItem}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 bg-[#ffdb70] text-[#121212] font-bold text-[11px] px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  <span>Demo</span>
                </a>
              )}
              {selectedProject.code && (
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 bg-[#1e1e1f] hover:bg-[#383838] text-white border border-[#383838] text-[11px] font-medium px-3 py-1.5 rounded-lg transition"
                >
                  <FaGithub className="text-[10px]" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}