export const siteConfig = {
  name: "Dhayanidhi Palani",
  title: "Dhayanidhi Palani — AI/ML Engineer",
  description:
    "AI/ML Engineer building production-ready AI systems — LLMs, RAG, Computer Vision, Fine-Tuning, and AI Infrastructure.",
  url: "https://dhayanidhi.me",
  ogImage: "/og-image.png",
  email: "dhayanidhi962004@gmail.com",
  phone: "+91 8148024396",
  location: "Dharmapuri, India",
  links: {
    github: "https://github.com/Dhayanidhi-96",
    linkedin: "https://www.linkedin.com/in/dhayanidhi-p-3372b0291/",
    resume: "/resume.pdf",
  },
  keywords: [
    "AI/ML Engineer",
    "LLM",
    "RAG",
    "Computer Vision",
    "Fine-Tuning",
    "LoRA",
    "QLoRA",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Portfolio",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
