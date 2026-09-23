import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project, index, isHovered, isDimmed, onHover }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.a
      ref={ref}
      href={project.demo}
      data-cursor-hover
      onMouseEnter={onHover}
      onFocus={onHover}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      animate={{ opacity: isDimmed ? 0.55 : 1 }}
      className="group relative grid md:grid-cols-[auto,1fr,auto] md:items-center gap-6 md:gap-10 py-10 border-t border-line last:border-b transition-[opacity] duration-500 ease-smooth"
    >
      <span className="font-display text-sm text-white">
        {project.number}
      </span>

      <div>
        <h3 className="font-display text-2xl md:text-4xl text-white font-semibold tracking-tight transition-transform duration-300 ease-smooth md:group-hover:translate-x-2">
          {project.title}
        </h3>
        <p className="mt-2 text-white max-w-lg leading-relaxed">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex items-center justify-end">
        <div className="relative w-40 h-28 overflow-hidden rounded-md bg-line">
          <motion.img
            style={{ y: parallaxY }}
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="absolute inset-0 h-[120%] w-full object-cover -top-[10%] transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="md:hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      <FiArrowUpRight
        className="hidden md:block absolute right-6 top-10 text-2xl transition-transform duration-300 ease-smooth group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
        aria-hidden="true"
      />
    </motion.a>
  );
}

export default ProjectCard;
