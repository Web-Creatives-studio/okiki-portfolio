"use client";

import { useState, useEffect } from "react";
import Slide from "./Animations/Slide";
import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

const navItems = [
  { id: 1, name: "Home", href: "#home", sectionId: "home", icon: FaHome },
  { id: 2, name: "About", href: "#about", sectionId: "about", icon: FaUser },
  {
    id: 3,
    name: "Resume",
    href: "#resume",
    sectionId: "resume",
    icon: FaFileAlt,
  },
  { id: 4, name: "Skills", href: "#skills", sectionId: "skills", icon: FaCode },
  {
    id: 5,
    name: "Work",
    href: "#projects",
    sectionId: "projects",
    icon: FaBriefcase,
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
    sectionId: "contact",
    icon: FaEnvelope,
  },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    // Select all targeted section elements by their IDs
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter(Boolean);

    if (sections.length === 0) return;

    // IntersectionObserver tracks which section is currently visible in the viewport
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px", // Trigger when section passes top threshold
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedItem = navItems.find(
            (item) => item.sectionId === entry.target.id,
          );
          if (matchedItem) {
            setActiveTab(matchedItem.name);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Mobile Top Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-[#1e1e1f]/90 border-b border-[#383838] px-4 flex items-center justify-between z-40 backdrop-blur-md">
        {/* Logo Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-black tracking-widest text-[#ffdb70] uppercase font-mono">
            DUDE
          </span>
          <span className="text-[10px] font-mono text-gray-400 border-l border-[#383838] pl-2 hidden sm:inline-block">
            dev.okikiola
          </span>
        </div>

        {/* Status & Quick Action Button */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 bg-[#2b2b2c] px-2.5 py-1 rounded-full border border-[#383838]">
            <span className="w-2 h-2 rounded-full bg-[#ffdb70] animate-pulse" />
            <span className="text-[10px] font-semibold text-[#ffdb70]">
              Open to work
            </span>
          </div>

          <a
            href="#contact"
            className="bg-[#ffdb70] text-[#121212] text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-opacity-90 transition shadow-sm"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* DESKTOP TOP NAVBAR */}
      <header className="hidden md:block fixed top-0 right-0 z-50 p-6">
        <Slide direction="down" delay={0.1} width="fit-content">
          <nav className="bg-[#2b2b2c]/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-[#383838] shadow-xl">
            <ul className="flex space-x-8 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={`transition duration-200 ${
                      activeTab === item.name
                        ? "text-[#ffdb70] border-b-2 border-[#ffdb70] pb-1 font-semibold"
                        : "text-gray-400 hover:text-[#ffdb70]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Slide>
      </header>

      {/* MOBILE BOTTOM NAVBAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1e1e1f]/95 backdrop-blur-lg border-t border-[#383838] py-2 px-2 shadow-2xl">
        <Slide direction="up" delay={0.1} width="100%">
          <div className="flex justify-around items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex flex-col items-center justify-center w-full py-1 text-[10px] transition duration-200 ${
                    isActive
                      ? "text-[#ffdb70] font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`text-base mb-1 ${
                      isActive ? "text-[#ffdb70]" : "text-gray-400"
                    }`}
                  />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </Slide>
      </nav>
    </>
  );
}
