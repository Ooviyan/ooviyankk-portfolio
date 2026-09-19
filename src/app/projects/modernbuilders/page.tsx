import type { Metadata } from "next";
import { HardHat } from "lucide-react";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { profile, projects } from "@/lib/data";

const project = projects.find((p) => p.slug === "modernbuilders")!;

export const metadata: Metadata = {
  title: `${project.name} — ${profile.name}`,
  description: project.description,
};

export default function ModernBuildersPage() {
  return <ProjectCaseStudy project={project} icon={HardHat} />;
}
