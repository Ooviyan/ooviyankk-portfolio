import type { Metadata } from "next";
import { Scale } from "lucide-react";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { profile, projects } from "@/lib/data";

const project = projects.find((p) => p.slug === "cleardoc")!;

export const metadata: Metadata = {
  title: `${project.name} — ${profile.name}`,
  description: project.description,
};

export default function ClearDocPage() {
  return <ProjectCaseStudy project={project} icon={Scale} />;
}
