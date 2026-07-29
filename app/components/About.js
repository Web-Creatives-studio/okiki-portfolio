import { FaCode, FaRobot, FaSyncAlt, FaDatabase } from 'react-icons/fa';

export default function About() {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Shipped' },
    { number: '10+', label: 'Happy Clients' },
  ];

  const services = [
    {
      icon: FaCode,
      title: 'Full-Stack Web Development',
      desc: 'Building responsive web applications using React JS, Next.js, HTML, CSS, Bootstrap, and Tailwind CSS.',
    },
    {
      icon: FaSyncAlt,
      title: 'Workflow Automation',
      desc: 'Integrating business logic, data triggers, and third-party webhooks using Zapier, Make.com, and n8n.',
    },
    {
      icon: FaRobot,
      title: 'Conversational AI & Bots',
      desc: 'Designing custom chatbots and intelligent automation flows using Botpress and messaging webhooks.',
    },
    {
      icon: FaDatabase,
      title: 'Database Architecture',
      desc: 'Structuring backends and APIs with modern cloud databases like Neon DB, Supabase, and Firebase.',
    },
  ];

  return (
    <section id='about' className="space-y-8 animate-fadeIn py-10 md:py-18" >
      {/* HEADER SECTION */}
      <header className="relative pb-3 border-b border-[#383838]">
        <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></div>
      </header>

      {/* BIO PARAGRAPHS */}
      <div className="text-gray-300 space-y-4 text-xs md:text-sm leading-relaxed font-light">
        <p>
          I'm a web developer, workflow automation specialist, and chatbot engineer. I focus on building responsive, fast, and accessible user interfaces while crafting resilient backend systems and automated pipelines.
        </p>
        <p>
          Day to day, I transform complex client specifications into reliable applications—ranging from hotel booking engines and school management platforms to automated delivery systems and e-voting portals. I prioritize clean code structure, seamless integration, and efficient workflow performance.
        </p>
      </div>

      {/* STATS COUNTER BAR (MATCHES THE IMAGE ATTACHED) */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 py-2">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#2b2b2c] border border-[#383838] p-4 rounded-2xl text-center shadow-md flex flex-col justify-center items-center"
          >
            <span className="text-xl md:text-3xl font-extrabold text-[#ffdb70]">
              {stat.number}
            </span>
            <span className="text-[10px] md:text-xs text-gray-400 mt-1 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* WHAT I'M DOING SECTION */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#2b2b2c] p-5 rounded-2xl border border-[#383838] flex items-start space-x-4 shadow-sm"
              >
                <Icon className="text-2xl text-[#ffdb70] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}