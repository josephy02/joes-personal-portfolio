// Site content. Edit here to update experience, projects, skills, or posts.

export const links = {
  email: "josephyared0@gmail.com",
  phone: "206-218-4825",
  github: "https://github.com/josephy02",
  linkedin: "https://linkedin.com/in/josephyared",
  substack: "https://josephyared.substack.com",
}

export const about =
  "I'm an AI Engineer at T-Mobile, building direct-to-consumer AI experiences within the IntentCX team. My work centers on creating intelligent, production-ready systems that make every customer interaction more natural, personal, and efficient. I'm driven by the belief that artificial intelligence can meaningfully enhance how people connect with technology. From designing conversational agents to deploying multimodal models at scale, I focus on turning cutting-edge AI into intuitive, impactful products that truly serve people. My goal is not just to push the boundaries of what's possible—but to make those innovations accessible, reliable, and human-centered."

export const experiences = [
  {
    title: "AI Engineer",
    company: "T-Mobile",
    location: "Bellevue, WA",
    period: "Sept 2025 – Present",
    description: [
      "Bridge AI and CX → Designing, training, and optimizing AI/LLM systems (e.g., intent detection, agentic workflows) that directly improve customer experience interactions at scale",
      "Operationalizing AI → Owning the lifecycle from prototyping to production deployment: benchmarking, evaluation, monitoring, and iteration in real-world CX systems",
      "Cross-functional collaboration → Partnering with data scientists, engineers, and product managers to integrate AI solutions into existing platforms, ensuring seamless user experiences and measurable business impact",
    ],
    skills: ["Python", "AI Agents", "RAG"],
  },
  {
    title: "AI/ML Engineer Intern",
    company: "SK hynix",
    location: "San Jose, CA",
    period: "May 2025 – Sept 2025",
    description: [
      "Developing a cross-platform GPU benchmarking suite to evaluate ML training and inference performance across NVIDIA CUDA and Apple M-series devices, measuring metrics like FLOPS, memory bandwidth, and latency",
      "Engineered a reproducible pipeline with statistical rigor, generating detailed Markdown reports and storing performance metrics in a historical SQLite database for long-term trend analysis",
      "Identified hardware bottlenecks through tests on memory fragmentation, framework overhead, and latency, enabling actionable insights for optimizing ML infrastructure efficiency",
    ],
    skills: ["C++", "Python", "SQLite", "LLMs", "AI Inference", "R&D"],
  },
  {
    title: "Founder",
    company: "Stealth Startup",
    location: "Seattle, WA",
    period: "Oct 2024 – May 2025",
    description: [
      "Architected and deployed autonomous AI agents using LangChain, achieving a 40% improvement in task completion rates and directly supporting customer-driven AI research initiatives",
      "Spearheaded research initiatives bridging cutting-edge model development with robust, open-source infrastructure improvements",
      "Designed scalable agent memory systems using vector databases and implemented robust evaluation frameworks that reduced hallucination rates by 85%, ensuring responsible and predictable LLM deployments",
    ],
    skills: ["LangChain", "Vector Databases", "AI Agents", "LLMs"],
  },
  {
    title: "Computer Vision Researcher Engineer",
    company: "University of Washington",
    location: "Seattle, WA",
    period: "Jan 2024 – Dec 2024",
    description: [
      "Built and optimized an end-to-end computer vision pipeline for image segmentation and classification, processing 5000+ images with 99% accuracy",
      "Implemented post-training fine-tuning strategies that reduced segmentation error by 30% and improved model robustness",
      "Engineered scalable data pipelines, cutting image retrieval latency by 40% and boosting inference speed by 25%",
      "Developed reinforcement learning-based feedback loops, increasing segmentation consistency by 35% through iterative model updates",
    ],
    skills: ["Computer Vision", "Image Segmentation", "PyTorch", "Data Pipelines"],
  },
]

export const skills = [
  { name: "Programming Languages", technologies: ["Python", "TypeScript", "Java", "Go", "C++"] },
  { name: "Machine Learning", technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Hugging Face"] },
  {
    name: "Computer Vision",
    technologies: ["OpenCV", "YOLO", "Vision Language Models", "Image Segmentation", "Object Detection"],
  },
  { name: "AI & LLMs", technologies: ["LangChain", "LlamaIndex", "OpenAI API", "Prompt Engineering", "RAG"] },
  { name: "Data & Databases", technologies: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Vector DBs"] },
  { name: "DevOps & Infrastructure", technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"] },
]

export const projects = [
  {
    title: "LoRA Edge Vision: Optimized AI Image Generation for Edge Devices",
    description:
      "LoRA Edge Vision fine-tunes Stable Diffusion for aerial imagery on edge devices, reducing model size and inference time without sacrificing quality.",
    longDescription:
      "LoRA Edge Vision optimizes Stable Diffusion models for edge deployment using Low-Rank Adaptation for efficient fine-tuning on aerial imagery. The framework includes complete data preprocessing, model training, and ONNX conversion, significantly reducing computational requirements while maintaining image quality. Comprehensive benchmarking confirms substantial performance gains for resource-constrained environments.",
    image: "/images/lora.jpg",
    tags: ["Python", "PyTorch", "ONNX", "Diffusers", "PEFT", "Detectron2"],
    links: {
      demo: "https://github.com/josephy02/lora-edge-vision",
      github: "https://github.com/josephy02/lora-edge-vision",
    },
  },
  {
    title: "A Customizable End-to-End Computer Vision Pipeline for Object Detection & Segmentation",
    description:
      "A customizable computer vision pipeline built with Detectron2 for object detection and instance segmentation tasks, with optimized deployment capabilities.",
    longDescription:
      "Developed a modular infrastructure system to support training of 3D multiple object detection and segmentation models using PyTorch and Detectron2. The system includes data preprocessing pipelines, model training workflows, and containerized deployment with Docker and Kubernetes orchestration. Features include automated dataset preparation, hyperparameter optimization, model evaluation tools, and export capabilities for production environments. The architecture supports various backbone networks and is optimized for both research experimentation and industrial applications.",
    image: "/images/d2.jpg",
    tags: ["Python", "PyTorch", "Docker", "Detectron2"],
    links: {
      demo: "https://docs.google.com/presentation/d/1CwUDI6y-Z6E5PME46U4sSF9qtclZ6m3l/edit?usp=sharing&ouid=115360730949705164823&rtpof=true&sd=true",
      github: "https://github.com/josephy02/Detectron2-Sample",
    },
  },
  {
    title: "Real-Time Sentiment Analysis Dashboard",
    description: "Sentiment analysis microservices to process up to 1,000 social media posts in real time.",
    longDescription:
      "SpectraNLP is a modular sentiment analysis platform that collects text data from Flickr comments, New York Times articles, and Reddit posts to analyze public sentiment on topics like the Israel-Palestine conflict. Using VADER sentiment analysis with a custom lexicon, it processes and visualizes sentiment distribution, trends over time, and comparative analyses through an interactive Streamlit dashboard",
    image: "/images/sentiment-analysis.jpg",
    tags: ["Python", "REST APIs", "Streamlit", "NLTK", "NLP"],
    links: {
      demo: "https://spectranlp.streamlit.app/",
      github: "https://github.com/josephy02/SpectraNLP",
    },
  },
  {
    title: "AWS Support Ticket Analytics Dashboard",
    description: "A DE project that processes and visualizes AWS support ticket data using PySpark and Streamlit.",
    longDescription:
      "Built an end-to-end analytics dashboard for AWS support ticket data. The system features an ETL pipeline for processing ticket data, real-time analytics visualizations, SLA monitoring and compliance tracking, and performance metrics visualization. The tech stack includes PySpark for data processing, Streamlit for interactive visualization, Pandas for data manipulation, and Plotly for interactive charts. This solution enables support teams to monitor ticket resolution performance, track SLA compliance, and identify trends in customer issues to improve service quality.",
    image: "/images/aws2.jpg",
    tags: ["Python", "PySpark", "Pandas", "Plotly", "Streamlit"],
    links: {
      demo: "https://csanalytics-aws-support-metrics.streamlit.app/",
      github: "https://github.com/josephy02/CSAnalytics",
    },
  },
]

export const posts = [
  {
    title: "The Weight of Becoming",
    subtitle: "Notes on suffering, purpose, faith, love, and the quiet war within yourself.",
    date: "May 2026",
    href: `${links.substack}/p/the-weight-of-becoming`,
  },
]
