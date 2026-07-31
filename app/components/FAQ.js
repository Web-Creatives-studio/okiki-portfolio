"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./Animations/Slide";
import Reveal from "./Animations/Reveal";

const faqs = [
  {
    question: "Who is this Frontend Developer and Automation Specialist?",
    answer:
      "I'm a Frontend Developer specializing in React, Next.js, JavaScript, and modern web technologies. I also build workflow automations, API integrations, and AI-powered solutions using n8n, Make, Zapier, and Botpress.",
  },
  {
    question: "What frontend development services do you provide?",
    answer:
      "I build responsive websites, business landing pages, school portals, hospital scheduling systems, web applications, admin dashboards, and custom user interfaces using React JS, Next.js, and Tailwind CSS.",
  },
  {
    question: "Do you develop websites using React and Next.js?",
    answer:
      "Yes. I specialize in developing fast, SEO-friendly, and scalable web platforms. Every project is optimized for performance, accessibility, and smooth user experience.",
  },
  {
    question: "Can you build responsive websites for mobile and desktop?",
    answer:
      "Abolutely. Every website is built mobile-first and tested to ensure flawless performance across smartphones, tablets, and desktop displays.",
  },
  {
    question: "Do you optimize websites for SEO and Google rankings?",
    answer:
      "Yes. I implement technical SEO best practices including semantic HTML, metadata optimization, structured JSON-LD schemas, image optimization, and fast Core Web Vitals.",
  },
  {
    question: "What automation services do you offer?",
    answer:
      "I build custom webhook integrations, API workflows, AI-powered chatbots with Botpress, and business process automations using Zapier, Make.com, and n8n.",
  },
  {
    question: "Can you automate repetitive business tasks?",
    answer:
      "Yes. I create custom automation pipelines that connect your apps, eliminate manual data entry, synchronize databases (Supabase, Neon DB), and streamline customer support.",
  },
  {
    question: "Do you integrate third-party APIs into websites and applications?",
    answer:
      "Yes. I integrate payment gateways, authentication providers, CRMs, cloud databases, messaging bots, and custom REST APIs.",
  },
  {
    question: "Do you build AI-powered web applications?",
    answer:
      "Yes. I develop conversational AI bots, intelligent customer support agents, automated delivery bots, and custom workflow triggers using modern AI APIs.",
  },
  {
    question: "Can you improve or redesign an existing website?",
    answer:
      "Yes. I can revamp your existing website's UI/UX, improve page load speeds, modernize the frontend stack, optimize SEO, fix bugs, and integrate new features.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. I offer ongoing technical support including bug fixes, feature updates, database management, and workflow maintenance.",
  },
  {
    question: "How can I hire you for a project?",
    answer:
      "You can reach out directly via the Contact form on this page or email me at olodudeokiki@gmail.com. We'll review your requirements and get started right away.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-18 space-y-8 overflow-hidden">
      {/* SECTION HEADER */}
      <Reveal delay={0.1} width="100%">
        <header className="relative pb-3 border-b border-[#383838]">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
        </header>
      </Reveal>

      {/* FAQ GRID */}
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          const animationDirection = index % 2 === 0 ? "left" : "right";

          return (
            <Slide key={index} direction={animationDirection} delay={0.2 + (index % 2) * 0.1}>
              <div
                className={`bg-[#2b2b2c] rounded-2xl border transition-colors duration-300 overflow-hidden shadow-md ${
                  isOpen ? "border-[#ffdb70]" : "border-[#383838] hover:border-gray-600"
                }`}
              >
                {/* Question Toggle Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-5 cursor-pointer space-x-3 focus:outline-none"
                >
                  <span className="font-semibold text-xs md:text-sm text-white leading-snug">
                    {index + 1}. {faq.question}
                  </span>
                  <div className="p-1.5 bg-[#1e1e1f] rounded-lg text-[#ffdb70] flex-shrink-0 border border-[#383838]">
                    {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  </div>
                </button>

                {/* Animated Answer Box */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-[#383838]/50">
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Slide>
          );
        })}
      </div>
    </section>
  );
}