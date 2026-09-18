import Reveal from "@/components/Reveal";
import { contributions } from "@/lib/data";

const typeStyles: Record<string, string> = {
  feature: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  fix: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  security: "text-rose-400 border-rose-400/30 bg-rose-400/10",
};

export default function OpenSource() {
  return (
    <section id="oss" className="border-t border-white/[0.06] py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="section-label">05 / open source</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            I contribute upstream.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
            16+ merged pull requests into the Stellar ecosystem — features,
            critical fixes, and security hardening. A sample of the work:
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {contributions.map((c, i) => (
            <Reveal key={c.detail} delay={i * 60}>
              <div className="card card-hover flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                <span
                  className={`inline-flex w-fit shrink-0 items-center rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${typeStyles[c.type]}`}
                >
                  {c.type}
                </span>
                <p className="flex-1 text-sm leading-relaxed text-slate-300">
                  {c.detail}
                </p>
                <span className="shrink-0 font-mono text-xs text-slate-400">
                  → {c.repo}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}