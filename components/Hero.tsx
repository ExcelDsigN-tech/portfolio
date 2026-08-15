import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-accent-cyan/10 blur-[120px]"
      />

      <div className="container-x relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <p className="animate-fadeUp font-mono text-sm text-accent">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
          available for employment &amp; collaborations
        </p>

        <h1
          className="animate-fadeUp mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          I build{" "}
          <span className="bg-gradient-to-r from-accent to-accent-cyan bg-clip-text text-transparent">
            programmable trust
          </span>{" "}
          on the Stellar network.
        </h1>

        <p
          className="animate-fadeUp mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fadeUp mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#trustlink"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-mono text-sm font-semibold text-base-950 transition-all hover:shadow-glow"
          >
            view flagship →
          </a>
          <a
            href="https://github.com/ExcelDsigN-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-mono text-sm text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
          >
            github.com/ExcelDsigN-tech ↗
          </a>
        </div>

        <div
          className="animate-fadeUp mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-base-900/90 p-5">
              <p className="font-mono text-2xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="animate-fadeUp mt-8 flex items-center gap-2 font-mono text-xs text-slate-500"
          style={{ animationDelay: "400ms" }}
        >
          <span className="text-emerald-400">❯</span>
          <span>
            cargo test --manifest-path contracts/trustlink/Cargo.toml
            <span className="ml-1 inline-block h-3.5 w-2 animate-blink bg-accent align-middle" />
          </span>
        </div>
      </div>
    </section>
  );
}