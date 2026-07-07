export const personal = {
  name: "Tanmay Hatkar",
  title: "ML Engineer & Team Lead",
  location: "Toronto, ON",
  email: "tanmay.hats@gmail.com",
  phone: "+1 (807) 356-4863",
  linkedin: "https://www.linkedin.com/in/tanmay-hatkar-82180a190/",
  github: "https://github.com/Tanmay-Hatkar",
  tagline:
    "Building LLM-powered applications, autonomous AI agents, and production ML systems — from dataset strategy and fine-tuning to cloud deployment.",
  summary:
    "ML Engineer and Team Lead with experience building and leading development of LLM-powered applications, autonomous AI agents, and production ML systems. Hands-on across the full stack from dataset strategy and model fine-tuning to cloud deployment on GCP. Published researcher (ICMVA 2025) with a track record of picking up new domains quickly.",
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Machine Learning Engineer - Team Lead",
    company: "VoSyn Technologies",
    location: "Toronto, ON",
    start: "May 2026",
    end: "Present",
    bullets: [
      "Lead R&D for Supernova pod building multilingual translation models (English, Cantonese, Mandarin), directing sprint planning and technical roadmap across dataset sourcing, model evaluation, and fine-tuning strategy.",
      "Designed end-to-end research architecture and knowledge map for production localization pipeline integrating SFT, RL, and LLM-as-a-Judge evaluation framework.",
      "Identified critical Cantonese data gap, most available datasets are Mandarin in Traditional script, directly reforming the team's data strategy and fine-tuning approach.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "VoSyn Technologies",
    location: "Toronto, ON",
    start: "Aug 2025",
    end: "May 2026",
    bullets: [
      "Built LLM-powered data ingestion agent achieving 156x speedup (30 min → 10 sec) with 99% success rate through autonomous ETL pipeline execution and three-tier validation logic.",
      "Fine-tuned Qwen3-8B for English-Chinese translation using QLoRA (4-bit quantization), achieving BLEU 47.86 and COMET 83.30 while reducing GPU memory requirements from 32GB to 6-8GB; integrated data quality filters using LaBSE embeddings.",
      "Architected production ML infrastructure on Google Cloud Platform using Docker containerization and Flask REST APIs, establishing scalable deployment pipelines for LLM agents and TTS models.",
    ],
  },
  {
    role: "Research Assistant - AI Engineer",
    company: "Lakehead University",
    location: "Thunder Bay, ON",
    start: "Mar 2025",
    end: "Apr 2025",
    bullets: [
      "Developed computer vision system for autonomous vehicles published at ICMVA 2025, achieving 82.4% accuracy with transformer-based architecture tested across UK, Germany, and India datasets.",
      "Reduced model deployment time by 61% through transfer learning techniques while improving detection of safety-critical scenarios (pedestrians, cyclists) by 72%.",
      "Implemented explainability features (confidence heatmaps, Grad-CAM) to visualize model uncertainty and build trust in AI-driven autonomous driving systems.",
    ],
  },
  {
    role: "Software Engineer",
    company: "BusinessNext",
    location: "Mumbai, India",
    start: "Nov 2022",
    end: "May 2023",
    bullets: [
      "Maintained production systems for HDFC Bank (68M+ customers), resolving incidents within SLA during peak hours while ensuring 99.9% uptime for critical banking operations.",
      "Reduced database resource usage by 35% through query optimization and strategic indexing, improving system capacity without additional infrastructure investment.",
      "Decreased troubleshooting time by 85% through custom logging and monitoring solutions, enabling faster incident resolution.",
    ],
  },
];

export type Project = {
  name: string;
  stack: string[];
  bullets: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Overwatch — Conversational AI Productivity Assistant",
    stack: ["Python", "FastAPI", "React", "Capacitor", "OpenAI", "Groq", "Ollama", "Google OAuth"],
    bullets: [
      "Built a conversational AI assistant that turns natural language into structured actions (task CRUD, scheduling) via a single-call intent-classification pipeline returning schema-validated JSON, backed by a multi-provider LLM fallback chain (OpenAI → Groq → Ollama).",
      "Grounded responses by injecting live Google Calendar events and pending tasks into prompts (RAG-lite, no vector store), with Pydantic validation and defensive parsing as guardrails against hallucination.",
      "Shipped a deployed, multi-tenant app (Google OAuth/JWT, SQLite, Railway + Vercel) and a native Android build from one React codebase via Capacitor — adding voice I/O, on-device reminders, and a proactive briefing agent.",
    ],
  },
  {
    name: "AI Job Application Assistant",
    stack: ["React", "TypeScript", "Python", "FastAPI", "LangChain", "FAISS"],
    bullets: [
      "Developed a RAG-powered web application with a React frontend and FastAPI backend orchestrating an LLM to generate job-specific materials, reducing preparation time from 45 minutes to under 2 minutes per application.",
      "Engineered a semantic search pipeline using FAISS vector database and sentence-transformers achieving 65-80% match accuracy, retrieving relevant context from resume embeddings for LLM content generation.",
      "Deployed a full-stack application with REST API architecture, PostgreSQL database, Docker containerization, and LangChain for LLM orchestration and prompt management.",
    ],
  },
];

export type Publication = {
  title: string;
  venue: string;
  description: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    title: "Urban Scene Segmentation and Cross-Dataset Transfer Learning using SegFormer",
    venue: "ICMVA 2025",
    description:
      "Published research advancing autonomous vehicle perception with 82.4% accuracy and systematic analysis of model scaling and cross-dataset transfer techniques for commercial AV deployment.",
  },
  {
    title: "Explainable Transfer Learning of Cross-Dataset in Visual Scene Segmentation",
    venue: "Preprints 2025",
    description:
      "Extended research with explainability techniques (confidence heatmaps, Grad-CAM) to enhance interpretability in AI decision systems.",
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "Master of Science, Computer Science",
    school: "Lakehead University",
    location: "Thunder Bay, ON",
    start: "Sep 2023",
    end: "May 2025",
    detail: "Specialized in ML and AI with focus on computer vision, deep learning, and transfer learning. CGPA: 90.33%.",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: [
      "LLMs (Llama, GPT)",
      "LangChain",
      "RAG",
      "FAISS",
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "Transformers",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    category: "Backend / Infrastructure",
    skills: ["Python (4+ yrs)", "FastAPI", "Flask", "Docker", "PostgreSQL", "GCP", "Git", "CI/CD"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "shadcn/ui", "HTML/CSS", "REST API Integration"],
  },
  {
    category: "Data & Tools",
    skills: ["Vector Databases", "Embeddings", "NumPy", "Pandas", "Scikit-Learn", "Ollama", "BeautifulSoup"],
  },
];
