import {
  Github,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Phone,
} from "lucide-react";

export const navItems = ["About", "Skills", "Projects", "Contact"];

export const skills = {
  frontend: [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "Tailwind", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Beginner" },
  ],
  backend: [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
  ],
};

export const projects = [
  {
    name: "Book Haven",
    description: "Full-stack book management platform with auth & CRUD.",
    image: "https://i.ibb.co.com/zTdwrCJq/Screenshot-2025-11-20-001125.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
    live: "https://ph-tenth-assignment-7c08c.web.app/",
    client: "https://github.com/mahmudulkarim420/ph-tenth-assignment.git",
    server: "https://github.com/mahmudulkarim420/ph-tenth-assignment-server.git",
  },
  {
    name: "Skill Swap",
    description: "Book management with real-time updates.",
    image: "https://i.ibb.co.com/pjwcMzs8/Screenshot-2025-12-16-151354.png",
    technologies: ["React", "Tailwind CSS", "Firebase Auth", "Firebase Firestore", "Framer Motion"],
    live: "https://ph-ninth-assignment-da6b4.web.app/",
    client: "https://github.com/mahmudulkarim420/ph-ninth-assignment.git",
    server: "",
  },
  {
    name: "HERO IO",
    description: "Workflow management with real-time sync.",
    image: "https://i.ibb.co.com/HDS0Rjgx/Screenshot-2025-12-16-152358.png",
    technologies: ["React", "Tailwind CSS", "Firebase Auth", "Swiper", "React Hot Toast", "AOS"]
,
    live: "https://hero-io-peoject-0533a7.netlify.app/",
    client: "https://github.com/mahmudulkarim420/ph-eighth-assignment.git",
    server: "",
  },
];


export const socials = [
  { name: "GitHub", icon: Github, dark: true, link: "https://github.com/mahmudulkarim420" },
  { name: "Twitter", icon: Twitter, dark: false, link: "https://x.com/home" },
  { name: "Facebook", icon: Facebook, dark: false, link: "https://facebook.com/prem.hassan.784077" },
  { name: "Instagram", icon: Instagram, dark: false, link: "#" },
  { name: "LinkedIn", icon: Linkedin, dark: true, link: "#" },
  { name: "WhatsApp", icon: Phone, dark: true, link: "https://wa.me/8801805111544" },
];
