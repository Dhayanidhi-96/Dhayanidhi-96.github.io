export interface ArchitectureNode {
  id: string;
  label: string;
  description?: string;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
}

export interface TechDecision {
  question: string;
  answer: string;
}

export interface ProjectResult {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: "deployed" | "production" | "active" | "research";
  technologies: string[];
  problem: string;
  solution: string;
  architectureNodes: ArchitectureNode[];
  architectureEdges: ArchitectureEdge[];
  techDecisions: TechDecision[];
  features: string[];
  results: ProjectResult[];
  resultsSummary: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "ai-study-assistant",
    title: "AI Study Assistant",
    subtitle: "RAG-Powered Conversational PDF Chatbot",
    description:
      "Production RAG chatbot enabling students to query PDFs conversationally using semantic retrieval over FAISS vector stores, HuggingFace embeddings, and LLaMA 3.1 via Groq LPU acceleration.",
    status: "deployed",
    technologies: [
      "Python",
      "LangChain",
      "LLaMA 3.1",
      "Groq API",
      "FAISS",
      "HuggingFace",
      "Streamlit",
      "Docker",
    ],
    problem:
      "Students need to quickly extract specific answers from dense academic PDFs without reading entire documents. Traditional keyword search fails on conceptual and contextual queries.",
    solution:
      "A RAG-powered chatbot that enables conversational question-answering over uploaded PDFs using semantic retrieval over FAISS vector stores with HuggingFace sentence embeddings and LLaMA 3.1 generation.",
    architectureNodes: [
      { id: "pdf", label: "PDF Upload", description: "Document input" },
      { id: "chunk", label: "Chunking", description: "Text splitting" },
      { id: "embed", label: "Embeddings", description: "HuggingFace" },
      { id: "faiss", label: "FAISS Index", description: "Vector store" },
      { id: "retriever", label: "History-Aware Retriever", description: "Context-aware" },
      { id: "llama", label: "LLaMA 3.1", description: "Via Groq LPU" },
      { id: "response", label: "Response", description: "Generated answer" },
    ],
    architectureEdges: [
      { from: "pdf", to: "chunk" },
      { from: "chunk", to: "embed" },
      { from: "embed", to: "faiss" },
      { from: "faiss", to: "retriever" },
      { from: "retriever", to: "llama" },
      { from: "llama", to: "response" },
    ],
    techDecisions: [
      {
        question: "Why FAISS over hosted vector databases?",
        answer:
          "Zero-cost local vector search, optimal for single-user document sessions, with no external network latency or API dependencies.",
      },
      {
        question: "Why Groq API for LLaMA 3.1 inference?",
        answer:
          "LPU-accelerated inference delivers near-instant response times compared to standard CPU/GPU endpoints, crucial for interactive multi-turn chat UX.",
      },
      {
        question: "Why History-Aware Retrieval?",
        answer:
          "LangChain's create_history_aware_retriever preserves context across conversational follow-ups by reformulating queries based on prior turns.",
      },
    ],
    features: [
      "Semantic retrieval over FAISS vector stores",
      "History-aware multi-turn conversations",
      "HuggingFace sentence embeddings",
      "Groq LPU-accelerated LLaMA 3.1 inference",
      "Docker containerized deployment",
      "Streamlit user interface",
      "Zero-setup PDF question answering",
    ],
    results: [
      { value: "6,800+", label: "LinkedIn Impressions" },
      { value: "3,900+", label: "Members Reached" },
    ],
    resultsSummary:
      "Deployed on HuggingFace Spaces. Organically reached 3,900+ members and 6,800+ impressions within 24 hours of launch.",
    links: {
      github: "https://github.com/Dhayanidhi-96",
    },
  },
  {
    slug: "research-paper-discovery",
    title: "Research Paper Discovery & Semantic Search",
    subtitle: "AI-Powered Scientific Literature Search Engine",
    description:
      "End-to-end research paper discovery system with semantic search across 13,000+ arXiv papers, FAISS vector indexing, Mistral 7B analysis, and sub-500ms cached query responses.",
    status: "deployed",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "FAISS",
      "Sentence Transformers",
      "Mistral 7B",
      "Redis",
      "SQLAlchemy",
    ],
    problem:
      "Researchers struggle to discover relevant scientific literature across vast corpora. Keyword searches miss semantically related papers that use different terminology.",
    solution:
      "Built an end-to-end paper discovery platform combining arXiv scraping, PostgreSQL metadata storage, and 384-dimensional Sentence-Transformers embeddings stored in a FAISS index with Mistral 7B structured insights.",
    architectureNodes: [
      { id: "arxiv", label: "arXiv Scraper", description: "Paper ingestion" },
      { id: "postgres", label: "PostgreSQL", description: "Relational storage" },
      { id: "st", label: "MiniLM-L6", description: "384-dim embeddings" },
      { id: "faiss", label: "FAISS Index", description: "Vector search" },
      { id: "fastapi", label: "FastAPI", description: "REST endpoints" },
      { id: "redis", label: "Redis Cache", description: "Query caching" },
      { id: "mistral", label: "Mistral 7B", description: "Paper analysis" },
      { id: "results", label: "Search Results", description: "Ranked output" },
    ],
    architectureEdges: [
      { from: "arxiv", to: "postgres" },
      { from: "postgres", to: "st" },
      { from: "st", to: "faiss" },
      { from: "faiss", to: "fastapi" },
      { from: "fastapi", to: "redis" },
      { from: "fastapi", to: "mistral" },
      { from: "redis", to: "results" },
      { from: "mistral", to: "results" },
    ],
    techDecisions: [
      {
        question: "Why hybrid FAISS + PostgreSQL architecture?",
        answer:
          "PostgreSQL provides structured filtering (authors, categories, publication dates) while FAISS handles high-dimensional vector similarity — isolating search and metadata workloads.",
      },
      {
        question: "Why Redis caching layer?",
        answer:
          "Semantic embeddings and vector similarity lookups are computationally intensive. Redis caching delivers sub-500ms response times for repeated queries.",
      },
      {
        question: "Why MiniLM-L6 embeddings?",
        answer:
          "384-dimensional dense vectors achieve exceptional semantic similarity performance with minimal memory footprint and fast inference.",
      },
    ],
    features: [
      "Automated arXiv paper ingestion and parsing",
      "Semantic similarity search via FAISS",
      "384-dimensional Sentence-Transformer embeddings",
      "FastAPI REST backend with Pydantic schemas",
      "Redis caching for sub-500ms repeated queries",
      "Batch paper insight extraction via Mistral 7B",
      "Relational schema indexing 13,000+ papers",
    ],
    results: [
      { value: "13,000+", label: "Research Papers Indexed" },
      { value: "384-dim", label: "Vector Embeddings" },
      { value: "<500ms", label: "Cached Query Latency" },
    ],
    resultsSummary:
      "Full-stack architecture indexing 13,000+ research papers with sub-500ms cached query performance and automated LLM insights.",
    links: {
      github: "https://github.com/Dhayanidhi-96",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
