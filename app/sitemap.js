export default function sitemap() {
  const baseUrl = "https://okiki-portfolio.vercel.app"; // Replace with your domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}