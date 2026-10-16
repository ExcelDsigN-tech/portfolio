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
                Most of my work is on Soroban. I&apos;ve had 148 pull requests
                merged into 78 repositories I don&apos;t own, including security
                fixes in five teams&apos; contracts: checks-effects-interactions
                violations, reentrancy, IDOR and key rotation.
              </p>
              <p>
                I also founded DukaPay, an open-source agent-banking protocol on
                Stellar, where I lead protocol design and code review for around
                250 contributors. And I design: the UI/UX for Amana and
                DukaPay&apos;s design system are mine, in Figma.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card overflow-hidden">
              <Image
                src="/images/headshot.png"
                alt={profile.name}
                width={864}
                height={1100}
                className="h-72 w-full object-cover object-[50%_25%]"
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
                  <dd className="text-right text-slate-200">Soroban engineer · UI/UX designer</dd>
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
                    tested · reviewed · for real markets
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