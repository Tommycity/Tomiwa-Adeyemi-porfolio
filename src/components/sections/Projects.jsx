import { FadeIn } from '../FadeIn';
import bluegridentImage from '@/images/bluegrident-image.png';
import ayewaPortfolio from '@/images/ayewa-portfolio.png';
import dataveneImage from '@/images/datavene.png';
import brandProImage from '@/images/brandPro.png';

const projects = [
  {
    title: 'Bluegrid Entertainment',
    description: 'A landing page for a music distribution company that guides visitors into a dashboard where they can post, update, or delete songs, albums, and tracks. Includes an admin dashboard with analytics and tools to block users when needed.',
    image: bluegridentImage,
    tags: ['React.js', 'JavaScript', 'Tailwind', 'MongoDB', 'Express', 'Recharts'],
    links: { github: 'https://github.com/forxbit/bluegrid-ent-landing', live: 'https://bluegrident.com/' }
  },
  {
    title: 'Blessing Ayewa - Data analytics engineer',
    description: 'The visitor-facing portfolio and blog: project highlights and educational articles—built so the client can present work and publish long-form content in one place.',
    image: ayewaPortfolio,
    tags: ['React.js', 'JavaScript', 'Tailwind', 'MongoDB', 'Express'],
    links: { github: 'https://github.com/Tommycity/DataVene', live: 'blessingayewa.com' }
  },
  {
    title: 'DataVene',
    description: 'An admin dashboard for controlling the blog: draft, edit, publish, and manage posts from one place—built to keep content workflows fast and organized.',
    image: dataveneImage,
    tags: ['React.js', 'JavaScript', 'Tailwind', 'MongoDB', 'Express'],
    links: { github: 'https://github.com/Tommycity/DataVene', live: 'blessingayewa.com' }
  },
  {
    title: 'BrandProExhibiton',
    description: 'A marketing site for a branding company, presenting services and work in a clear, professional layout.',
    image: brandProImage,
    tags: ['React.js', 'JavaScript', 'Tailwind', 'MongoDB', 'Express'],
    links: { github: 'https://github.com/brandpro2025/brandpro-fontend', live: 'https://brandpro.vercel.app/' }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container max-w-6xl lg:max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3">Selected Work</h2>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100">
            Crafted with precision.
          </h3>
        </FadeIn>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.title} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <FadeIn direction={index % 2 !== 0 ? 'left' : 'right'} className="w-full md:w-3/5">
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-video">
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </FadeIn>

              <FadeIn direction={index % 2 !== 0 ? 'right' : 'left'} delay={0.2} className="w-full md:w-2/5 space-y-6">
                <h4 className="text-2xl font-medium tracking-tight text-zinc-100">{project.title}</h4>
                <p className="text-zinc-400 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <a href={project.links.github} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <iconify-icon icon="simple-icons:github" class="text-lg" />
                    Github
                  </a>
                  <a href={project.links.live} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <iconify-icon icon="solar:global-linear" class="text-lg" />
                    Live Site
                  </a>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}