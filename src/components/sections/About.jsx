import { FadeIn } from "../FadeIn";
import profilePhoto from "@/images/Josh1 - Copy.jpg";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container max-w-6xl lg:max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-sm md:text-base font-semibold text-indigo-400 tracking-widest uppercase mb-3">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100 mb-12">
            Engineering with empathy.
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn
            direction="right"
            delay={0.2}
            className="space-y-6 text-zinc-400 font-light leading-relaxed md:text-[22px]"
          >
            <p>
              I build and own full product surfaces end to end—from database
              schema and APIs to polished React and Next.js front ends. Clients
              work with someone who has shipped real systems, thinks in
              trade-offs, and keeps quality high under deadline pressure.
            </p>
            <p>
              My strength is turning ambiguity into a clear architecture: secure
              Express and Node services, well-modeled MongoDB data layers, and
              interfaces that stay fast and maintainable as they grow. I
              prioritize observability, security, and TypeScript across the stack
              so teams spend less time firefighting and more time delivering.
            </p>
            <p>
              Beyond writing code, I mentor where it helps, review with rigor,
              and stay current with the ecosystem—so every engagement benefits
              from deliberate engineering, not guesswork.
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <div className="relative group">
              {/* Decorative border frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <img
                  src={profilePhoto}
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
