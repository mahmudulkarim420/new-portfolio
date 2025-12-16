import { motion } from "framer-motion";
import img from "../assets/img1.png";
import resume from "../assets/Mahmudul Karim Resume.pdf";
import { Download } from "lucide-react";
import { socials } from "../components/Shared/data";

export default function AboutSection({ refProp }) {
  return (
    <section ref={refProp} className="grid lg:grid-cols-4 gap-4">
      <div className="lg:col-span-2 bg-[#1C1F3A] p-8 rounded-2xl text-center">
        <img
          src={img}
          className="w-28 h-28 mx-auto rounded-full border-2 border-[#FF6F61]"
        />
        <h1 className="text-3xl font-bold mt-4">Mahmudul Karim</h1>
        <p className="text-[#FF6F61]/70">Frontend Developer</p>
        <p className="mt-4 text-sm text-[#FF6F61]/60">
          A Web Developer from Bangladesh specializing in responsive, modern, and user-friendly web experiences.
        </p>

        <a
          href={resume}
          download
          className="inline-flex mt-6 items-center gap-2 bg-[#FF6F61] text-black px-6 py-3 rounded-full"
        >
          Download Resume <Download size={16} />
        </a>
      </div>

      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="bg-[#1C1F3A] rounded-2xl p-6 flex flex-col items-center justify-center"
          >
            <Icon size={30} />
            <span className="mt-2">{social.name}</span>
          </motion.a>
        );
      })}
    </section>
  );
}
