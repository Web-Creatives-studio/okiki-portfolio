import "./globals.css";
import Wrap from "./components/Wrap";
import ChatBot from "./components/ChatBot";

<meta name="google-site-verification" content="2sHjX92LwAGYnr7K17IPMGa_mZpMknN3ru68IYbDwjc" />

// 1. VIEWPORT EXPORT (Fixes the themeColor warning)
export const viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

// 2. METADATA EXPORT (Without themeColor)
export const metadata = {
  title: {
    default:
      "Olodude Idowu Okikiola | Frontend Web Developer & Automation Specialist",
    template: "%s | Olodude Idowu Okikiola",
  },
  description:
    "Portfolio of Olodude Idowu Okikiola (DUDEjnr) — Frontend Web Developer, Workflow Automation Engineer, and Chatbot Specialist based in Lagos, Nigeria. Specializing in Next.js, React, Supabase, n8n, Botpress, and Zapier.",

  keywords: [
    "Olodude Idowu Okikiola",
    "DUDEjnr",
    "Codewithdudejnr",
    "Frontend Web Developer Nigeria",
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

  // Favicons configuration
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://okiki-portfolio.vercel.app",
    title: "Olodude Idowu Okikiola | Web & Automation Engineer",
    description:
      "Building scalable web platforms, automated workflow pipelines, and intelligent chatbots with Next.js, React, n8n, and Botpress.",
    siteName: "Olodude Okikiola Portfolio",
    images: [
      {
        url: "https://okiki-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olodude Idowu Okikiola Portfolio Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Olodude Idowu Okikiola | Frontend Developer & Automation Specialist",
    description:
      "I engineer web platforms, build automated workflow pipelines, and develop intelligent chatbots.",
    creator: "@Codewithdudejnr",
    images: ["https://okiki-portfolio.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    // app/layout.js
    <html
      lang="en"
      className="dark scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-[#121212] text-white antialiased">
        <Wrap>
          <main>{children}</main>
        </Wrap>
        <ChatBot />
      </body>
    </html>
  );
}
