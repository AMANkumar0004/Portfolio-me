import { motion } from "motion/react";
import { FolderGit2 } from "lucide-react";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Portfolio</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-[#F5F5F5]">Featured Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#151515] border border-white/10 hover:border-[#3B82F6]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] rounded-sm p-8 group flex flex-col h-full relative overflow-hidden transition-all duration-500 will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-20 cursor-none" aria-label={`View ${project.title}`}></a>
              )}

              <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden border-b border-white/10 bg-[#0A0A0A] z-10 pointer-events-none">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    loading="lazy"
                    onError={(e) => {
                      if (project.link) {
                        (e.target as HTMLImageElement).src = `https://image.thum.io/get/width/600/crop/600/noanimate/${project.link}`;
                      } else {
                        (e.target as HTMLImageElement).style.display = "none";
                      }
                    }}
                  />
                ) : project.link ? (
                  <img
                    src={`https://image.thum.io/get/width/600/crop/600/noanimate/${project.link}`}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-[#3B82F6]/20 to-transparent mix-blend-overlay opacity-30"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              <div className="flex justify-between items-start mb-6 relative z-10 pointer-events-none">
                <div className="text-[#3B82F6] opacity-80 group-hover:text-[#D4FF00] group-hover:opacity-100 transition-colors duration-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#D4FF00] uppercase">
                  {project.date}
                </span>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-2 group-hover:text-[#D4FF00] transition-colors">
                  {project.title}
                </h3>
                <div className="text-[10px] font-mono text-gray-400 mb-4 uppercase tracking-wider">
                  {project.subtitle}
                </div>

                <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                  {project.details[0]}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/10 px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-0 group-hover:opacity-10 text-[#D4FF00] transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">→</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
