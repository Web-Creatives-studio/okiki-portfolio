"use client";

import Reveal from "./Animations/Reveal";
import Slide from "./Animations/Slide";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDownload, 
  FaTiktok, 
  FaTerminal 
} from 'react-icons/fa';

export default function Sidebar() {
  const contactDetails = [
    {
      icon: FaEnvelope,
      label: 'EMAIL',
      value: 'olodudeokiki@gmail.com',
      href: 'mailto:olodudeokiki@gmail.com'
    },
    {
      icon: FaPhoneAlt,
      label: 'PHONE',
      value: '+234 807 560 8069',
      href: 'tel:+2348075608069'
    },
    {
      icon: FaCalendarAlt,
      label: 'ROLE',
      value: 'Web & Automation Specialist'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'LOCATION',
      value: 'Lagos, Nigeria'
    }
  ];

  return (
    <aside className="hidden lg:flex bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 text-center shadow-2xl flex-col justify-between h-full overflow-hidden">
      
      {/* 1. PROFILE HEADER SECTION */}
      <div className="flex flex-col items-center">
        
        {/* Squircle Photo Frame */}
        <Slide direction="down" delay={0.1} width="fit-content">
          <div className="relative group mb-4">
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

        {/* Name */}
        <Reveal delay={0.2} width="100%">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            Olodude Idowu Okikiola
          </h1>
        </Reveal>

        {/* Title Badge */}
        <Slide direction="up" delay={0.3} width="fit-content">
          <div className="mt-2 px-4 py-1.5 bg-[#2b2b2c] text-xs font-medium text-gray-300 rounded-xl border border-[#383838]">
            Web Developer
          </div>
        </Slide>

        {/* Status Badge */}
        <Slide direction="up" delay={0.35} width="fit-content">
          <div className="mt-2.5 inline-flex items-center space-x-2 px-3 py-1 bg-[#2b2b2c] rounded-full border border-[#383838]">
            <span className="w-2 h-2 rounded-full bg-[#ffdb70] animate-pulse" />
            <span className="text-xs font-semibold text-[#ffdb70]">Open to work</span>
          </div>
        </Slide>
      </div>

      <hr className="border-[#383838] my-6" />

      {/* 2. CONTACT DETAILS LIST */}
      <div className="space-y-4 text-left px-1">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={index} delay={0.4 + index * 0.1} width="100%">
              <div className="flex items-center space-x-4">
                {/* Dark Boxed Icon */}
                <div className="p-3 bg-[#2b2b2c] rounded-2xl text-[#ffdb70] border border-[#383838] flex-shrink-0">
                  <Icon className="text-sm" />
                </div>

                {/* Text Info */}
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xs font-medium text-white hover:text-[#ffdb70] transition truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xs font-medium text-white truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* 3. SOCIAL LINKS */}
      <Slide direction="up" delay={0.7} width="100%">
        <div className="flex justify-center items-center space-x-5 my-6 text-gray-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[#ffdb70] transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#ffdb70] transition"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-[#ffdb70] transition"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="hover:text-[#ffdb70] transition"
          >
            <FaTiktok size={18} />
          </a>
        </div>
      </Slide>

      {/* 4. DOWNLOAD CV BUTTON */}
      <Slide direction="up" delay={0.8} width="100%">
        <a
          href="/resume.pdf"
          download
          className="w-full flex items-center justify-center space-x-2 py-3 bg-[#2b2b2c] hover:bg-[#383838] text-[#ffdb70] font-bold text-xs uppercase tracking-wider rounded-2xl border border-[#383838] transition shadow-md"
        >
          <FaDownload className="text-sm" />
          <span>Download CV</span>
        </a>
      </Slide>

    </aside>
  );
}