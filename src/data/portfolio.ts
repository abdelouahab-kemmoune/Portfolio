export interface SoftwareProject {
  id: string;
  title: string;
  category: "Systems & C/C++" | "DevOps & Network" | "Graphics & Algorithms";
  language: string;
  year: string;
  description: string;
  highlights: string[];
  repoUrl: string;
  featured?: boolean;
}

export interface ArtProject {
  id: string;
  title: string;
  category: string;
  tools: string[];
  description: string;
  image?: string;
  artstationUrl: string;
  accent: "amber" | "cyan" | "violet";
}

export const PROFILE = {
  name: "Abdelouahab Kemmoune",
  shortName: "Abdelouahab K.",
  initials: "AK",
  role: "Software Engineering Student & 3D Artist",
  school: "1337 Coding School (42 Network)",
  location: "Ben Guerir, Morocco",
  availability: "Open to Software Engineering & 3D/Graphics Internships",
  avatar: "/images/avatar-github.jpg",
  bio: "Software engineering student at 1337 with a strong passion for building robust full-stack web applications and high-performance systems. When I'm not coding, I create 3D modeling, animation, texturing, and rendering work in Blender.",
  email: "abdelouahab.kemmoune@gmail.com",
  socials: {
    github: "https://github.com/abdelouahab-kemmoune",
    artstation: "https://www.artstation.com/kemmoune",
    x: "https://x.com/Abd3louahab",
  },
};

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    id: "minishell",
    title: "minishell",
    category: "Systems & C/C++",
    language: "C",
    year: "2025",
    featured: true,
    description:
      "A custom Unix shell built from scratch in C, replicating bash behavior with lexical analysis, command parsing, pipelines, and process management.",
    highlights: [
      "Pipes & I/O redirections",
      "Signal handling (SIGINT/SIGQUIT)",
      "Built-in commands & env expansion",
    ],
    repoUrl: "https://github.com/abdelouahab-kemmoune/minishell",
  },
  {
    id: "inception",
    title: "inception",
    category: "DevOps & Network",
    language: "Dockerfile",
    year: "2026",
    featured: true,
    description:
      "Containerized multi-service web infrastructure orchestrated with Docker Compose, featuring custom-built images, TLS termination, and persistent volumes.",
    highlights: [
      "NGINX with TLSv1.2/1.3",
      "WordPress + PHP-FPM & MariaDB",
      "Isolated Docker bridge network",
    ],
    repoUrl: "https://github.com/abdelouahab-kemmoune/inception",
  },
  {
    id: "philosophers",
    title: "philosophers",
    category: "Systems & C/C++",
    language: "C",
    year: "2025",
    featured: true,
    description:
      "Concurrent simulation of the classic Dining Philosophers problem exploring multithreading, mutex synchronization, and race-condition prevention.",
    highlights: [
      "POSIX threads (pthreads)",
      "Deadlock & starvation avoidance",
      "Precision millisecond monitoring",
    ],
    repoUrl: "https://github.com/abdelouahab-kemmoune/philosophers",
  },
  {
    id: "cpp_modules",
    title: "cpp_modules",
    category: "Systems & C/C++",
    language: "C++",
    year: "2026",
    description:
      "Progressive C++ engineering modules covering object-oriented design, Orthodox Canonical Form, polymorphism, templates, exceptions, and STL containers.",
    highlights: [
      "OOP & polymorphism",
      "Templates & custom iterators",
      "Memory-safe RAII patterns",
    ],
    repoUrl: "https://github.com/abdelouahab-kemmoune/cpp_modules",
  },
  {
    id: "so_long",
    title: "so_long",
    category: "Graphics & Algorithms",
    language: "C",
    year: "2025",
    description:
      "A 2D tile-based game built with MiniLibX, featuring custom sprite rendering, flood-fill path validation, and responsive keyboard event handling.",
    highlights: [
      "MiniLibX 2D rendering",
      "Flood-fill map solvability check",
      "Custom sprites & move counter",
    ],
    repoUrl: "https://github.com/abdelouahab-kemmoune/so_long",
  },
  {
    id: "push_swap",
    title: "push_swap",
    category: "Graphics & Algorithms",
    language: "C",
    year: "2025",
    description:
      "Algorithmic sorting project tasked with sorting integer stacks using a restricted instruction set in the fewest possible operations.",
    highlights: [
      "Two-stack sorting optimization",
      "Complexity & move-count tuning",
      "Custom linked-list data structures",
    ],
    repoUrl: "https://github.com/abdelouahab-kemmoune/push_swap",
  },
  {
    id: "tcp_networking",
    title: "tcp_serv_toupper & web_timer",
    category: "DevOps & Network",
    language: "C++",
    year: "2026",
    description:
      "Low-level C++ TCP client/server networking utilities and timing experiments built on POSIX sockets.",
    highlights: [
      "POSIX TCP socket server & client",
      "Stream buffering & protocol handling",
      "C++ network utilities",
    ],
    repoUrl: "https://github.com/abdelouahab-kemmoune/tcp_serv_toupper",
  },
];

export const ART_PROJECTS: ArtProject[] = [
  {
    id: "art-1",
    title: "Chained Monument",
    category: "Environment & Lighting",
    tools: ["Blender", "Modeling", "Rendering"],
    image: "/images/art/abdelouahab-kemmoune-at3.jpg",
    description:
      "Atmospheric 3D environment featuring a chained crimson monument, foliage, poppies, and moody sky lighting rendered in Blender.",
    artstationUrl: "https://www.artstation.com/kemmoune",
    accent: "amber",
  },
  {
    id: "art-2",
    title: "Vintage Grandfather Clock",
    category: "3D Modeling & Texturing",
    tools: ["Blender", "Modeling", "Texturing"],
    image: "/images/art/abdelouahab-kemmoune-clock2.jpg",
    description:
      "Detailed antique grandfather clock model with carved wood trim, wood-grain texturing, Roman numeral dial, and brass pendulum.",
    artstationUrl: "https://www.artstation.com/kemmoune",
    accent: "cyan",
  },
  {
    id: "art-3",
    title: "Chained Heart",
    category: "Sculpting & Mood",
    tools: ["Blender", "Texturing", "Rendering"],
    image: "/images/art/abdelouahab-kemmoune-room11dsx0-copy.jpg",
    description:
      "Dark crimson composition featuring a suspended anatomical heart bound by chains inside a reflective enclosure.",
    artstationUrl: "https://www.artstation.com/kemmoune",
    accent: "violet",
  },
  {
    id: "art-4",
    title: "LAEDX Digital Studio",
    category: "3D Branding & Animation",
    tools: ["Blender", "Animation", "Rendering"],
    image: "/images/art/abdelouahab-kemmoune-untitled1.jpg",
    description:
      "3D metallic globe and typography brand reveal crafted for LAEDX Digital Studio.",
    artstationUrl: "https://www.artstation.com/kemmoune",
    accent: "cyan",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Systems & Low-Level",
    accent: "cyan",
    items: ["C", "C++", "POSIX Threads", "Unix / Linux", "Sockets & IPC", "Algorithms"],
  },
  {
    title: "Web & Infrastructure",
    accent: "emerald",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Docker", "Nginx"],
  },
  {
    title: "3D Art & Design",
    accent: "amber",
    items: ["Blender", "3D Modeling", "Animation", "Texturing", "Rendering", "Lighting"],
  },
];
