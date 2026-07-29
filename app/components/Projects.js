"use client";
import { useState } from "react";

import { projectData } from "../data/projectData";
import PopUp from "./PopUp";

export default function Projects() {
  const [popUp, setPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <section id="projects" className="py-10 md:py-18 bg-[#1e1e1f] space-y-10 ">
      <header className="relative pb-3 border-b border-[#383838]">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Portfolio</h2>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
      </header>
      <div className="container mx-auto px-6">
        {/* SECTION HEADER */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className=" bg-[#2b2b2c] rounded-3xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-muted mb-4">{project.description}</p>
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
                      className="bg-accent text-primary-darker text-sm font-bold py-2 px-5 rounded-full hover:bg-opacity-80 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  <button
                    onClick={() => {setPopup(true), setSelectedProject(project)}}
                    className="text-accent text-sm font-semibold py-2 px-5 rounded-full border border-accent cursor-pointer hover:bg-accent hover:text-primary-darker transition"
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popUp && <PopUp setPopup={setPopup} selectedProject={selectedProject} />}
    </section>
  );
}
