"use client";

import type { ComponentType } from "react";
import { ExternalLink, Globe } from "lucide-react";
import TiltedCard from "@/components/reactbits/TiltedCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  icon: Icon,
}: {
  project: Project;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          role="button"
          tabIndex={0}
          className="flex h-full cursor-pointer flex-col overflow-hidden border bg-card transition-colors hover:border-primary/50"
        >
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
              <span className="ml-auto text-xs font-medium text-primary">Details →</span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-secondary">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <DialogTitle>{project.name}</DialogTitle>
              <DialogDescription>
                {project.role} · {project.period}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {project.award && (
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            🏆 {project.award}
          </p>
        )}

        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="flex flex-col gap-1.5 border-t pt-4">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>

        <DialogFooter className="gap-2 pt-2">
          {project.link && (
            <Button variant="outline" asChild>
              <a href={project.link} target="_blank" rel="noreferrer">
                <GithubIcon className="h-4 w-4" /> View Code
              </a>
            </Button>
          )}
          {project.website ? (
            <Button asChild>
              <a href={project.website} target="_blank" rel="noreferrer">
                <Globe className="h-4 w-4" /> View Website
              </a>
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              <ExternalLink className="h-4 w-4" /> Not deployed yet
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
