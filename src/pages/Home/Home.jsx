import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import img from "../../assets/img1.png";
import resume from "../../assets/Mahmudul Karim Resume.pdf";
import {
  Github,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const navItems = ["About", "Skills", "Projects", "Contact"];
  const sections = {
    About: aboutRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  const handleNavClick = (item) => {
    setActiveTab(item);
    const ref = sections[item];
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const skills = {
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
      { name: "MongoDB", level: "Beginner" },
    ],
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack shopping platform with cart & payment",
    },
    { name: "Task Management App", description: "Project management with real-time updates" },
    { name: "Weather Dashboard", description: "Weather app with interactive maps" },
  ];

  const socials = [
    { name: "GitHub", icon: Github, dark: true, link: "https://github.com/mahmudulkarim420" },
    { name: "Twitter", icon: Twitter, dark: false, link: "https://x.com/home" },
    {
      name: "Facebook",
      icon: Facebook,
      dark: false,
      link: "https://www.facebook.com/prem.hassan.784077",
    },
    { name: "Instagram", icon: Instagram, dark: false, link: "https://instagram.com/yourusername" },
    { name: "LinkedIn", icon: Linkedin, dark: true, link: "https://linkedin.com/in/yourusername" },
    { name: "WhatsApp", icon: Phone, dark: true, link: "https://wa.me/8801805111544" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-[#0B0D17] text-[#FF6F61]">
      {/* Navbar */}
      <nav className="sticky top-4 z-50 flex justify-center px-4 py-4">
        <div className="bg-[#1C1F3A]/90 backdrop-blur-md rounded-full shadow-lg px-2 py-2 flex gap-1">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavClick(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === item
                  ? "bg-[#FF6F61] text-[#0B0D17] shadow-md"
                  : "text-[#FF6F61]/70 hover:text-[#FF6F61] hover:bg-[#1C1F3A]"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* About Section */}
          <motion.div
            ref={aboutRef}
            className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="lg:col-span-2 bg-[#1C1F3A] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              custom={1}
              variants={cardVariants}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-2 border-[#FF6F61]">
                  <img src={img} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">Mahmudul Karim</h1>
                  <p className="text-lg mb-4 text-[#FF6F61]/80">Frontend Developer</p>
                  <p className="text-[#FF6F61]/60 leading-relaxed max-w-md">
                    Developing modern web solutions with React, Node, and MongoDB. Focused on
                    efficient code, responsive design, and great UX.
                  </p>
                </div>
                <a
                  href={resume}
                  download="Mahmudul_Karim_Resume.pdf"
                  className="inline-flex items-center gap-2 bg-[#FF6F61] text-[#0B0D17] px-6 py-3 rounded-full hover:bg-[#E65B50] transition-colors duration-300 font-medium"
                >
                  Download Resume <Download size={18} />
                </a>
              </div>
            </motion.div>

            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  custom={idx + 2}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    social.dark ? "bg-[#1C1F3A] text-[#FF6F61]" : "bg-[#0B0D17] text-[#FF6F61]"
                  } rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center space-y-3`}
                >
                  <Icon size={32} />
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            ref={skillsRef}
            className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="lg:col-span-3 bg-[#1C1F3A] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              custom={0}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold mb-6">Frontend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.frontend.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-1"
                    custom={idx}
                    variants={cardVariants}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="bg-[#0B0D17] rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          skill.level === "Intermediate"
                            ? "bg-[#FF6F61] w-3/4"
                            : "bg-[#FF6F61]/50 w-1/2"
                        }`}
                      />
                    </div>
                    <span className="text-xs text-[#FF6F61]/60">{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1 bg-[#1C1F3A] text-[#FF6F61] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              custom={skills.backend.length + 1}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold mb-6">Backend Development</h3>
              <div className="space-y-4">
                {skills.backend.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-1"
                    custom={idx + 1}
                    variants={cardVariants}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="bg-[#0B0D17] rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          skill.level === "Intermediate"
                            ? "bg-[#FF6F61] w-3/4"
                            : "bg-[#FF6F61]/50 w-1/2"
                        }`}
                      />
                    </div>
                    <span className="text-xs text-[#FF6F61]/60">{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-4 bg-[#1C1F3A] text-[#FF6F61] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              custom={skills.frontend.length + skills.backend.length + 1}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-2">MERN Stack Web Developer</h4>
                  <p className="text-[#FF6F61]/70">Programming Hero</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-[#FF6F61]/10 px-4 py-2 rounded-full text-sm font-medium">
                    2025 - Present
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            ref={projectsRef}
            className="lg:col-span-4"
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#1C1F3A] rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                  custom={idx}
                  variants={cardVariants}
                >
                  <div>
                    <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                    <p className="text-[#FF6F61]/70 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-300"
                  >
                    View Details <ExternalLink size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div ref={contactRef} className="lg:col-span-4" initial="hidden" animate="visible">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="bg-[#1C1F3A] rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center space-y-3"
                custom={0}
                variants={cardVariants}
              >
                <MapPin size={32} />
                <span className="font-medium">Dhaka, Bangladesh</span>
              </motion.div>
              <motion.div
                className="bg-[#1C1F3A] rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center space-y-3"
                custom={1}
                variants={cardVariants}
              >
                <Phone size={32} />
                <span className="font-medium">+880 01805111544</span>
              </motion.div>
              <motion.div
                className="bg-[#1C1F3A] rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center space-y-3"
                custom={2}
                variants={cardVariants}
              >
                <Mail size={32} />
                <span className="font-medium">mahmudulkarim545@gmail.com</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 pb-8 text-[#FF6F61] text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#1C1F3A] flex items-center justify-center font-bold text-xl mb-2">
          MK
        </div>
        <p className="text-[#FF6F61]/60 text-sm">
          © 2025 Developed By Mahmudul Karim - All rights reserved.
        </p>
      </footer>
    </div>
  );
}
