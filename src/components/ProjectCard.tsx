import type { ComponentType } from "react";
import Link from "next/link";
import TiltedCard from "@/components/reactbits/TiltedCard";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  icon: Icon,
}: {
  project: Project;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card className="flex h-full cursor-pointer flex-col overflow-hidden border bg-card transition-colors hover:border-primary/50">
        <CardContent className="flex h-full flex-col gap-4 p-5">
          <TiltedCard
            imageSrc={project.thumbnail}
            altText={project.name}
            captionText={project.name}
            containerHeight="180px"
            containerWidth="100%"
            imageHeight="180px"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={false}
          />

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-secondary">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
              <p className="text-xs text-muted-foreground">
                {project.role} · {project.period}
              </p>
            </div>
          </div>

          {project.award && (
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              🏆 {project.award}
            </p>
          )}

          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                +{project.tech.length - 3} more
              </span>
            )}
            <span className="ml-auto text-xs font-medium text-primary">View Project →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
