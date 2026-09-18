import Image from "next/image";
import Reveal from "@/components/Reveal";
import { featuredProjects, moreProjects } from "@/lib/data";

function ProjectCard({
  name,
  tagline,
  description,
  stack,
  repo,
  topics,
  image,
}: (typeof featuredProjects)[number]) {
  return (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/10">
          <Image
            src={image}
            alt={`${name} interface`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="glass absolute inset-x-0 bottom-0 border-x-0 border-b-0 px-4 py-2">
            <span className="font-mono text-xs uppercase tracking-wider text-accent/90">
              {tagline}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm font-semibold text-white transition-colors group-hover:text-accent">
            {name}
          </span>
          <svg
            className="h-4 w-4 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </div>
        {!image && (
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent/80">
            {tagline}
          </p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        {topics && topics.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {topics.map((t) => (
              <span key={t} className="font-mono text-[10px] text-slate-400">
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/[0.06] bg-base-900/40 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="section-label">04 / projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for real markets.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
            Every project is public, open source, and engineered for a concrete
            problem — mostly payments, escrow, and trust for African markets.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <details className="card mt-8 group">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-mono text-sm text-slate-300 transition-colors hover:text-accent">
              <span>+ more experiments &amp; tooling ({moreProjects.length})</span>
              <span className="text-xs text-slate-400">
                click to expand
              </span>
            </summary>
            <div className="grid gap-4 border-t border-white/[0.06] p-6 sm:grid-cols-2 lg:grid-cols-3">
              {moreProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-white/[0.06] p-4 transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-sm font-semibold text-white group-hover:text-accent">
                    {project.name}
                  </span>
                  <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-wider text-accent/70">
                    {project.tagline}
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}