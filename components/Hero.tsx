import Image from "next/image";
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
        className="animate-pulseSoft pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="animate-pulseSoft pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-accent/15 blur-[120px]"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container-x relative flex flex-col items-center pt-32 pb-20 text-center sm:pt-40 sm:pb-28">
        <div
          className="glass animate-fadeUp flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4"
        >
          <Image
            src="/images/headshot.png"
            alt={profile.name}
            width={64}
            height={64}
            className="h-8 w-8 rounded-full object-cover"
            priority
          />
          <p className="font-mono text-xs text-slate-300 sm:text-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
            available for employment &amp; collaborations
          </p>
        </div>

        <h1
          className="animate-fadeUp mt-8 max-w-4xl text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-7xl sm:tracking-[-0.04em] lg:text-[96px] lg:leading-[0.96] lg:tracking-[-0.05em]"
          style={{ animationDelay: "80ms" }}
        >
          Programmable trust,
          <br />
          engineered on <span className="text-accent">Stellar</span>.
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
            className="inline-flex min-h-[54px] min-w-[191px] items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-primary-400"
          >
            view flagship →
          </a>
          <a
            href="https://github.com/ExcelDsigN-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[54px] min-w-[191px] items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            github.com/ExcelDsigN-tech ↗
          </a>
        </div>

        <div
          className="animate-fadeUp mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-base-950 p-4">
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
          className="animate-fadeUp mt-8 flex items-center gap-2 font-mono text-xs text-slate-400"
          style={{ animationDelay: "400ms" }}
        >
          <span className="text-accent">❯</span>
          <span>
            cargo test --manifest-path contracts/trustlink/Cargo.toml
            <span className="ml-1 inline-block h-3.5 w-2 animate-blink bg-accent align-middle" />
          </span>
        </div>
      </div>
    </section>
  );
}
