import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          © {year} {profile.name} · MIT licensed open source
        </p>
        <p className="font-mono text-xs text-slate-500">
          built with{" "}
          <span className="text-accent">Next.js</span> +{" "}
          <span className="text-accent">Tailwind</span> · running on{" "}
          <span className="text-accent">Stellar</span>-grade discipline
        </p>
      </div>
    </footer>
  );
}