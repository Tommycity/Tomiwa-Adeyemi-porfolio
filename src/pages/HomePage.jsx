import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact'];

export default function HomePage() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative w-full min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden font-sans">
      <Navigation activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5 bg-zinc-950 relative z-10">
        <p>© {new Date().getFullYear()} Fullstack Engineer. Crafted with React & Tailwind.</p>
      </footer>
    </div>
  );
}
