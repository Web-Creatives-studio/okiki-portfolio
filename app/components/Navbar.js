'use client';

import { useState } from 'react';
import { FaUser, FaFileAlt, FaBriefcase, FaCode, FaEnvelope, FaHome } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home', icon: FaHome},
  { name: 'About', href: '#about', icon: FaUser },
  { name: 'Resume', href: '#resume', icon: FaFileAlt },
  { name: 'Work', href: '#projects', icon: FaBriefcase },
  { name: 'Skills', href: '#skills', icon: FaCode },
  { name: 'Contact', href: '#contact', icon: FaEnvelope },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <>
      {/*DESKTOP TOP NAVBAR  */}
      <header className="hidden md:block fixed top-0 right-0 z-50 p-6">
        <nav className="bg-primary-darker/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-gray-800 shadow-xl">
          <ul className="flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`transition duration-200 ${
                    activeTab === item.name
                      ? 'text-[#ffdb70] border-b-2 border-[#ffdb70] pb-1 font-semibold'
                      : 'text-text-muted hover:text-[#ffdb70]'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/*MOBILE BOTTOM NAVBAR*/}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary-darker/95 backdrop-blur-lg border-t border-gray-800 py-2 px-4 shadow-2xl">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`flex flex-col items-center justify-center w-full py-1 text-xs transition duration-200 ${
                  isActive ? 'text-accent font-semibold' : 'text-text-muted hover:text-white'
                }`}
              >
                <Icon className={`text-lg mb-1 ${isActive ? 'text-accent' : 'text-text-muted'}`} />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}