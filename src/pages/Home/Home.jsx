import { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  const refs = {
    About: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    refs[tab].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0B0D17] text-[#FF6F61] min-h-screen">
      <Navbar activeTab={activeTab} onNavClick={handleNavClick} />

      <main className="max-w-5xl mx-auto px-4 space-y-8">
        <AboutSection refProp={refs.About} />
        <SkillsSection refProp={refs.Skills} />
        <ProjectsSection refProp={refs.Projects} />
        <ContactSection refProp={refs.Contact} />
      </main>

      <Footer />
    </div>
  );
}
