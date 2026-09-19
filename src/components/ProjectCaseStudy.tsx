import type { ComponentType } from "react";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t pt-8">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent-2">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function ProjectCaseStudy({
  project,
  icon: Icon,
}: {
  project: Project;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </a>

          <div className="mt-6 flex items-start gap-4">
            <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-secondary">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{project.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.role} · {project.period}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {project.status}
            </span>
            {project.award && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                🏆 {project.award}
              </span>
            )}
          </div>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.thumbnail} alt={project.name} className="h-auto w-full object-cover" />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-8">
            <Section title="Problem">
              <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
            </Section>

            <Section title="Solution">
              <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </Section>

            <Section title="Key Features">
              <ul className="flex flex-col gap-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {h}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Architecture">
              <ul className="flex flex-col gap-2">
                {project.architecture.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {a}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="My Contribution">
              <p className="text-sm leading-relaxed text-muted-foreground">{project.contribution}</p>
            </Section>

            {project.screenshots && project.screenshots.length > 0 && (
              <Section title="Screenshots">
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((s) => (
                    <div key={s.src} className="overflow-hidden rounded-xl border bg-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.src} alt={s.alt} className="h-auto w-full object-cover" />
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Section title="Challenges">
              <ul className="flex flex-col gap-2">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {c}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="What I Learned">
              <ul className="flex flex-col gap-2">
                {project.learnings.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {l}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {(project.link || project.website) && (
            <div className="mt-10 flex flex-wrap gap-3 border-t pt-8">
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
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
