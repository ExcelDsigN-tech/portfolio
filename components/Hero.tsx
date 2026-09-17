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
        className="animate-pulseSoft pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-intel-primary/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="animate-pulseSoft pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-accent/15 blur-[120px]"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container-x relative flex flex-col items-center pt-32 pb-20 text-center sm:pt-40 sm:pb-28">
        <p className="animate-fadeUp font-mono text-sm text-intel-primary">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
          available for employment &amp; collaborations
        </p>

        <h1
          className="animate-fadeUp mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          I build <span className="text-intel-primary">programmable trust</span>{" "}
          on the Stellar network.
        </h1>

        <p
          className="animate-fadeUp mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fadeUp mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#trustlink"
            className="inline-flex min-h-[51px] min-w-[191px] items-center justify-center gap-2 rounded-full bg-intel-primary px-5 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-intel-primary/85"
          >
            view flagship →
          </a>
          <a
            href="https://github.com/ExcelDsigN-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[51px] min-w-[191px] items-center justify-center gap-2 rounded-full border border-white px-5 py-3 font-mono text-sm text-white transition-colors hover:border-intel-primary hover:text-intel-primary"
          >
            github.com/ExcelDsigN-tech ↗
          </a>
        </div>

        <div
          className="animate-fadeUp mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-intel-tertiary bg-intel-tertiary sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-intel-surface p-4">
              <p className="font-mono text-2xl font-bold text-intel-primary">
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
            <span className="ml-1 inline-block h-3.5 w-2 animate-blink bg-intel-primary align-middle" />
          </span>
        </div>
      </div>
    </section>
  );
}