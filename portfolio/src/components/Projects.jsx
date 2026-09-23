import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./reveal";

function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-28 md:py-36 px-6 md:px-10 relative z-10">
      <div className="mx-auto max-w-6xl">
        
        {/* Bungkus judul dengan Reveal */}
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-white">
            Selected Projects
          </h2>
        </Reveal>

        <div onMouseLeave={() => setHoveredId(null)}>
          {projects.map((project, index) => (
            
            /* Bungkus setiap ProjectCard dengan Reveal secara individual */
            <Reveal key={project.id}>
              <ProjectCard
                project={project}
                index={index}
                isHovered={hoveredId === project.id}
                isDimmed={hoveredId !== null && hoveredId !== project.id}
                onHover={() => setHoveredId(project.id)}
              />
            </Reveal>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;