import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]"
      />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">06 / contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build trust together.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Looking for a Soroban engineer, a full-stack Web3 builder, or a
            collaborator for payments and DeFi rails on Stellar? My inbox is
            open — and my code is on GitHub for anyone to audit first.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-mono text-sm font-semibold text-base-950 transition-all hover:shadow-glow sm:w-auto"
            >
              email me →
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-mono text-sm text-slate-200 transition-colors hover:border-accent/50 hover:text-accent sm:w-auto"
            >
              github ↗
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-slate-500">
            {profile.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}