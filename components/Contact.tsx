import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] py-20 sm:py-28"
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">04 / contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build trust together.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Need a Soroban contract reviewed, a wallet integration built, or a
            collaborator on payments rails for Stellar? My inbox is open, and
            every PR above is public, so you can read my work first.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary"
            >
              <MailIcon className="h-4 w-4" />
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center press rounded-full border border-white/15 text-slate-200 hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center press rounded-full border border-white/15 text-slate-200 hover:border-accent/50 hover:text-accent"
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