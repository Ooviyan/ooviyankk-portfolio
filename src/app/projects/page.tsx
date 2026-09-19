import type { Metadata } from "next";
import { Scale, UtensilsCrossed, CalendarDays, HardHat } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "A breakdown of what I've built and shipped, and what I'm building now.",
};

const icons = [Scale, UtensilsCrossed, CalendarDays, HardHat];

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="text-sm font-medium uppercase tracking-widest text-accent-2">Projects</h1>
          <p className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
            Things I&apos;ve built and I&apos;m building.
          </p>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Click a project for the full case study — problem, architecture, and what I learned.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} icon={icons[i] ?? Scale} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
