"use client";


import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiX, FiMinus } from "react-icons/fi";
import { BsFillChatFill } from "react-icons/bs";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);


const quickQuestions = [
    "Pricing Plans?",
    "E-commerce Pricing",
    "Automation & Bots",
    "Contact Details",
  ];

  // Initial messages
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey there! I'm Okikiola's AI assistant. Ask me anything about his web development services, pricing plans, bot automations, or how to get your project started!",
    },
  ]);


  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();


    if (
      input.includes("contact") ||
      input.includes("mail") ||
      input.includes("email") ||
      input.includes("whatsapp") ||
      input.includes("twitter") ||
      input.includes("tiktok") ||
      input.includes("reach") ||
      input.includes("call")
    ) {
      return (
        <div>
          <p className="mb-2">
            You can reach Okikiola directly or check out his active profiles through the links below:
          </p>
          <ul className="space-y-1.5 font-medium">
            <li>
              Email:{" "}
              <a
                href="mailto:olodudeokiki@gmail.com"
                className="text-[#ffdb70] underline hover:opacity-80"
              >
                Send an Email
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/2348075608069"
                target="_blank"
                rel="noreferrer"
                className="text-[#ffdb70] underline hover:opacity-80"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li>
              Twitter (X):{" "}
              <a
                href="https://twitter.com/OlodudeIdowu"
                target="_blank"
                rel="noreferrer"
                className="text-[#ffdb70] underline hover:opacity-80"
              >
                @OlodudeIdowu
              </a>
            </li>
            <li>
              TikTok:{" "}
              <a
                href="https://tiktok.com/@Codewithdudejnr"
                target="_blank"
                rel="noreferrer"
                className="text-[#ffdb70] underline hover:opacity-80"
              >
                @Codewithdudejnr
              </a>
            </li>
          </ul>
        </div>
      );
    }

    // E-COMMERCE WEBSITES
    if (
      input.includes("ecommerce") ||
      input.includes("e-commerce") ||
      input.includes("online store") ||
      input.includes("shop")
    ) {
      return "E-Commerce Solutions\nOkikiola builds fast, secure online stores complete with payment gateways (Paystack/Flutterwave), admin dashboards, and inventory tracking.\n\n• Starter Store: $250 - $400 (Standard catalog, local payments, dynamic checkout)\n• Advanced Marketplace: $500 - $900+ (Multi-vendor dashboards, custom order tracking, bulk catalog management)\n\nGot specific features in mind for your store?";
    }

    // BUSINESS WEBSITES
    if (
      input.includes("business website") ||
      input.includes("corporate") ||
      input.includes("landing page") ||
      input.includes("company")
    ) {
      return "Business & Corporate Websites\nSleek, responsive websites designed to convert visitors into clients and establish authority online.\n\n• Landing Page / One-Pager: $150 - $250 (High converting, mobile optimized, fast loading)\n• Full Multi-Page Site: $300 - $550 (Blog, custom service pages, contact integration, SEO setup)";
    }

    // BOOKING WEBSITES
    if (
      input.includes("booking") ||
      input.includes("reservation") ||
      input.includes("hotel") ||
      input.includes("hospital") ||
      input.includes("appointment")
    ) {
      return "Websites with Booking Functionality\nIdeal for hotels, clinics, restaurants, and service providers who need real-time schedule management.\n\n• Standard Booking Site: $350 - $600 (Interactive calendar, automated email confirmation, availability engine)\n• Advanced Portal + Dashboard: $650 - $1,000+ (Full hotel/hospital management dashboard, guest records, dynamic room pricing)";
    }

    // TELEGRAM & WHATSAPP BOTS
    if (
      input.includes("telegram") ||
      input.includes("bot") ||
      input.includes("whatsapp bot")
    ) {
      return "Custom Bots (Telegram & WhatsApp)\nSmart bots built with Botpress or custom webhooks to answer FAQs, moderate communities, or take automated orders.\n\n• Basic Inquiry / FAQ Bot: $150 - $250 (Auto-replies, customer support routing)\n• Interactive Order & Triage Bot: $300 - $500 (Menu navigation, payment collection, live kitchen/vendor updates)";
    }

    // AUTOMATION
    if (
      input.includes("automation") ||
      input.includes("n8n") ||
      input.includes("zapier") ||
      input.includes("make") ||
      input.includes("workflow")
    ) {
      return "Workflow Automation (n8n / Make / Zapier)\nConnect your business tools to save hours of manual work every day.\n\n• Simple Webhook Pipelines: $100 - $200 (Syncing form leads to Google Sheets, CRM, or email)\n• Complex Business Workflows: $250 - $600+ (Multi-step logic across multiple databases like Supabase/Neon DB, auto-invoicing, rider dispatching)";
    }

    // GENERAL PRICING
    if (
      input.includes("price") ||
      input.includes("cost") ||
      input.includes("pricing") ||
      input.includes("rate") ||
      input.includes("plan")
    ) {
      return "Here is a quick overview of Okikiola's service tiers:\n\n1. Business Websites: $150 - $500\n2. E-Commerce Stores: $250 - $900+\n3. Booking & Reservation Sites: $350 - $1,000+\n4. Telegram & WhatsApp Bots: $150 - $500\n5. Automations (n8n/Zapier): $100 - $600+\n\nNote: Exact pricing depends on your project's scope and deadline. Which service are you interested in?";
    }

    // DEFAULT FALLBACK
    return "Thanks for asking! I can break down details, pricing, or share contact info for:\n• E-Commerce Stores\n•Corporate Business Sites\n• Booking Platforms\n• Telegram & WhatsApp Bots\nWo•rkflow Automations\n\nYou can also ask for Contact Details to get his direct links!";
  };

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);



  const processUserMessage = (userText) => {
    if (!userText.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setMessageInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(userText);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    processUserMessage(messageInput);
  };

  return (
    <div className="fixed bottom-20 lg:bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none select-none">
      {/* CHAT SUPPORT LAUNCH BUTTON */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="pointer-events-auto group bg-[#ffdb70] hover:bg-[#2b2b2c] text-[#121212] hover:text-[#ffdb70] border-2 border-[#ffdb70] active:scale-95 p-3.5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer gap-2.5 outline-none"
        >
          <BsFillChatFill size={18} />
          <span className="text-xs font-bold tracking-wide pr-1">
            Let's Chat!
          </span>
        </button>
      )}

      {/* CHATBOT WINDOW */}
      {isOpen && (
        <div
          className={`pointer-events-auto bg-[#121212] border border-[#ffdb70] shadow-2xl transition-all duration-300 ease-in-out w-[calc(100vw-2rem)] sm:w-[380px]
            ${
              isMinimized
                ? "h-14 rounded-t-2xl overflow-hidden"
                : "h-[80vh] max-h-[520px] rounded-2xl flex flex-col justify-between"
            }
            overflow-hidden`}
        >
          {/* Chat Header */}
          {/* Redesigned Chat Header */}
          <div className="bg-[#1e1e1f] border-b border-[#383838] px-4 py-3 flex justify-between items-center shrink-0 select-none">
            {/* Left: Avatar + Info */}
            <div className="flex items-center space-x-3">
              {/* Profile Image with Active Pulse Indicator */}
              <div className="relative w-9 h-9 flex-shrink-0">
                <img
                  src="/olodude-profile.jpg"
                  alt="Olodude Idowu Okikiola"
                  className="w-full h-full object-cover rounded-full border border-[#ffdb70]/50 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#1e1e1f] animate-pulse" />
              </div>

              {/* Title & Status Subtitle */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold text-white tracking-tight leading-none">
                    Okikiola's Assistant
                  </h3>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 bg-[#ffdb70]/10 text-[#ffdb70] border border-[#ffdb70]/30 rounded">
                    AI
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium mt-1 leading-none flex items-center gap-1">
                  Online & Ready to Help
                </span>
              </div>
            </div>

            {/* Right: Window Controls */}
            <div className="flex items-center space-x-1 text-gray-400">
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:text-white hover:bg-[#2b2b2c] rounded-lg transition cursor-pointer bg-transparent border-0 outline-none"
                aria-label="Minimize Chat"
              >
                <FiMinus size={15} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:text-white hover:bg-[#2b2b2c] rounded-lg transition cursor-pointer bg-transparent border-0 outline-none"
                aria-label="Close Chat"
              >
                <FiX size={15} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Message Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#121212] text-xs scroll-smooth [scrollbar-width:thin]">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#ffdb70] text-[#121212] font-semibold rounded-br-none"
                          : "bg-[#2b2b2c] text-gray-200 border border-[#383838] shadow-sm rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[#2b2b2c] border border-[#383838] p-3 rounded-2xl rounded-bl-none flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 bg-[#ffdb70] rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-[#ffdb70] rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-[#ffdb70] rounded-full animate-bounce" />
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Quick Questions Suggestions */}
              <div className="px-3 py-2 bg-[#18181b] border-t border-[#27272a] flex flex-wrap gap-1.5 shrink-0">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => processUserMessage(question)}
                    className="text-[10px] font-semibold px-2.5 py-1 bg-[#2b2b2c] hover:bg-[#ffdb70] text-gray-300 hover:text-[#121212] border border-[#383838] rounded-full transition cursor-pointer"
                  >
                    {question}
                  </button>
                ))}
              </div>

              {/* Chat Input Form */}
              <form
                onSubmit={handleSendMessage}
                className="p-3 bg-[#1e1e1f] border-t border-[#383838] flex gap-2 items-center shrink-0"
              >
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Ask about e-commerce, bots, pricing..."
                  className="flex-1 bg-[#2b2b2c] border border-[#383838] rounded-xl px-3.5 py-2 text-xs font-medium focus:outline-none focus:border-[#ffdb70] text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-[#ffdb70] hover:bg-opacity-90 text-[#121212] font-bold rounded-xl transition cursor-pointer flex-shrink-0 border-0 outline-none active:scale-95"
                  aria-label="Send Message"
                >
                  <FiSend size={14} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
