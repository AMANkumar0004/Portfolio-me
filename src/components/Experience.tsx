import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">History</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-[#F5F5F5]">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-0"
            >
              {/* Timeline line for mobile */}
              <div className="hidden sm:block absolute left-[15px] top-8 bottom-[-32px] w-px bg-white/10 last:hidden"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                {/* Timeline dot */}
                <div className="hidden sm:flex shrink-0 w-8 h-8 items-center justify-center relative z-10 mt-1">
                  <div className="w-2 h-2 bg-[#D4FF00]"></div>
                </div>

                <div className="flex-grow bg-[#151515] p-6 sm:p-8 border border-white/10 rounded-sm hover:border-white/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight text-[#F5F5F5]">{exp.title}</h3>
                      <div className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-widest mt-2">{exp.role}</div>
                    </div>
                    
                    <div className="flex flex-col items-start sm:items-end gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1">
                        <span>{exp.date}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1.5">
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-400 leading-relaxed font-light">
                        <span className="shrink-0 text-[#3B82F6] mr-3 font-mono">/</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
