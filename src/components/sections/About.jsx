import { FadeIn } from '../FadeIn';

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container max-w-6xl lg:max-w-7xl xl:max-w-[90rem] mx-auto px-6">
        <FadeIn>
          <h2 className="text-sm md:text-base font-semibold text-indigo-400 tracking-widest uppercase mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100 mb-12">
            Engineering with empathy.
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={0.2} className="space-y-6 text-zinc-400 font-light leading-relaxed md:text-[25px]">
            <p>
              My journey in software engineering started with a simple curiosity about how things work on the web. Today, I'm a fullstack developer focused on creating cohesive, end-to-end user experiences.
            </p>
            <p>
              I thrive in the intersection of design and engineering. Whether it's architecting a robust MongoDB database, setting up a secure Express/Node server, or pushing the boundaries of UI with React and Next.js, I care deeply about the details.
            </p>
            <p>
              When I'm not writing TypeScript, you can find me exploring new design trends, contributing to open-source, or optimizing my development workflow.
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <div className="relative group">
              {/* Decorative border frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <img 
                  src="/src/images/Josh1 - Copy.jpg" 
                  alt="Code on screen" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}