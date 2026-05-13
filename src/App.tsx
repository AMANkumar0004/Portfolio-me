import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen font-sans selection:bg-[#D4FF00] selection:text-black overflow-x-hidden relative">
      <CustomCursor />
      {/* Background Graphic Elements */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#D4FF00] rounded-full opacity-5 blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-[#3B82F6] rounded-full opacity-10 blur-[80px] pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
