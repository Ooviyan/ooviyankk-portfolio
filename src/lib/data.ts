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
  name: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  website?: string;
  award?: string;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    name: "ClearDoc",
    role: "Team Project — Sathyabama",
    period: "2026",
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
  },
  {
    name: "CampusBites",
    role: "Frontend & Database Developer",
    period: "2026",
    thumbnail: "/projects/campusbites.svg",
    description:
      "A smart canteen ordering system for college campuses — student ordering, a real-time kitchen display, and an admin dashboard, all kept in sync live.",
    highlights: [
      "Built the student ordering portal and structured the MongoDB data layer",
      "Real-time kitchen display (KDS) with live order tokens via Socket.IO — no page refreshes",
      "Razorpay/UPI checkout and admin controls for menu and canteen status",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Socket.IO"],
    link: "https://github.com/Ooviyan/CampusBites",
  },
  {
    name: "Event Management System",
    role: "Team RAPID TURTLES — Sathyabama",
    period: "2025",
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
  },
];

export const education = {
  school: "Sathyabama Institute of Science & Technology, Chennai",
  degree: "B.E., Computer Science",
  cgpa: "CGPA: 9.18",
  status: "Current Student",
};
