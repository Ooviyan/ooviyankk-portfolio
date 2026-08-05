"use client";

import { Scale, UtensilsCrossed, CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const icons = [Scale, UtensilsCrossed, CalendarDays];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent-2">Projects</h2>
        <p className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
          Things I&apos;ve built and shipped.
        </p>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Click a project to see the full breakdown.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <ProjectCard project={project} icon={icons[i] ?? Scale} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
