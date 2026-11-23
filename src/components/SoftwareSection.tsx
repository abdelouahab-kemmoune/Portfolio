"use client";

import { useState } from "react";
import { ArrowUpRight, Terminal, CheckCircle2 } from "lucide-react";
import { SOFTWARE_PROJECTS, SoftwareProject } from "@/data/portfolio";

const CATEGORIES: Array<"All" | SoftwareProject["category"]> = [
  "All",
  "Systems & C/C++",
  "DevOps & Network",
  "Graphics & Algorithms",
];

const LANG_COLORS: Record<string, string> = {
  C: "border-sky-400/30 bg-sky-500/10 text-sky-300",
  "C++": "border-indigo-400/30 bg-indigo-500/10 text-indigo-300",
  Dockerfile: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
};

export function SoftwareSection() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const filtered =
    activeCategory === "All"
      ? SOFTWARE_PROJECTS
      : SOFTWARE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="software" className="py-20 border-t border-white/10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-300">
            <Terminal className="h-3.5 w-3.5" />
            Software Engineering
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected GitHub Works
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Systems programming, Unix internals, containerization, and algorithmic
            projects built at 1337 (42 Network).
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const active = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  active
                    ? "bg-sky-500 text-zinc-950"
                    : "border border-white/10 bg-zinc-900/80 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <a
            key={project.id}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-zinc-900/80"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-md border px-2.5 py-0.5 font-mono text-xs font-medium ${
                    LANG_COLORS[project.language] ??
                    "border-white/10 bg-white/5 text-zinc-300"
                  }`}
                >
                  {project.language}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  {project.year}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <h3 className="font-mono text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </div>

            <ul className="mt-5 space-y-1.5 border-t border-white/10 pt-4">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
