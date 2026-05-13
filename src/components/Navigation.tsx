import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00]">Portfolio</span>
            <span className="text-2xl font-bold tracking-tighter uppercase text-[#F5F5F5]">Aman.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#F5F5F5] hover:text-[#D4FF00] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4FF00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 text-[#F5F5F5]">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 hover:text-[#D4FF00] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 hover:text-[#D4FF00] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#F5F5F5]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#151515]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-mono uppercase tracking-widest text-[#F5F5F5] hover:text-[#D4FF00]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex gap-4">
                <a href={personalInfo.github} className="text-gray-400 hover:text-[#D4FF00]">
                  <Github className="w-6 h-6" />
                </a>
                <a href={personalInfo.linkedin} className="text-gray-400 hover:text-[#D4FF00]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-[#D4FF00]">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
