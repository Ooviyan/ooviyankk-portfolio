import Reveal from "@/components/Reveal";
import MagicBento from "@/components/reactbits/MagicBento";

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent-2">Highlights</h2>
        <p className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
          Wins, what I&apos;m building now, and what&apos;s next.
        </p>
      </Reveal>

      <div className="mt-10">
        <MagicBento
          textAutoHide
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          enableMagnetism
          clickEffect
          spotlightRadius={280}
          particleCount={10}
          glowColor="124, 92, 255"
        />
      </div>
    </section>
  );
}
