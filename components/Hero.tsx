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
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="container-x relative flex flex-col items-center pt-32 pb-20 text-center sm:pt-40 sm:pb-28">
        <div className="glass animate-fadeUp flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4">
          <Image
            src="/images/headshot.png"
            alt=""
            width={64}
            height={64}
            className="h-8 w-8 rounded-full object-cover"
            priority
          />
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">{profile.shortName}</span>
            <span className="mx-2 text-slate-400" aria-hidden="true">—</span>
            {profile.title}
          </p>
        </div>

        <h1
          className="animate-fadeUp mt-8 max-w-5xl text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl sm:tracking-[-0.04em] lg:text-[76px] lg:leading-[0.98] lg:tracking-[-0.045em]"
          style={{ animationDelay: "60ms" }}
        >
          I make Stellar contracts
          <br className="hidden sm:block" />{" "}
          safe to hold <span className="text-accent">real money</span>.
        </h1>

        <p
          className="animate-fadeUp mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          style={{ animationDelay: "120ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fadeUp mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "180ms" }}
        >
          <a href="#work" className="btn-primary">
            See my work
          </a>
          <a
            href={profile.mergedPrs}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            148 merged PRs on GitHub ↗
          </a>
        </div>

        <dl
          className="animate-fadeUp mt-14 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-4"
          style={{ animationDelay: "240ms" }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end bg-base-950 p-4">
              <dt className="mt-1 text-xs leading-snug text-slate-400">
                {stat.label}
              </dt>
              <dd className="text-2xl font-bold tabular-nums text-accent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
