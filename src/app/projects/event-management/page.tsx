import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { profile, projects } from "@/lib/data";

const project = projects.find((p) => p.slug === "event-management")!;

export const metadata: Metadata = {
  title: `${project.name} — ${profile.name}`,
  description: project.description,
};

export default function EventManagementPage() {
  return <ProjectCaseStudy project={project} icon={CalendarDays} />;
}
