export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://okiki-portfolio.vercel.app/sitemap.xml", // Replace with your domain
  };
}