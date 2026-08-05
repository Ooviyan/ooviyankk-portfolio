"use client";

import { profile } from "@/lib/data";
import HeroBackground from "@/components/HeroBackground";
import ProfileCard from "@/components/reactbits/ProfileCard";
import SplitText from "@/components/reactbits/SplitText";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <HeroBackground />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-16 sm:pt-28 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            {profile.location} · Open to AI/ML internships & collaborations
          </p>

          <SplitText
            text={profile.name}
            tag="h1"
            className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
            splitType="chars"
            delay={40}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            <span className="text-gradient font-medium">{profile.title}.</span>{" "}
            {profile.blurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              View my work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-[280px] lg:block">
          <ProfileCard
            name={profile.name}
            title="Computer Science Student"
            handle="Ooviyan"
            status="Open to work"
            contactText="Say hi"
            avatarUrl="/avatar.png"
            showUserInfo
            enableTilt
            enableMobileTilt={false}
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            onContactClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
          />
        </div>
      </div>
    </section>
  );
}
