"use client";

import { useState } from "react";
import Image from "next/image";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#trustlink", label: "trustlink" },
  { href: "#projects", label: "projects" },
  { href: "#oss", label: "oss" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0 border-white/10">
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 font-sans text-sm font-bold tracking-tight text-white"
        >
          <Image
            src="/brand/logo-white.svg"
            alt="Damilare Oduyomi logo"
            width={300}
            height={220}
            className="h-7 w-auto"
            priority
          />
          <span>
            DAMILARE <span className="text-slate-400">OD.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-accent"
              >
                <span className="mr-1 text-accent/60">/</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 font-mono text-xs font-medium text-white transition-colors hover:bg-primary-400"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            github ↗
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-base-950/95 px-5 pb-6 pt-3 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-wider text-slate-300 transition-colors hover:text-accent"
                >
                  <span className="mr-1 text-accent/60">/</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs font-medium text-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                github ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}