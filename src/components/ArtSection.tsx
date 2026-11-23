"use client";

import { useState } from "react";
import { Box, ExternalLink, Maximize2, X, Layers } from "lucide-react";
import { ART_PROJECTS, ArtProject, PROFILE } from "@/data/portfolio";

const ACCENT_STYLES: Record<
  ArtProject["accent"],
  { glow: string; badge: string; wireframe: string }
> = {
  amber: {
    glow: "from-amber-500/20 via-orange-500/5 to-transparent",
    badge: "border-amber-400/30 bg-amber-500/10 text-amber-300",
    wireframe: "border-amber-400/30",
  },
  cyan: {
    glow: "from-sky-500/20 via-cyan-500/5 to-transparent",
    badge: "border-sky-400/30 bg-sky-500/10 text-sky-300",
    wireframe: "border-sky-400/30",
  },
  violet: {
    glow: "from-violet-500/20 via-fuchsia-500/5 to-transparent",
    badge: "border-violet-400/30 bg-violet-500/10 text-violet-300",
    wireframe: "border-violet-400/30",
  },
};

export function ArtSection() {
  const [selected, setSelected] = useState<ArtProject | null>(null);

  return (
    <section id="3d-art" className="py-20 border-t border-white/10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-300">
            <Box className="h-3.5 w-3.5" />
            3D Art &amp; Blender
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            3D Work &amp; Visuals
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">
            3D modeling, animation, texturing, and rendering crafted in Blender.
            Explore my full gallery on ArtStation.
          </p>
        </div>

        <a
          href={PROFILE.socials.artstation}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2.5 text-sm font-semibold text-amber-200 transition hover:bg-amber-500/20 md:self-auto"
        >
          View Full ArtStation Gallery
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {ART_PROJECTS.map((item) => {
          const style = ACCENT_STYLES[item.accent];
          return (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition hover:border-amber-400/30"
            >
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 text-left focus:outline-none"
              >
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${style.glow}`}
                  >
                    <div
                      className={`h-24 w-24 rotate-12 rounded-2xl border ${style.wireframe} bg-white/[0.02] backdrop-blur-sm transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110`}
                    />
                    <div
                      className={`absolute h-16 w-16 -rotate-12 rounded-xl border ${style.wireframe} bg-white/[0.03] transition-transform duration-300 group-hover:-rotate-45`}
                    />
                    <Layers className="absolute h-6 w-6 text-zinc-300" />
                  </div>
                )}

                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg border border-white/15 bg-zinc-950/70 px-2 py-1 text-[11px] font-medium text-zinc-200 backdrop-blur-sm">
                  <Maximize2 className="h-3 w-3" />
                  Preview
                </span>
              </button>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span
                    className={`inline-block rounded-md border px-2.5 py-0.5 font-mono text-xs ${style.badge}`}
                  >
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.artstationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200"
                  >
                    ArtStation
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-amber-300">
                  {selected.category}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close preview"
                className="rounded-lg border border-white/10 p-1.5 text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
              {selected.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="max-h-[60vh] w-full object-contain"
                />
              ) : (
                <div className="flex h-64 flex-col items-center justify-center gap-3 p-6 text-center">
                  <Box className="h-10 w-10 text-amber-300" />
                  <p className="max-w-md text-sm text-zinc-400">
                    High-resolution renders are hosted on ArtStation. You can also
                    add local renders to{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-zinc-200">
                      public/images/art/
                    </code>{" "}
                    and link them in{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-zinc-200">
                      src/data/portfolio.ts
                    </code>
                    .
                  </p>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm text-zinc-300">{selected.description}</p>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex flex-wrap gap-2">
                {selected.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={selected.artstationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-amber-400"
              >
                Open on ArtStation
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
