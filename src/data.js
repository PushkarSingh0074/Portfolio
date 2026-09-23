import visionShot from "./assets/visionassist.png";
import harveyShot from "./assets/harvey.png";
import genesisShot from "./assets/genesis.png";

// ---------------------------------------------------------------------------
// All portfolio content lives in this file. Empty links are hidden
// automatically, so the site never shows a broken button.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Pushkar Singh",
  role: "Data Scientist · Machine Learning Engineer",
  headline: "Building machine learning systems that run in the real world.",
  credential: "B.Tech, Computer Science & Data Science · Galgotias College of Engineering & Technology · Class of 2027",
  summary:
    "I build end-to-end machine learning systems — from choosing and training models to GPU-aware serving and the interface people actually use. My work spans computer vision, speech and LLM applications, shipped as working software rather than notebooks.",
  availability:
    "Open to Data Science, ML Engineering and Applied AI roles — internships now, full-time from 2027.",
  email: "hks20071979@gmail.com",
  github: "https://github.com/PushkarSingh0074",
  linkedin: "", // TODO: e.g. "https://www.linkedin.com/in/your-handle"
  resume: "Pushkar_Singh_Resume.pdf",
};

export const metrics = [
  { value: "3", label: "End-to-end AI systems built and deployed" },
  { value: "6", label: "Models orchestrated in one vision pipeline" },
  { value: "63k+", label: "Lines of Python in a local AI agent" },
  { value: "3,700+", label: "Automated tests across the agent codebase" },
];

export const projects = [
  {
    id: "visionassist",
    logo: "vision",
    title: "VisionAssist AI",
    tagline: "Multi-model computer vision platform that sees, reads and speaks.",
    domain: "Computer Vision · Deep Learning · Speech",
    year: "2026",
    accent: "#6366f1",
    summary:
      "Routes every image through a trained gatekeeper model to the right specialist — OCR with a custom BiLSTM classifier, a vision-language model or object detection — then fuses the results into one spoken answer. GPU-served on Cloud Run.",
    keyStack: ["PyTorch", "Florence-2", "YOLOv8", "PaddleOCR", "FastAPI", "Cloud Run GPU"],
    image: visionShot,
    imageAlt: "VisionAssist AI dashboard with image workspace and model status",
    problem:
      "Vision tools are usually single-purpose — a scanner only reads text, a detector only draws boxes. A user who doesn't know what kind of image they have must pick the right tool first, which is a real barrier for visually impaired or hands-busy users.",
    approach: [
      "Trained a Universal Gatekeeper classifier that routes every image (document, natural scene, screenshot, chart, medical) before any heavy model runs.",
      "Document route: PaddleOCR text extraction, layout analysis and a custom BiLSTM + attention classifier for document type (invoice, resume, ID, medical).",
      "Visual route: Florence-2 vision-language model for captions and scene description, with YOLOv8 object detection summarised in natural language.",
      "A fusion engine merges all model outputs into one coherent result, narrated with Piper neural TTS in a fully voice-driven UI.",
    ],
    engineering: [
      "Hardware-adaptive model container detects VRAM at startup — lazy-loads and evicts models on <6 GB GPUs, keeps everything resident on an NVIDIA L4.",
      "FP16 autocast and TF32 on CUDA; warm-up latency regression traced and fixed.",
      "GPU backend on Google Cloud Run with readiness health checks; model weights versioned with Git LFS.",
    ],
    pipeline: ["Image", "Gatekeeper", "OCR · BiLSTM | Florence-2 | YOLOv8", "Fusion engine", "Neural TTS"],
    stack: {
      Models: ["Florence-2", "YOLOv8", "PaddleOCR", "BiLSTM + Attention", "Piper TTS"],
      "ML / Compute": ["PyTorch", "PaddlePaddle", "CUDA"],
      Backend: ["Python", "FastAPI"],
      Frontend: ["React", "TypeScript"],
      Infra: ["Cloud Run (L4 GPU)", "Vercel", "Git LFS"],
    },
    links: {
      live: "",
      code: "",
      note: "Private repository · walkthrough available on request",
    },
  },
  {
    id: "harvey",
    logo: "harvey",
    title: "Harvey",
    tagline: "Local-first personal AI agent for Windows, controlled by voice.",
    domain: "AI Agents · Speech · On-device LLM",
    year: "2026",
    accent: "#d4a017",
    summary:
      "A fully on-device voice assistant: wake word, speech recognition, speaker verification and a local LLM, with every action passing through a deterministic planner and security gate. 63k+ lines of Python, 3,700+ tests.",
    keyStack: ["Qwen3 · llama.cpp", "faster-whisper", "Kokoro TTS", "Silero VAD", "ECAPA", "Playwright"],
    image: harveyShot,
    imageAlt: "Harvey control center showing agent status and lifecycle controls",
    problem:
      "Cloud assistants send everything off-device and often let the language model act directly on the system — slow, private-data-hungry and hard to trust with real actions on a personal computer.",
    approach: [
      "Deterministic-first architecture: Reasoner → Planner → Capability Resolver → Security Authority → Execution Guard → Tool Registry. Every command, voice or text, goes through the same path.",
      "A local LLM (Qwen3-1.7B on llama.cpp) is a subordinate conversational fallback — it can never bypass planning or security layers.",
      "Full on-device voice stack: wake word, Silero VAD, faster-whisper speech-to-text and Kokoro neural TTS with barge-in.",
      "Speaker verification with ECAPA embeddings so only the owner's voice can issue commands.",
    ],
    engineering: [
      "63k+ lines of Python with 3,700+ automated tests across 370+ test files.",
      "Tools for app control, Playwright browser automation, Gmail and Google Calendar APIs, system audio and SQLite-backed memory.",
      "Desktop widget and 16-section control center; handles Windows sleep, resume and shutdown events safely.",
    ],
    pipeline: ["Wake word", "VAD", "Whisper STT", "Speaker check", "Reason · Plan", "Security gate", "Tools", "TTS"],
    stack: {
      Models: ["Qwen3-1.7B", "faster-whisper", "Kokoro TTS", "Silero VAD", "ECAPA"],
      "ML / Audio": ["llama.cpp", "ONNX Runtime", "librosa", "CUDA"],
      Integrations: ["Playwright", "Gmail API", "Calendar API"],
      Core: ["Python 3.11", "SQLite", "Tkinter", "pytest"],
    },
    links: {
      live: "",
      code: "",
      note: "Private repository · walkthrough available on request",
    },
  },
  {
    id: "genesis",
    logo: "genesis",
    title: "Genesis Prep AI",
    tagline: "LLM-powered interview practice with structured performance scoring.",
    domain: "LLM Applications · Full-stack",
    year: "2026",
    accent: "#06b6d4",
    summary:
      "Generates company- and level-specific interview questions with Gemini, scores voice or text answers against a structured rubric, and tracks readiness over time on a personal dashboard.",
    keyStack: ["Gemini 2.5 Flash", "Web Speech API", "React", "Node.js", "MongoDB"],
    image: genesisShot,
    imageAlt: "Genesis Prep AI interview dashboard",
    problem:
      "Candidates rarely get realistic interview practice with specific, measurable feedback — generic question banks don't adapt to the company, role or level they are preparing for.",
    approach: [
      "Gemini 2.5 Flash generates company-specific questions across technical and mixed tracks at multiple difficulty levels.",
      "Answers are evaluated against a structured rubric — technical depth, communication, confidence, problem solving — returning strengths, gaps and a hiring verdict.",
      "Voice interview mode using the Web Speech API with live transcription, alongside a text mode.",
      "Dashboard tracks average and best score, practice streak and an interview-readiness score over time.",
    ],
    engineering: [
      "REST API on Node.js and Express with JWT sessions and bcrypt password hashing.",
      "Interview sessions and reports persisted in MongoDB Atlas.",
      "Deployed on Render as separate web service and static site.",
    ],
    pipeline: ["Role + company", "Question generation", "Voice / text answer", "LLM evaluation", "Scored report", "Dashboard"],
    stack: {
      LLM: ["Gemini 2.5 Flash", "Prompt design", "Structured output"],
      Backend: ["Node.js", "Express", "MongoDB Atlas", "JWT"],
      Frontend: ["React", "Vite", "Web Speech API"],
      Infra: ["Render"],
    },
    links: {
      live: "https://genesis-prep-ai-2.onrender.com",
      code: "https://github.com/PushkarSingh0074/genesis-prep-ai",
    },
  },
];

export const skills = [
  {
    group: "Machine Learning",
    items: ["PyTorch", "Deep learning", "Sequence models (BiLSTM, attention)", "Transformers", "Model evaluation"],
  },
  {
    group: "Computer Vision",
    items: ["Object detection (YOLOv8)", "Vision-language models", "OCR & document AI", "Image classification"],
  },
  {
    group: "Speech & LLMs",
    items: ["Speech-to-text (Whisper)", "Neural TTS", "Speaker verification", "Local LLMs (llama.cpp)", "Gemini API", "Prompt design"],
  },
  {
    group: "Languages & Data",
    items: ["Python", "C", "Dataset preprocessing & augmentation", "librosa (audio features)", "SQLite", "MongoDB", "PostgreSQL"],
  },
  {
    group: "ML Engineering",
    items: ["FastAPI", "REST APIs", "CUDA / GPU memory management", "Kaggle GPU training", "Google Cloud Run", "Git, Git LFS & Linux", "pytest"],
  },
  {
    group: "Software",
    items: ["TypeScript", "JavaScript", "React", "Node.js", "Express"],
  },
];

export const education = {
  degree: "Bachelor of Technology — Computer Science & Data Science",
  school: "Galgotias College of Engineering & Technology",
  period: "2023 — 2027",
  status: "Final (fourth) year · Graduating 2027",
  cgpa: "6.8 / 10",
  showCgpa: false, // set to true to display CGPA on the site
  alongside: [
    "Preparing for GATE CSE to strengthen core computer science fundamentals",
    "Designing and training CNN models on Kaggle GPU infrastructure",
    "Self-directed focus on computer vision, deep learning and ML systems",
  ],
  coursework: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Structures & Algorithms",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
  ],
};
