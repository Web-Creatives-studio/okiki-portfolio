import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ScrollKit from "./components/ScrollKit";

export default function Home() {
  // Structured Data Schema for Person / Software Developer
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Olodude Idowu Okikiola",
    alternateName: ["DUDEjnr", "Codewithdudejnr"],
    url: "https://okiki-portfolio.vercel.app",
    jobTitle: "Full-Stack Web Developer & Automation Engineer",
    sameAs: ["https://github.com", "https://linkedin.com", "https://x.com"],
    knowsAbout: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Workflow Automation",
      "n8n",
      "Zapier",
      "Botpress",
      "Supabase",
      "Neon DB",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Your main layout and tabs components */}

      <div className="bg-[#1e1e1f] h-screen">
        <ScrollKit />
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />

        <Contact />
      </div>
    </>
  );
}
