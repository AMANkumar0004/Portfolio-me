import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        className="max-w-4xl mx-auto w-full text-center sm:text-left z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-[10px] font-mono tracking-widest text-[#D4FF00] uppercase">
            {personalInfo.role}
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-6xl sm:text-[140px] font-bold leading-[0.85] tracking-tight mb-8 relative z-20">
          HI, I'M <br/><span className="name-hover-effect">{personalInfo.name.toUpperCase()}</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="max-w-md text-lg text-gray-400 font-light leading-relaxed mb-10 sm:mx-0 mx-auto">
          I build full-stack web applications with a focus on modern, scalable, and user-centric solutions. Experienced in MERN stack, real-time communications, and AI integrations.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center sm:justify-start">
          <a href="#projects" className="px-6 py-3 bg-[#D4FF00] text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors w-full sm:w-auto text-center">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/10 text-white font-bold uppercase text-xs tracking-widest hover:bg-[#151515] transition-colors w-full sm:w-auto text-center">
            Contact Me
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center sm:justify-start gap-y-4 gap-x-8 text-xs font-mono uppercase tracking-widest text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4FF00]" />
            <span>{personalInfo.address.split(',')[1].trim()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#D4FF00]" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#D4FF00]" />
            <span>{personalInfo.phone}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
