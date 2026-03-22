export const siteConfig = {
  name: "Shivam",
  title: "Shivam | Software Engineer",
  description:
    "Software Engineer specializing in scalable full-stack architectures and high-performance web applications. Focused on engineering solutions that drive business impact.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shivam.dev",
  links: {
    github: "https://github.com/V8Velocity",
    linkedin: "https://www.linkedin.com/in/shivam-bharti29/",
    email: "shivam825289@gmail.com",
  },
} as const;

// ── Skills ──────────────────────────────────────────────────────────

export type SkillCategory = {
  name: string;
  icon: "code" | "framework" | "database" | "brain";
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "PHP"],
  },
  {
    name: "Frontend & UI",
    icon: "framework",
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    name: "Backend & Systems",
    icon: "database",
    items: ["Node.js", "Express", "Flask", "MySQL", "MongoDB", "WebSocket"],
  },
  {
    name: "Architecture & DevOps",
    icon: "brain",
    items: ["REST APIs", "System Design", "Microservices", "Vercel", "Render"],
  },
];

// ── Experience ──────────────────────────────────────────────────────

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [];

// ── Projects ────────────────────────────────────────────────────────

export type Project = {
  title: string;
  slug: string;
  date: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Envizion - Climate Monitoring Platform",
    slug: "envizion",
    date: "Mar 2026",
    description: "A production-grade climate monitoring platform providing localized forecasting through robust Full Stack microservices.",
    stack: ["React", "Node.js", "Express", "REST APIs", "Vercel", "Render"],
    highlights: [
      "Architected decoupling of monolithic structures into specialized frontend and backend services",
      "Deployed scalable infrastructure across Vercel (Edge network) and Render, achieving 99.9% uptime",
      "Implemented secure cross-origin communication interfaces between distributed environments",
    ],
    liveUrl: "https://auto-climate.vercel.app/",
  },
  {
    title: "Process Monitor",
    slug: "process-monitor",
    date: "Mar 2025",
    description:
      "A high-performance Progressive Web App (PWA) engineering real-time hardware telemetry and bidirectional system control interfaces.",
    stack: ["Python", "Flask", "React", "WebSocket", "PWA"],
    highlights: [
      "Engineered low-latency system polling, streaming CPU/Memory utilization to the client with sub-100ms refresh rates",
      "Architected secure bidirectional REST endpoints enabling authorized remote process management",
      "Developed a robust PWA architecture supporting installable native-like execution and offline resilience",
    ],
    githubUrl: "https://github.com/V8Velocity/process-monitor",
  },
];

// ── Achievements ────────────────────────────────────────────────────

export type Achievement = {
  title: string;
  description: string;
  icon: "star" | "award" | "trophy";
  stars?: number;
};

export const achievements: Achievement[] = [
  {
    title: "HackerRank — 5★ Python Expertise",
    description:
      "Attained top-percentile rating validating advanced proficiency in algorithm optimization, complexity analysis, and Pythonic design patterns.",
    icon: "star",
    stars: 5,
  },
  {
    title: "HackerRank — 5★ C++ Mastery",
    description:
      "Demonstrated rigorous competency in low-level memory management, Standard Template Library (STL) scaling, and competitive performance tuning.",
    icon: "star",
    stars: 5,
  },
  {
    title: "Data Structures & Algorithms Certification",
    description:
      "Completed an intensive programmatic curriculum centered on graph theory, dynamic programming paradigms, and scalable system infrastructure.",
    icon: "award",
  },
];

// ── Education ───────────────────────────────────────────────────────

export type Education = {
  degree: string;
  field: string;
  institution: string;
  cgpa: string;
  status: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    field: "Software Engineering",
    institution: "Lovely Professional University, Punjab",
    cgpa: "7.61",
    status: "Ongoing",
  },
  {
    degree: "Intermediate (12th Grade)",
    field: "Science / Mathematics",
    institution: "Mount Litera Public School, Begusarai",
    cgpa: "88.2%",
    status: "Completed",
  },
  {
    degree: "Matriculation (10th Grade)",
    field: "General Academics",
    institution: "Takshila School, Begusarai",
    cgpa: "93.4%",
    status: "Completed",
  }
];

// ── Certifications ──────────────────────────────────────────────────

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  image?: string;
};

export const certifications: Certification[] = [
  { title: "Computer Communications", issuer: "University of Colorado System", url: "/ComputerCommunication.pdf" },
  { title: "Digital Systems: From Logic Gates to Processors", issuer: "Universitat Autònoma de Barcelona", url: "/Digital%20Systems%20From%20Logic%20Gates%20to%20Processors.pdf" },
  { title: "Introduction to Hardware and Operating Systems", issuer: "IBM", url: "/IntroToHardware.pdf" },
  { title: "Packet Switching Networks and Algorithms", issuer: "University of Colorado System", url: "/PacketSwitchingNetworks.pdf" },
  { title: "TCP/IP and Advanced Topics", issuer: "University of Colorado System", url: "/TCPIP%20and%20advanced%20topics.pdf" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google", url: "/Thebitsandbytesofcomputernetworking.pdf" },
  { title: "Peer-to-Peer Protocols and Local Area Networks", issuer: "University of Colorado System", url: "/PeerToPeer.pdf" },
  { title: "Fundamentals of Network Communication", issuer: "University of Colorado System", url: "/FundamentalsOfNetworkCommunication.pdf" },
  { title: "The Science of Well-Being", issuer: "Yale University", url: "/The%20Science%20Of%20Well%20Being.pdf" },
  { title: "Computer Architecture", issuer: "Princeton University" },
];
