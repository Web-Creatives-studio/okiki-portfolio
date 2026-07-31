"use client";

import { useState } from "react";
import Reveal from "./Animations/Reveal";
import Slide from "./Animations/Slide";
import { projectData } from "../data/projectData";
import PopUp from "./PopUp";
import Preview from "../portfolio/[title]/page";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const [popUp, setPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [preview, setPreview] = useState(null)

  return (
    <section id="projects" className="py-20 md:py-18 bg-[#1e1e1f] space-y-10 overflow-hidden">
      {/* SECTION HEADER */}
      <Reveal delay={0.1} width="100%">
        <header className="relative pb-3 border-b border-[#383838]">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Portfolio</h2>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
        </header>
      </Reveal>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => {
            // Alternates direction: Even index slides from Left, Odd index slides from Right
            const animationDirection = index % 2 === 0 ? "left" : "right";

            return (
              <Slide
                key={index}
                direction={animationDirection}
                delay={0.2 + (index % 3) * 0.1}
                width="100%"
              >
                <div className="bg-[#2b2b2c] rounded-3xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between h-full border border-[#383838]">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm mb-4 leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="text-[10px] font-semibold px-2 py-0.5 bg-[#1e1e1f] text-[#ffdb70] border border-[#383838] rounded-md truncate"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#ffdb70] text-[#121212] text-xs font-bold py-2.5 px-5 rounded-xl hover:bg-opacity-90 transition"
                          >
                            Live Demo
                          </a>
                        )}

                        <button
                          onClick={() => {
                            //setPopup(true);
                            //setPreview(true)
                            router.push(`/preview/${project.slug}`)
                            //setSelectedProject(project);
                          }}
                          className="text-[#ffdb70] text-xs font-semibold py-2.5 px-5 rounded-xl border border-[#ffdb70] cursor-pointer hover:bg-[#ffdb70] hover:text-[#121212] transition"
                        >
                          Preview / Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            );
          })}
        </div>
      </div>

      {popUp && (
        <PopUp setPopup={setPopup} selectedProject={selectedProject} />
      )}
      {preview && (
        <Preview setPreveiew={setPreview} selectedProject={selectedProject} />
      )}
    </section>
  );
}