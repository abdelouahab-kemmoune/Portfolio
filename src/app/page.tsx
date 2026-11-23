import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Box,
  ArrowDownRight,
  Cpu,
  Code2,
  Sparkles,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { SoftwareSection } from "@/components/SoftwareSection";
import { ArtSection } from "@/components/ArtSection";
import { ContactSection } from "@/components/ContactSection";
import { PROFILE, SKILL_GROUPS } from "@/data/portfolio";

const SKILL_BADGE_MAP: Record<string, string> = {
  cyan: "border-sky-400/20 bg-sky-500/10 text-sky-300",
  emerald: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
  amber: "border-amber-400/20 bg-amber-500/10 text-amber-300",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 bg-grid-subtle">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {PROFILE.availability}
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {PROFILE.name}
              </h1>

              <p className="mt-3 font-mono text-sm text-sky-400 sm:text-base">
                {PROFILE.role}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {PROFILE.bio}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#software"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-sky-400"
                >
                  Explore Projects
                  <ArrowDownRight className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={PROFILE.socials.artstation}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-500/20"
                >
                  <Box className="h-4 w-4" />
                  ArtStation
                </a>
              </div>
            </div>

            {/* Profile Card with Avatar */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur-sm">
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-sky-500/20 via-transparent to-amber-500/20 opacity-60" />
                <div className="relative">
                  <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl border border-white/15 bg-zinc-950">
                    <Image
                      src={PROFILE.avatar}
                      alt={PROFILE.name}
                      fill
                      priority
                      unoptimized
                      sizes="260px"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-5 space-y-2.5 border-t border-white/10 pt-5 text-sm">
                    <div className="flex items-center gap-2.5 text-zinc-300">
                      <GraduationCap className="h-4 w-4 shrink-0 text-sky-400" />
                      <span>{PROFILE.school}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-zinc-300">
                      <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                      <span>{PROFILE.location}</span>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-2.5">
                      <div className="font-mono text-base font-bold text-white">
                        15+
                      </div>
                      <div className="text-[11px] text-zinc-400">Repos</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-2.5">
                      <div className="font-mono text-base font-bold text-sky-300">
                        C / C++
                      </div>
                      <div className="text-[11px] text-zinc-400">Systems</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-2.5">
                      <div className="font-mono text-base font-bold text-amber-300">
                        3D
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        Blender
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual-Discipline Highlights */}
        <section id="about" className="py-12 border-t border-white/10">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
              <Cpu className="h-6 w-6 text-sky-400" />
              <h3 className="mt-4 text-base font-semibold text-white">
                Systems &amp; Low-Level Engineering
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Strong foundation in C, C++, Unix internals, memory management,
                concurrency, and socket programming through the 1337 (42)
                curriculum.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
              <Code2 className="h-6 w-6 text-emerald-400" />
              <h3 className="mt-4 text-base font-semibold text-white">
                Full-Stack &amp; Containerization
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Building clean web interfaces with TypeScript, React, and
                Next.js, alongside Dockerized multi-service infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
              <Sparkles className="h-6 w-6 text-amber-400" />
              <h3 className="mt-4 text-base font-semibold text-white">
                3D Modeling, Animation &amp; Rendering
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Combining engineering precision with creative 3D work in
                Blender—modeling, animation, texturing, and final rendering.
              </p>
            </div>
          </div>
        </section>

        {/* Software Engineering Section */}
        <SoftwareSection />

        {/* 3D Art Section */}
        <ArtSection />

        {/* Tech Stack Section */}
        <section id="stack" className="py-20 border-t border-white/10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technical Stack
            </h2>
            <p className="mt-2 text-sm text-zinc-400 sm:text-base">
              Tools and technologies I use across software engineering and 3D
              production.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
              >
                <h3 className="text-base font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-1.5 font-mono text-xs ${
                        SKILL_BADGE_MAP[group.accent] ??
                        "border-white/10 bg-white/5 text-zinc-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
