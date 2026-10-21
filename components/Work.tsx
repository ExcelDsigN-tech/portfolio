import Image from "next/image";
import DesignSystemPanel from "@/components/DesignSystemPanel";
import Reveal from "@/components/Reveal";
import { otherWork, work, type WorkItem } from "@/lib/data";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

/* Drawn from ARCHITECTURE.md in the DukaPay repo — keep in sync with it. */
function DukaPayDiagram() {
  const box = "rounded-md border border-white/10 bg-base-950 px-3 py-2.5";
  return (
    <figure
      aria-label="DukaPay architecture: off-chain services above, Soroban contracts below"
      className="flex h-full flex-col justify-center gap-3 p-5 sm:p-6"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
        Off-chain
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={box}>
          <p className="text-sm font-semibold text-white">Next.js dashboard</p>
          <p className="text-xs text-slate-400">agents · admin · lenders</p>
        </div>
        <div className={box}>
          <p className="text-sm font-semibold text-white">Express API</p>
          <p className="text-xs text-slate-400">Postgres · Redis · SEP-53</p>
        </div>
        <div className={box}>
          <p className="text-sm font-semibold text-white">Rust indexer</p>
          <p className="text-xs text-slate-400">contract events → Postgres</p>
        </div>
      </div>

      <p className="text-center font-mono text-xs text-slate-400">
        ↓ operator-signed calls&nbsp;&nbsp;·&nbsp;&nbsp;events ↑
      </p>

      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
        On-chain · Soroban
      </p>
      <div className="grid gap-2 sm:grid-cols-[1fr_1.4fr]">
        <div className={box}>
          <p className="font-mono text-sm text-white">agent_registry</p>
          <p className="text-xs text-slate-400">KYC ref · USDC bond · status</p>
        </div>
        <div className={`${box} border-accent/40`}>
          <p className="font-mono text-sm text-white">agent_vault</p>
          <p className="text-xs text-slate-300">
            float ≤ collateral × haircut
          </p>
          <p className="text-xs text-slate-400">
            settle_net: batch deltas sum to 0
          </p>
        </div>
      </div>
      <p className="font-mono text-xs leading-relaxed text-slate-400">
        + lending_pool · loan_manager · remittance_nft · oracle ·
        multisig_governance · circuit_breaker
      </p>

      <div className="mt-2 rounded-md border border-white/10 bg-base-950 px-3 py-2.5 font-mono text-xs">
        <p className="text-slate-400">
          <span className="text-accent">❯</span> cargo test --workspace
        </p>
        <p className="mt-1 text-emerald-400">
          test result: ok. 428 passed; 0 failed
        </p>
        <p className="text-slate-400">11 contract suites · run 2026-10-13</p>
      </div>
    </figure>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const hasVisual = item.image || item.diagram || item.designSystem;
  return (
    <article
      id={item.id}
      className={`card grid overflow-hidden ${hasVisual ? "lg:grid-cols-[1fr_1.1fr]" : ""}`}
    >
      <div className={`flex flex-col p-6 sm:p-8 ${hasVisual ? "" : "max-w-3xl"}`}>
        <p className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-slate-300">{item.role}</p>
        {item.status && (
          <p className="mt-3 w-fit rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-amber-300">
            {item.status}
          </p>
        )}

        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>

        {item.fixes && (
          <ul className="mt-4 space-y-2.5">
            {item.fixes.map((fix) => (
              <li key={fix.text} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>
                  {fix.text}{" "}
                  {fix.prs.map((pr, i) => (
                    <span key={pr.href}>
                      {i > 0 && ", "}
                      <a
                        href={pr.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent underline-offset-4 hover:underline"
                      >
                        {pr.label}
                      </a>
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
          {item.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      {hasVisual && (
        <div className="border-t border-white/10 bg-base-900 lg:border-l lg:border-t-0">
          {item.diagram ? (
            <DukaPayDiagram />
          ) : item.designSystem ? (
            <DesignSystemPanel system={item.designSystem} />
          ) : (
            item.image && (
              <div
                className={`relative flex h-full overflow-hidden ${
                  item.image.fit === "contain" ? "items-center p-4 sm:p-6" : "min-h-[240px]"
                }`}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={
                    item.image.fit === "contain"
                      ? "h-auto w-full rounded-md border border-white/10"
                      : "h-full max-h-[460px] w-full object-cover object-top"
                  }
                />
              </div>
            )
          )}
        </div>
      )}
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-white/[0.06] py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="section-label">03 / work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected work.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
            Security fixes in other teams&apos; contracts, the protocol I lead,
            and the product design behind it. Every link goes to the real
            repository or pull request.
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {work.map((item, i) => (
            <Reveal key={item.id}>
              <WorkCard item={item} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-slate-400">
            Also:{" "}
            <a
              href={otherWork.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              {otherWork.label}
            </a>{" "}
            — {otherWork.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
