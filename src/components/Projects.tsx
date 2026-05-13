import { useCallback, useEffect, useRef, useState, Fragment } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, FolderGit2 } from "lucide-react";
import { projects } from "../data";

type Project = (typeof projects)[number];

function ProjectsSectionHeading({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Portfolio</div>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-[#F5F5F5]">Featured Works</h2>
    </motion.div>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-20 cursor-none"
          aria-label={`View ${project.title}`}
        />
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
          <div className="w-full h-full bg-gradient-to-tr from-[#3B82F6]/20 to-transparent mix-blend-overlay opacity-30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      <div className="flex justify-between items-start mb-6 relative z-10 pointer-events-none">
        <div className="text-[#3B82F6] opacity-80 group-hover:text-[#D4FF00] group-hover:opacity-100 transition-colors duration-300">
          <FolderGit2 className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-[#D4FF00] uppercase">{project.date}</span>
      </div>

      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-2 group-hover:text-[#D4FF00] transition-colors">
          {project.title}
        </h3>
        <div className="text-[10px] font-mono text-gray-400 mb-4 uppercase tracking-wider">{project.subtitle}</div>

        <p className="text-xs text-gray-500 mb-6 leading-relaxed">{project.details[0]}</p>
      </div>

      <div className="mt-auto relative z-10">
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/10 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-4xl opacity-0 group-hover:opacity-10 text-[#D4FF00] transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
        →
      </div>
    </>
  );
}

function ProjectCardGrid({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#151515] border border-white/10 hover:border-[#3B82F6]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] rounded-sm p-8 group flex flex-col h-full relative overflow-hidden transition-all duration-500 will-change-transform"
    >
      <ProjectCardContent project={project} />
    </motion.div>
  );
}

function ProjectCardCarousel({ project }: { project: Project }) {
  return (
    <div className="bg-[#151515] border border-white/10 hover:border-[#3B82F6]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] rounded-sm p-8 group flex flex-col h-full min-h-[28rem] self-stretch relative overflow-hidden transition-all duration-500 will-change-transform w-[min(28rem,calc(100vw-7rem))] shrink-0 snap-center snap-always">
      <ProjectCardContent project={project} />
    </div>
  );
}

export function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const syncNav = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const pad = 6;
    setCanPrev(el.scrollLeft > pad);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - pad);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncNav();
    el.addEventListener("scroll", syncNav, { passive: true });
    const ro = new ResizeObserver(syncNav);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncNav);
      ro.disconnect();
    };
  }, [syncNav]);

  const scrollStrip = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.max(240, Math.floor(el.clientWidth * 0.75));
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section id="projects" className="bg-transparent py-24 px-4 sm:px-6 lg:px-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ProjectsSectionHeading />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:hidden max-w-6xl mx-auto px-4 sm:px-6">
        {projects.map((project, index) => (
          <Fragment key={project.title}>
            <ProjectCardGrid project={project} index={index} />
          </Fragment>
        ))}
      </div>

      <div className="relative left-1/2 -translate-x-1/2 hidden lg:block w-screen max-w-[100vw]">
        <div className="flex items-stretch gap-2 sm:gap-3 min-h-[min(32rem,calc(100dvh-10rem))] px-3 sm:px-5 md:px-8">
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            disabled={!canPrev}
            aria-label="Previous projects"
            className="shrink-0 self-center w-11 h-11 flex items-center justify-center rounded-sm border border-white/10 bg-[#151515] text-[#D4FF00] hover:border-[#3B82F6]/50 hover:bg-white/5 transition-colors disabled:opacity-25 disabled:pointer-events-none disabled:hover:border-white/10 disabled:hover:bg-[#151515]"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden />
          </button>

          <div
            ref={scrollerRef}
            className="flex-1 min-w-0 flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory py-1 scroll-pl-6 scroll-pr-6 sm:scroll-pl-10 sm:scroll-pr-10 md:scroll-pl-14 md:scroll-pr-14 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <Fragment key={project.title}>
                <ProjectCardCarousel project={project} />
              </Fragment>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollStrip(1)}
            disabled={!canNext}
            aria-label="Next projects"
            className="shrink-0 self-center w-11 h-11 flex items-center justify-center rounded-sm border border-white/10 bg-[#151515] text-[#D4FF00] hover:border-[#3B82F6]/50 hover:bg-white/5 transition-colors disabled:opacity-25 disabled:pointer-events-none disabled:hover:border-white/10 disabled:hover:bg-[#151515]"
          >
            <ChevronRight className="w-5 h-5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
