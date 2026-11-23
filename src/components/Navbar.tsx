"use client";

import { useState } from "react";
import { Menu, X, Box } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { PROFILE } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Software", href: "#software" },
  { label: "3D Art", href: "#3d-art" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/10 font-mono text-xs font-bold text-sky-400">
            {PROFILE.initials}
          </span>
          <span>{PROFILE.shortName}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.socials.artstation}
            target="_blank"
            rel="noreferrer"
            aria-label="ArtStation"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:border-amber-400/40 hover:text-amber-300"
          >
            <Box className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-sky-500 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-sky-400"
          >
            Hire / Intern
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-zinc-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3 pt-2 border-t border-white/10">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-zinc-300 hover:text-white"
              >
                GitHub
              </a>
              <span className="text-zinc-600">•</span>
              <a
                href={PROFILE.socials.artstation}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-amber-300 hover:text-amber-200"
              >
                ArtStation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
