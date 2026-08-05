import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border bg-card px-8 py-14 text-center sm:py-20">
          <div className="animate-float absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

          <h2 className="text-sm font-medium uppercase tracking-widest text-accent-2">Contact</h2>
          <p className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Have a project, internship, or just want to talk tech?
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            I&apos;m always up for building something new — reach out and I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="rounded-full border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {profile.phone}
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
