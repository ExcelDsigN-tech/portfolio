import type { DesignSystem } from "@/lib/data";

export default function DesignSystemPanel({ system }: { system: DesignSystem }) {
  return (
    <figure
      aria-label={`DukaPay design system, ${system.theme} theme: colour tokens and components`}
      className="flex h-full flex-col justify-center gap-4 p-5 sm:p-6"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
        Design system · {system.theme}
      </p>

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {system.tokens.map((token) => (
          <li
            key={token.name}
            className="flex items-center gap-2.5 rounded-md border border-white/10 bg-base-950 p-2"
          >
            {/* Swatch colour is content from lib/data.ts, not page styling. */}
            <span
              aria-hidden="true"
              className="h-7 w-7 shrink-0 rounded-sm border border-white/10"
              style={{ backgroundColor: token.hex }}
            />
            <span className="min-w-0">
              <span className="block font-mono text-[11px] text-slate-200">
                {token.name.split("/").map((part, i) => (
                  <span key={part}>
                    {i > 0 && (
                      <>
                        /<wbr />
                      </>
                    )}
                    {part}
                  </span>
                ))}
              </span>
              <span className="block font-mono text-[11px] text-slate-400">
                {token.hex}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
        Components
      </p>
      <ul className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {system.components.map((c) => (
          <li key={c.name}>
            <p className="text-sm font-semibold text-white">{c.name}</p>
            <p className="text-xs text-slate-400">{c.detail}</p>
          </li>
        ))}
      </ul>
      <p className="text-xs leading-relaxed text-slate-400">{system.more}</p>

      <figcaption className="border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-300">
        {system.note}
      </figcaption>
    </figure>
  );
}
