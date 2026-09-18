import Reveal from "@/components/Reveal";
import { flagship } from "@/lib/data";

export default function Flagship() {
  return (
    <section id="trustlink" className="border-t border-white/[0.06] py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">03 / flagship</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                TrustLink
              </h2>
            </div>
            <a
              href={flagship.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent transition-colors hover:text-accent-400"
            >
              github.com/ExcelDsigN-tech/TRUSTLINK ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 max-w-3xl">
            <p className="text-lg font-medium text-slate-200">
              {flagship.tagline}
            </p>
            <p className="mt-3 leading-relaxed text-slate-400">
              {flagship.mission}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {flagship.architecture.map((item, i) => (
            <Reveal key={item.layer} delay={i * 80}>
              <div className="card card-hover h-full p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent">
                    {item.layer}
                  </h3>
                  <span className="font-mono text-xs text-slate-400">
                    {item.role}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="card mt-8 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              the trustlink flow
            </p>
            <ol className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {flagship.flow.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/10 font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-300">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}