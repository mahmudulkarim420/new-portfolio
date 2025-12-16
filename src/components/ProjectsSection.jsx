import { useState } from "react";
import { projects } from "../components/Shared/data";
import { ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection({ refProp }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section ref={refProp} className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-[#1C1F3A] p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-[#FF6F61]/60 mt-2">
                {project.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium leading-none hover:gap-3 transition-all"
            >
              <span>View Details</span>
              <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
