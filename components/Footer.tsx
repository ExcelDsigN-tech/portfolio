import Image from "next/image";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-x flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/brand/logo-white.svg"
              alt="Damilare Oduyomi logo"
              width={300}
              height={220}
              className="h-6 w-auto"
            />
            <span className="font-mono text-xs text-slate-400">
              Damilare Oduyomi
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-slate-400">
            © {year} {profile.name} · MIT licensed open source
          </p>
          <p className="font-mono text-xs text-slate-400">
            built with{" "}
            <span className="text-accent">Next.js</span> +{" "}
            <span className="text-accent">Tailwind</span> · running on{" "}
            <span className="text-accent">Stellar</span>-grade discipline
          </p>
        </div>
      </div>
    </footer>
  );
}