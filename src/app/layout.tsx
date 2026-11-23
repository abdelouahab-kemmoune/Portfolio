import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdelouahab Kemmoune — Software Engineer & 3D Artist",
  description:
    "Portfolio of Abdelouahab Kemmoune, software engineering student at 1337 (42 Network) specializing in C/C++, TypeScript/Next.js, Docker, and 3D modeling, animation, texturing, and rendering in Blender.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full bg-zinc-950 text-zinc-100 selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
