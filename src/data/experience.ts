export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Bipolar Factory",
    role: "AI Intern",
    period: "Jul 2026 – Present",
    description:
      "Engineering end-to-end vision processing pipelines and streaming AI infrastructure for automated retail operations.",
    highlights: [
      "Built CCTV image processing pipeline with ROI-based cropping for zone isolation",
      "Designed Kafka streaming architecture routing camera feeds to VLM inference service",
      "Engineered inference-to-action loop: parsed structured JSON outputs for automated store-ops alerts",
      "Fine-tuned domain vision model with LoRA/QLoRA on synthetic surveillance imagery using diffusion pipelines",
      "Developed Python-based Kafka producers/consumers and monitoring workflows",
    ],
    technologies: ["Python", "Kafka", "VLM", "LoRA", "QLoRA", "Computer Vision", "Docker"],
  },
  {
    company: "Vite Tech",
    role: "AI/ML Intern",
    period: "Apr 2026 – Jun 2026",
    description:
      "Conducted multilingual LLM adaptation research for low-resource Indic language understanding using PEFT and TRL.",
    highlights: [
      "Researched Gemma 4 adaptation and LoRA/QLoRA strategies for low-resource Tamil language support",
      "Performed large-scale text preprocessing: deduplication, normalization, and domain filtering for instruction tuning",
      "Analyzed tokenizer behaviors and training configurations for multilingual LLM fine-tuning",
      "Documented and benchmarked experimental fine-tuning pipelines using HuggingFace PEFT and TRL",
    ],
    technologies: ["Python", "HuggingFace", "PEFT", "TRL", "LoRA", "QLoRA", "Gemma 4"],
  },
  {
    company: "PK Software Solutions",
    role: "Data Science Intern",
    period: "Dec 2025 – Apr 2026",
    description:
      "Architected an AI-powered semantic search and scientific literature discovery platform indexing 13,000+ papers.",
    highlights: [
      "Built semantic search engine using FAISS vector indexing and Sentence-Transformers (MiniLM-L6)",
      "Engineered FastAPI backend with PostgreSQL relational schema and Pydantic validation",
      "Implemented Redis caching layer achieving sub-500ms repeated query latency",
      "Integrated Mistral 7B batch pipeline to extract structured insights across research papers",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "FAISS", "Redis", "Sentence Transformers", "Mistral 7B"],
  },
];
