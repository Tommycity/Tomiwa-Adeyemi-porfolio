import { motion } from 'framer-motion';
import { FadeIn } from '../FadeIn';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container max-w-6xl lg:max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 mb-6">
            Building digital <br className="hidden md:block" />
            <span className="text-zinc-100">experiences.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light">
            I'm a fullstack engineer specializing in the MERN stack, Next.js, and TypeScript. 
            I craft incredibly beautiful, performant, and scalable applications.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-full bg-zinc-100 text-zinc-950 font-medium hover:bg-zinc-200 transition-colors duration-300 flex items-center gap-2"
            >
              View My Work
              <iconify-icon icon="solar:arrow-right-linear" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-full bg-white/5 text-zinc-100 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              Contact Me
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}