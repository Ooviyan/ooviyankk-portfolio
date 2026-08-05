import Reveal from "@/components/Reveal";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Logos3 } from "@/components/blocks/logos3";
import { cn } from "@/lib/utils";
import { profile, education, skills, interests, techLogos } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-20">
      <DotPattern
        className={cn(
          "fill-primary/25 [mask-image:radial-gradient(480px_circle_at_center,white,transparent)]",
        )}
      />

      <div className="relative">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent-2">About</h2>
        </Reveal>

        <div className="mt-6 grid gap-12 sm:grid-cols-5">
          <div className="sm:col-span-3">
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="mb-4 text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="mt-6 rounded-2xl border bg-card p-5">
                <p className="text-sm font-medium text-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground">{education.school}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                  <span className="text-accent-2">{education.status}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{education.cgpa}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-5">
                <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border bg-card px-3 py-1 text-xs text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="sm:col-span-2">
            <Reveal delay={150}>
              <div className="flex flex-col gap-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border bg-card px-3 py-1 text-xs text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300}>
          <Logos3 heading="Tech I work with" logos={techLogos} />
        </Reveal>
      </div>
    </section>
  );
}
