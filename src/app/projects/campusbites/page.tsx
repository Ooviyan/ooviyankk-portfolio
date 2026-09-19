import type { Metadata } from "next";
import { UtensilsCrossed } from "lucide-react";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { profile, projects } from "@/lib/data";

const project = projects.find((p) => p.slug === "campusbites")!;

export const metadata: Metadata = {
  title: `${project.name} — ${profile.name}`,
  description: project.description,
};

export default function CampusBitesPage() {
  return <ProjectCaseStudy project={project} icon={UtensilsCrossed} />;
}
