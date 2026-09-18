import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

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
              className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-primary-400 sm:w-auto"
            >
              <MailIcon className="h-4 w-4" />
              email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-slate-400">
            {profile.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}