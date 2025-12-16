import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-[#1C1F3A] max-w-lg w-full rounded-2xl p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-4 hover:rotate-90 transition"
        >
          <X />
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-[#FF6F61]/10 text-[#FF6F61]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links – side by side */}
        <div className="flex flex-wrap gap-4 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0D17] hover:bg-[#FF6F61]/10 transition"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}

          {project.client && (
            <a
              href={project.client}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0D17] hover:bg-[#FF6F61]/10 transition"
            >
              <Github size={16} />
              <span>Client</span>
            </a>
          )}

          {project.server && (
            <a
              href={project.server}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0D17] hover:bg-[#FF6F61]/10 transition"
            >
              <Github size={16} />
              <span>Server</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
