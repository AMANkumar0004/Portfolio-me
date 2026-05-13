import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data";

export function Footer() {
  return (
    <footer className="mt-12 flex flex-col sm:flex-row justify-between items-end border-t border-white/10 pt-12 pb-12 px-8 max-w-7xl mx-auto w-full gap-8">
      <div className="flex flex-wrap gap-12">
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Location</div>
          <div className="text-sm font-light text-gray-300">{personalInfo.address.split(',')[1].trim()}</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Current Role</div>
          <div className="text-sm italic font-light text-gray-300">{personalInfo.role}</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Status</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D4FF00] animate-pulse"></div>
            <span className="text-sm uppercase tracking-tighter text-[#F5F5F5]">Available for roles</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-8">
        <div className="flex gap-4 opacity-50">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-[#D4FF00] hover:opacity-100 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#3B82F6] hover:opacity-100 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#D4FF00] hover:opacity-100 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="text-[60px] font-bold leading-none select-none text-white/5 tracking-tighter hidden sm:block hover:text-white/20 hover:-translate-y-2 transition-all duration-500 will-change-transform">
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
