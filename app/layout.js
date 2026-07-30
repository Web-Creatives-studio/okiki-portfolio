import "./globals.css";
import Wrap from "./components/Wrap";

export const metadata = {
  // Title template keeps pages consistent
  title: {
    default:
      "Olodude Idowu Okikiola | Full-Stack Developer & Automation Specialist",
    template: "%s | Olodude Idowu Okikiola",
  },
  description:
    "Portfolio of Olodude Idowu Okikiola (DUDEjnr) — Full-Stack Web Developer, Workflow Automation Engineer, and Chatbot Specialist based in Lagos, Nigeria. Specializing in Next.js, React, Supabase, n8n, Botpress, and Zapier.",

  keywords: [
    "Olodude Idowu Okikiola",
    "DUDEjnr",
    "Codewithdudejnr",
    "Full-Stack Developer Nigeria",
    "Next.js Developer Lagos",
    "Workflow Automation Engineer",
    "n8n Specialist",
    "Botpress Chatbot Developer",
    "Zapier Automation Specialist",
    "Web Developer Lagos",
    "React Developer",
  ],

  authors: [
    {
      name: "Olodude Idowu Okikiola",
      url: "https://okiki-portfolio.vercel.app",
    },
  ],
  creator: "Olodude Idowu Okikiola",
  publisher: "Olodude Idowu Okikiola",

  // Indexing directives for search engines
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon and App Icon Declarations
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // Open Graph (WhatsApp, LinkedIn, Facebook Link Previews)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://okiki-portfolio.vercel.app", // Replace with your deployed URL
    title: "Olodude Idowu Okikiola | Web & Automation Engineer",
    description:
      "Building scalable web platforms, automated workflow pipelines, and intelligent chatbots with Next.js, React, n8n, and Botpress.",
    siteName: "Olodude Okikiola Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.png", // Image shown when sharing link on WhatsApp/LinkedIn (1200x630)
        width: 1200,
        height: 630,
        alt: "Olodude Idowu Okikiola Portfolio Banner",
      },
    ],
  },

  // Twitter Card Meta
  twitter: {
    card: "summary_large_image",
    title: "Olodude Idowu Okikiola | Full-Stack & Automation Specialist",
    description:
      "I engineer web platforms, build automated workflow pipelines, and develop intelligent chatbots.",
    creator: "@Codewithdudejnr", // Your Twitter/X handle if applicable
    images: ["https://okiki-portfolio.vercel.app"],
  },

  // Browser Address Bar Theme Color matching your accent
  themeColor: "#121212",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#121212] text-white antialiased">
        <Wrap>{children}</Wrap>
      </body>
    </html>
  );
}
