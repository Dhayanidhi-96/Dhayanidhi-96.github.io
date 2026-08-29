export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "LLM / GenAI",
    items: [
      "LangChain",
      "LLaMA 3.1",
      "Groq API",
      "Prompt Engineering",
      "RAG",
      "HuggingFace Transformers",
      "PEFT / LoRA / QLoRA",
      "TRL",
      "Mistral 7B",
    ],
  },
  {
    name: "Computer Vision",
    items: [
      "CNN",
      "Transfer Learning",
      "VLM Inference",
      "Image Processing",
      "ROI-Based Analysis",
    ],
  },
  {
    name: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Model Evaluation",
      "MLflow",
    ],
  },
  {
    name: "Deep Learning",
    items: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "CNN",
      "RNN",
      "LSTM",
    ],
  },
  {
    name: "Backend",
    items: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Pydantic",
      "REST APIs",
    ],
  },
  {
    name: "Data & Vector Search",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "FAISS",
      "Sentence Transformers",
      "SQLite",
    ],
  },
  {
    name: "Infrastructure & Deployment",
    items: [
      "Docker",
      "Kafka",
      "Streamlit",
      "Render",
      "HuggingFace Spaces",
      "Git / GitHub",
    ],
  },
];
