import { Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#D4FF00] text-black mt-24 relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-mono text-black/60 uppercase tracking-widest mb-2">Collab</div>
        <h2 className="text-5xl sm:text-8xl font-bold tracking-tighter mb-12 flex flex-col leading-[0.9]">
          <span>LET'S BUILD</span>
          <span>SOMETHING.</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-12 mt-16">
          <div>
            <p className="text-lg font-medium mb-8 max-w-sm text-black/80">
              Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="space-y-4 font-mono text-xs uppercase tracking-widest">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 hover:opacity-70 transition-opacity">
                <Mail className="w-5 h-5" /> {personalInfo.email}
              </a>
  
            </div>
          </div>
          
          <div className="flex items-center sm:justify-end">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="w-40 h-40 rounded-full border border-black flex items-center justify-center text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-black hover:text-[#D4FF00] transition-colors duration-500 text-center p-4 hover:scale-105 transform"
            >
              Send a<br/>Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
