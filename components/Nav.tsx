"use client";

import { useState } from "react";

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-base-950/80 backdrop-blur-md">
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-white"
        >
          <span className="text-accent">~</span>exceldsign-tech
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

        <a
          href="https://github.com/ExcelDsigN-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs font-medium text-accent transition-all hover:bg-accent/20 hover:shadow-glow-sm md:inline-flex"
        >
          github ↗
        </a>

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
            <li className="pt-2">
              <a
                href="https://github.com/ExcelDsigN-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs font-medium text-accent"
              >
                github ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}