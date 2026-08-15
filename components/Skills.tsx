import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function Skills() {
  return (
    <section id="stack" className="border-t border-white/[0.06] bg-base-900/40 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="section-label">02 / stack</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Full-stack, Web3-native.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profile.focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 80}>
              <div className="card card-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent/70">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {area.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {area.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="card mt-8 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              toolbelt
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.toolbelt.map((tool) => (
                <span key={tool} className="chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}