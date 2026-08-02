"use client";

import React from "react";
import Sidebar from "./Sidebar";

export default function Wrap({ children }) {
  return (
    <div className="flex h-dvh w-screen overflow-hidden bg-[#1e1e1f] select-none">
      {/* Sidebar navigation component */}
      <Sidebar />

      {/* Main Content Viewport */}
      <main
        className="
          flex-1 
          h-full 
          overflow-y-auto 
          scroll-smooth 
          px-4 sm:px-6 md:px-8 lg:px-10 
          pt-0 lg:pt-0
          pb-10
          transition-all duration-300 ease-in-out
          [scrollbar-width:thin] [scrollbar-color:#383838_#121212]
        "
      >
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}