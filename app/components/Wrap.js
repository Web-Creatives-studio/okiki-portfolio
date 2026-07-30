"use client";

import React from "react";
import Sidebar from "./Sidebar";

export default function Wrap({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#1e1e1f] ">
      {/* Sidebar navigation component */}
      <Sidebar />

      <main
        className={`
          flex-1 
          h-full 
          overflow-y-auto 
          px-4 md:px-6 lg:px-8 
          pt-20 lg:pt-0
        
          transition-all duration-300 ease-in-out
          
        `}
      >
        {children}
      </main>
    </div>
  );
}
