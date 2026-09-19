export const profile = {
  name: "Ooviyan KK",
  title: "Computer Science Student & AI/ML Enthusiast",
  location: "Chennai, Tamil Nadu, India",
  email: "ooviyan.sist@gmail.com",
  phone: "+91 7812857077",
  github: "https://github.com/Ooviyan",
  linkedin: "https://www.linkedin.com/in/ooviyan/",
  blurb:
    "CS student at Sathyabama Institute of Science & Technology, building AI-powered products and going deep on machine learning — most recently a legal-document simplifier that placed 2nd Runner-Up at a campus hackathon.",
  bio: [
    "I'm a computer science student who likes shipping things end to end — frontend, backend, and the data layer in between. Most of what I build comes out of hackathons and class projects, but I try to take them past the demo stage: real auth, real databases, real edge cases.",
    "Lately I've been drawn to applying LLMs to genuinely annoying problems, like making legal paperwork readable. Outside of that, I've picked up bits of data science, AI agent tooling, and a fair amount of late-night debugging.",
    "I'm currently seeking AI/ML internships to build applied research experience, working toward an M.Sc. in AI/ML at a German university by 2028.",
  ],
};

export const interests = ["AI/ML Research", "Generative AI", "Open-source Contribution", "Investing"];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
export const techLogos = [
  { id: "python", description: "Python", image: `${DEVICON}/python/python-original.svg` },
  { id: "javascript", description: "JavaScript", image: `${DEVICON}/javascript/javascript-original.svg` },
  { id: "typescript", description: "TypeScript", image: `${DEVICON}/typescript/typescript-original.svg` },
  { id: "java", description: "Java", image: `${DEVICON}/java/java-original.svg` },
  { id: "react", description: "React", image: `${DEVICON}/react/react-original.svg` },
  { id: "nextjs", description: "Next.js", image: `${DEVICON}/nextjs/nextjs-original.svg` },
  { id: "nodejs", description: "Node.js", image: `${DEVICON}/nodejs/nodejs-original.svg` },
  { id: "tailwindcss", description: "Tailwind CSS", image: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { id: "mongodb", description: "MongoDB", image: `${DEVICON}/mongodb/mongodb-original.svg` },
  { id: "mysql", description: "MySQL", image: `${DEVICON}/mysql/mysql-original.svg` },
  { id: "git", description: "Git", image: `${DEVICON}/git/git-original.svg` },
];

export const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C", "PHP", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"] },
  { category: "Backend & Data", items: ["Node.js / Express", "MongoDB", "MySQL", "Streamlit"] },
  { category: "AI & Data Science", items: ["Gemini API / LLM integration", "NumPy", "Pandas", "OCR (Tesseract)", "Data Science (NPTEL certified)"] },
  { category: "Concepts & Tools", items: ["DSA", "OOP", "Git & GitHub"] },
  { category: "Soft Skills", items: ["Problem Solving", "Teamwork", "Communication", "Time Management"] },
];

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  website?: string;
  award?: string;
  thumbnail: string;
  problem: string;
  solution: string;
  architecture: string[];
  contribution: string;
  challenges: string[];
  learnings: string[];
  screenshots?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "cleardoc",
    name: "ClearDoc",
    role: "Team Project — Sathyabama",
    period: "2026",
    status: "Completed — Hackathon Project",
    thumbnail: "/projects/cleardoc.svg",
    description:
      "An AI tool that translates dense legal documents into plain English and Tamil, flags risky clauses before you sign, and checks agreements against Indian law.",
    highlights: [
      "OCR + PDF pipeline extracts text from scanned and native documents",
      "Modular rule registry — new document types (rental, employment, NDA) plug in without touching core logic",
      "Gemini-powered summarization, clause risk-flagging, and click-to-explain chat",
    ],
    tech: ["Python", "Streamlit", "Gemini API", "Tesseract OCR"],
    link: "https://github.com/Ooviyan/ClearDoc",
    award: "2nd Runner-Up — ZeroX: Hack the Planet Hackathon",
    problem:
      "People sign rental agreements, employment contracts, and NDAs without understanding the dense legal language inside them — and risky clauses go unnoticed until it's too late.",
    solution:
      "ClearDoc extracts text from scanned or native PDFs via OCR, auto-detects the document type, runs it through a modular rule registry that flags clause-specific risks, and uses Gemini to summarize the document and answer follow-up questions in plain English and Tamil — before the person signs anything.",
    architecture: [
      "app.py — Streamlit UI: upload, results display, click-to-explain chat",
      "pipeline.py — orchestrates the flow: detect document type → extract facts → run rules → summarize",
      "doc_types.py — the modular rule registry, one block per document type (rental, employment, NDA)",
      "extraction.py — PDF/OCR text extraction, kept in-memory only",
      "llm_client.py — the single point where the app talks to Gemini, so the rest of the app stays provider-agnostic",
    ],
    contribution:
      "Team project built for a campus hackathon — worked on the extraction pipeline and the plug-in style rule-registry design that lets a new document type (rental, employment, NDA, etc.) be added without touching the core pipeline logic.",
    challenges: [
      "Extraction accuracy depends on document clarity — heavily degraded scans can confuse auto-detection and need manual document-type selection as a fallback.",
      "The rule sets encode specific, known checks — they're not a substitute for legal advice, so the app says so visibly in the UI rather than overstating what it can catch.",
    ],
    learnings: [
      "Designing a rule registry as a plug-in system, so new document types are additive instead of requiring changes to shared pipeline code.",
      "Isolating every LLM call behind one module (llm_client.py) so the rest of the app doesn't care which model is behind it.",
    ],
  },
  {
    slug: "campusbites",
    name: "CampusBites",
    role: "Frontend & Database Developer",
    period: "2026",
    status: "Completed — Team Project",
    thumbnail: "/projects/campusbites.svg",
    description:
      "A smart canteen ordering system for college campuses — student ordering, a real-time kitchen display, and an admin dashboard, all kept in sync live.",
    highlights: [
      "Built the student ordering portal and structured the MongoDB data layer",
      "Real-time kitchen display (KDS) with live order tokens via Socket.IO — no page refreshes",
      "Razorpay/UPI checkout and admin controls for menu and canteen status",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay"],
    link: "https://github.com/Ooviyan/CampusBites",
    problem:
      "Campus canteens run on paper tokens and guesswork — students queue blind, kitchens get slammed in bursts, and admins have no visibility into what's actually selling.",
    solution:
      "One live system replaces all three: students order and track from their phone, the kitchen sees tickets appear the instant they're placed, and admins control the entire menu and canteen status from a dashboard — no page refresh, anywhere.",
    architecture: [
      "Next.js frontend talks to an Express REST API for every write — orders are persisted first, before anything else happens",
      "Socket.IO sits on top as a pure broadcast layer (new order / status update / canteen status) to the kitchen and student views",
      "Because writes go through REST first, a client that misses a socket event still sees the correct state on its next fetch — the real-time layer can never leave data inconsistent",
    ],
    contribution:
      "Built the student ordering portal (the Next.js frontend students place and track orders from) and structured the MongoDB data layer the rest of the system reads and writes against, as part of a small team.",
    challenges: [
      "The team was upfront in the project docs about what's demo-grade vs. production-ready: passwords are stored in plain text (bcrypt would be the fix), backend routes have no auth middleware yet, and payments run in mock mode without real Razorpay keys.",
    ],
    learnings: [
      "Structuring a MongoDB schema for a live order-status system so a WebSocket broadcast layer can sit on top of REST writes without ever becoming the source of truth itself.",
    ],
  },
  {
    slug: "event-management",
    name: "Event Management System",
    role: "Team RAPID TURTLES — Sathyabama",
    period: "2025",
    status: "Completed — Team Project",
    thumbnail: "/projects/event-management.svg",
    description:
      "A web-based event management system for the CS department — staff create and approve events, students register and track participation, all with automated email notifications.",
    highlights: [
      "Role-based dashboards for staff and students with secure session handling",
      "Multi-layered architecture: PHP backend, MySQL schema, separate Spring Boot email microservice",
      "Event creation, brochure uploads, and an approval/tracking workflow",
    ],
    tech: ["HTML/CSS/JS", "PHP", "MySQL", "Spring Boot"],
    link: "https://github.com/Ooviyan/EventManagementSystem",
    problem:
      "Coordinating department events by hand — staff announcing events informally, students registering through messaging apps, no real approval step or capacity tracking — left no record of who approved what or who was actually registered.",
    solution:
      "A role-based platform for the CS department: staff create events, admins approve or reject them, and students register against a capacity limit that closes registration automatically once a event is full — with confirmation emails sent through a dedicated microservice.",
    architecture: [
      "PHP backend (mysqli, prepared statements throughout) serves Admin/, Staff/, and Student/ dashboards against a MySQL/MariaDB schema",
      "A separate Java + Spring Boot microservice (java-email-service) handles registration-confirmation emails, decoupled from the main PHP app",
      "Login/Register handles auth with hashed passwords (password_hash/password_verify)",
    ],
    contribution:
      "Built as part of Team RAPID TURTLES for the CS department — contributed to the role-based dashboards and the PHP/MySQL backend, including the prepared-statement queries and hashed-password auth used throughout.",
    challenges: [
      "Keeping a multi-layered stack in sync — a PHP web app and a separate Spring Boot microservice in a different language runtime — required a clear API contract for triggering registration emails across that boundary.",
    ],
    learnings: [
      "Using prepared statements and hashed passwords everywhere by default, even in a student project, to avoid classic PHP pitfalls like SQL injection and plaintext credentials.",
    ],
    screenshots: [
      { src: "/projects/event-management/landing.jpg", alt: "Event Management System landing page" },
      { src: "/projects/event-management/login.jpg", alt: "Login page" },
      { src: "/projects/event-management/student-dashboard.jpg", alt: "Student dashboard" },
      { src: "/projects/event-management/staff-dashboard.jpg", alt: "Staff dashboard" },
      { src: "/projects/event-management/admin-dashboard.jpg", alt: "Admin dashboard — event approval workflow" },
    ],
  },
  {
    slug: "modernbuilders",
    name: "ModernBuilders",
    role: "Freelance — Client Project",
    period: "2026",
    status: "In Progress — Client Project",
    thumbnail: "/projects/modernbuilders-hero.png",
    description:
      "A marketing site for MODERN BUILDERS, a 25-year general contracting company — built with Next.js and a headless Sanity CMS so the client can manage their own project and service listings.",
    highlights: [
      "Next.js site backed by a Sanity CMS schema for services, projects, and brochures",
      "Live contact form (Resend) that emails inquiries straight to the client, reply-to preserved",
      "Custom WebGL/shader visual effects for a premium feel",
    ],
    tech: ["Next.js", "TypeScript", "Sanity CMS", "styled-components", "Resend", "OGL (WebGL)"],
    problem:
      "The client, a 25-year general contracting business with 200+ completed projects, had no web presence — no way for prospective clients to see their portfolio or get in touch beyond word of mouth.",
    solution:
      "A Next.js marketing site backed by a headless Sanity CMS, so services and past projects (residential, commercial, industrial) can be added or edited without touching code, plus a working contact form that emails inquiries directly to the client with the sender's address set as reply-to.",
    architecture: [
      "Next.js App Router pages fetch content from Sanity, with typed placeholder data mirroring the exact CMS schema so the site renders fully before any real content is entered",
      "A dynamic /projects/[slug] route renders each portfolio project (residential, commercial, industrial — completed, ongoing, or available)",
      "/api/contact is a server route that calls the Resend API to email new inquiries straight to the client's inbox",
    ],
    contribution:
      "Designed and built the entire site solo as a freelance client project — the Next.js architecture, the Sanity CMS schema, the contact form integration, and the custom visual effects.",
    challenges: [
      "Making the site look fully populated and professional from day one, before the client had entered any real content into the CMS — solved with typed placeholder data that mirrors the Sanity schema exactly, so nothing breaks once real content replaces it.",
    ],
    learnings: [
      "Structuring a headless-CMS schema so a non-technical client can manage their own project portfolio and services without ever touching code.",
    ],
  },
];

export const education = {
  school: "Sathyabama Institute of Science & Technology, Chennai",
  degree: "B.E., Computer Science",
  cgpa: "CGPA: 9.18",
  status: "Current Student",
};
