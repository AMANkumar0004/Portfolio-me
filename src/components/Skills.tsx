import { motion } from "motion/react";
import { Code2, Wrench } from "lucide-react";
import { skills } from "../data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Capabilities</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-[#F5F5F5]">Technical Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#151515] border border-white/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="text-[#D4FF00]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-mono uppercase tracking-widest">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1.5 border border-white/10 text-gray-300 font-mono text-[10px] uppercase tracking-widest hover:border-[#D4FF00] hover:text-[#D4FF00] hover:-translate-y-1 hover:bg-[#D4FF00]/10 transition-all duration-300 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#151515] border border-white/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="text-[#3B82F6]">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-mono uppercase tracking-widest">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1.5 border border-white/10 text-gray-300 font-mono text-[10px] uppercase tracking-widest hover:border-[#3B82F6] hover:text-[#3B82F6] hover:-translate-y-1 hover:bg-[#3B82F6]/10 transition-all duration-300 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
