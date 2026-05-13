import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "../data";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Academic</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-[#F5F5F5]">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#151515] border border-white/10 rounded-sm p-8 sm:p-12 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight text-[#F5F5F5]">{education.degree}</h3>
                <div className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-widest mt-2">{education.institution}</div>
              </div>
              
              <div className="flex flex-col items-start sm:items-end gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                <div className="border border-white/10 px-3 py-1">
                  <span>{education.duration}</span>
                </div>
                <div>
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map(course => (
                  <span key={course} className="px-3 py-1.5 border border-white/10 text-gray-300 font-mono text-[10px] uppercase tracking-widest">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
