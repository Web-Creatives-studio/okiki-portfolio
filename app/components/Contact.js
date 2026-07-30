"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Animations/Reveal";
import Slide from "./Animations/Slide";
import { FaEnvelope, FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with your EmailJS credentials
    emailjs
      .sendForm(
        "service_1rd8zcc",
        "template_4kfr2xn",
        formRef.current,
        "E4YmBgmoKlyw3REpL"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-18 space-y-8 overflow-hidden">
      {/* SECTION HEADER */}
      <Reveal delay={0.1} width="100%">
        <header className="relative pb-3 border-b border-[#383838]">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
        </header>
      </Reveal>

      {/* MAP / LOCATION DISPLAY */}
      <Slide direction="down" delay={0.2} width="100%">
        <div className="w-full h-48 md:h-56 bg-[#2b2b2c] border border-[#383838] rounded-2xl overflow-hidden shadow-lg relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62283120282!2d3.119117621406834!3d6.548055093781358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </Slide>

      {/* CONTACT PITCH & DIRECT EMAIL */}
      <Reveal delay={0.3} width="100%">
        <div className="bg-[#2b2b2c] p-4 md:p-6 rounded-2xl border border-[#383838] text-gray-300 text-xs md:text-sm leading-relaxed font-light flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            Interested in starting a project, automating your workflows, or building an intelligent chatbot?
          </p>
          <a
            href="mailto:olodudeokiki@gmail.com"
            className="inline-flex items-center space-x-2 text-[#ffdb70] font-mono font-semibold hover:underline flex-shrink-0"
          >
            <FaEnvelope />
            <span>olodudeokiki@gmail.com</span>
          </a>
        </div>
      </Reveal>

      {/* FORM CONTAINER */}
      <Slide direction="up" delay={0.4} width="100%">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-[#2b2b2c] p-6 md:p-8 rounded-3xl border border-[#383838] shadow-2xl space-y-4"
        >
          <h3 className="text-xl font-bold text-white mb-2">Send Me a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
              className="w-full bg-[#1e1e1f] border border-[#383838] text-white text-xs md:text-sm p-4 rounded-xl focus:border-[#ffdb70] outline-none transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
              className="w-full bg-[#1e1e1f] border border-[#383838] text-white text-xs md:text-sm p-4 rounded-xl focus:border-[#ffdb70] outline-none transition"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject / Project Need"
            required
            className="w-full bg-[#1e1e1f] border border-[#383838] text-white text-xs md:text-sm p-4 rounded-xl focus:border-[#ffdb70] outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="5"
            required
            className="w-full bg-[#1e1e1f] border border-[#383838] text-white text-xs md:text-sm p-4 rounded-xl focus:border-[#ffdb70] outline-none transition resize-none"
          ></textarea>

          {/* STATUS NOTIFICATION MESSAGES */}
          {status === "success" && (
            <div className="flex items-center space-x-2 text-green-400 bg-green-950/40 border border-green-800 p-3 rounded-xl text-xs">
              <FaCheckCircle className="text-sm flex-shrink-0" />
              <span>Your message has been sent successfully! I'll get back to you shortly.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center space-x-2 text-red-400 bg-red-950/40 border border-red-800 p-3 rounded-xl text-xs">
              <FaExclamationCircle className="text-sm flex-shrink-0" />
              <span>Failed to send message. Please try emailing directly at olodudeokiki@gmail.com</span>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto flex items-center justify-center space-x-2 py-3.5 px-8 bg-[#ffdb70] text-[#121212] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-opacity-90 transition shadow-lg cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin text-sm" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-sm" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </Slide>
    </section>
  );
}