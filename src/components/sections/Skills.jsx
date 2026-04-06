import { FadeIn } from '../FadeIn';

const skills = [
  { name: 'React', icon: 'simple-icons:react', color: 'group-hover:text-[#61DAFB]' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: 'group-hover:text-white' },
  { name: 'TypeScript', icon: 'simple-icons:typescript', color: 'group-hover:text-[#3178C6]' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: 'group-hover:text-[#339933]' },
  { name: 'Express', icon: 'simple-icons:express', color: 'group-hover:text-white' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb', color: 'group-hover:text-[#47A248]' },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: 'group-hover:text-[#06B6D4]' },
  { name: 'Framer Motion', icon: 'simple-icons:framer', color: 'group-hover:text-[#0055FF]' },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-zinc-900/30 border-y border-white/5">
      <div className="container max-w-6xl lg:max-w-7xl xl:max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-16">
          <FadeIn className="md:w-1/3">
            <h2 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3">Core Arsenal</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100">
              Tools I use to build the future.
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.2} className="md:w-1/2">
            <p className="text-zinc-400 font-light md:text-[22px]">
              I specialize in the MERN stack and modern React frameworks. By leveraging TypeScript across the entire stack, I ensure end-to-end type safety, resulting in fewer bugs and more maintainable codebases.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={0.1 * index} direction="up" fullWidth>
              <div className="group relative flex flex-col items-center gap-4 p-8 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-300 h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-colors duration-500" />
                <iconify-icon 
                  icon={skill.icon} 
                  class={`text-4xl text-zinc-500 transition-colors duration-300 ${skill.color}`}
                />
                <span className="text-sm font-medium text-zinc-300 relative z-10">{skill.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}