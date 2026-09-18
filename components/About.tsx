import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="section-label">01 / about</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trust is the product. Stellar is the rail.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-slate-400">
              <p>{profile.mission}</p>
              <p>
                I work across the entire stack of a Web3 product — from the Rust
                smart contracts that hold value, to the indexers that make
                on-chain state queryable, to the dashboards and SDKs that people
                actually use. Since creating this account in early 2026 I have
                shipped 16+ merged pull requests into Stellar ecosystem
                projects, plus a portfolio of 60+ public repositories spanning
                escrow, lending, remittances, agent-banking, and payments.
              </p>
              <p>
                My work is open source, MIT licensed, and built to be audited.
                I care about correctness, security hardening, and real-world
                deployment — the boring engineering that makes trust
                technology actually trustworthy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card card-hover overflow-hidden">
              <Image
                src="/images/headshot.png"
                alt={profile.name}
                width={864}
                height={1100}
                className="h-56 w-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
              />
              <div className="p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                identity
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="shrink-0 font-mono text-slate-400">name</dt>
                  <dd className="text-right text-slate-200">
                    {profile.name}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="shrink-0 font-mono text-slate-400">role</dt>
                  <dd className="text-right text-slate-200">{profile.title}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="shrink-0 font-mono text-slate-400">base</dt>
                  <dd className="text-right text-slate-200">
                    {profile.location}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="shrink-0 font-mono text-slate-400">ethos</dt>
                  <dd className="text-right text-slate-200">
                    auditable · open · for real markets
                  </dd>
                </div>
              </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}