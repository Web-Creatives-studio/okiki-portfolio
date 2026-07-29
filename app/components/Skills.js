import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiZapier,
  SiMake,
  SiN8N,
} from "react-icons/si";

export default function ResumeTab() {
  const skillCategories = [
    {
      category: "Frontend & Core Web",
      skills: [
        { name: "HTML5", level: 95, icon: FaHtml5 },
        { name: "CSS3", level: 95, icon: FaCss3Alt },
        { name: "JavaScript (ES6+)", level: 90, icon: FaJs },
        { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
        { name: "Bootstrap", level: 88, icon: FaBootstrap },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React JS", level: 90, icon: FaReact },
        { name: "Next.js", level: 85, icon: SiNextdotjs },
      ],
    },
    {
      category: "Automation & Chatbots",
      skills: [
        { name: "Botpress", level: 88, icon: FaRobot },
        { name: "Zapier", level: 92, icon: SiZapier },
        { name: "Make.com", level: 88, icon: SiMake },
        { name: "n8n", level: 85, icon: SiN8N },
      ],
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "Supabase", level: 88, icon: SiSupabase },
        { name: "Neon DB", level: 85, icon: FaDatabase },
        { name: "Firebase", level: 82, icon: SiFirebase },
      ],
    },
  ];

  return (
    <section id="skills" className="space-y-10 animate-fadeIn py-10 md:py-18">
      {/* SECTION HEADER */}
      <header className="relative pb-3 border-b border-[#383838]">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
      </header>

      {/* SKILLS PROFICIENCY SECTION */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-[#2b2b2c] p-5 rounded-2xl border border-[#383838] space-y-4 shadow-md"
            >
              <h4 className="text-sm font-bold text-[#ffdb70] uppercase tracking-wider border-b border-[#383838] pb-2">
                {group.category}
              </h4>

              <div className="space-y-3">
                {group.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={sIdx} className="space-y-1.5">
                      {/* Skill Label & Percentage */}
                      <div className="flex justify-between items-center text-xs">
                        <span className="flex items-center space-x-2 text-white font-medium">
                          <Icon className="text-sm text-[#ffdb70]" />
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-gray-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="w-full h-2 bg-[#1e1e1f] rounded-full overflow-hidden border border-[#383838]">
                        <div
                          className="h-full bg-[#ffdb70] rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
