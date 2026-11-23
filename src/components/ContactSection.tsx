"use client";

import { useState } from "react";
import { Mail, Copy, Check, Box, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { PROFILE } from "@/data/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard is unavailable
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {PROFILE.availability}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              I&apos;m actively looking for an internship in software engineering,
              systems/full-stack development, or 3D modeling, animation, and
              rendering. Reach out directly by email or connect via GitHub and
              ArtStation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-[300px]">
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-sky-400"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-medium text-zinc-200 transition hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={PROFILE.socials.artstation}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-amber-400/40 hover:text-amber-200"
              >
                <Box className="h-3.5 w-3.5" />
                ArtStation
              </a>
              <a
                href={PROFILE.socials.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
              >
                X
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row">
        <p>
          &copy; 2026 {PROFILE.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>
        <p className="font-mono">
          {PROFILE.school} &bull; {PROFILE.location}
        </p>
      </footer>
    </section>
  );
}
