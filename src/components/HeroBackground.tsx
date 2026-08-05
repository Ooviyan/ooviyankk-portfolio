export default function HeroBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-50 [mask-image:radial-gradient(900px_circle_at_75%_20%,white,transparent)]"
    >
      <filter id="dither-noise" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" result="noise" />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.3 0.3 0.3 0 0" result="gray" />
        <feComponentTransfer in="gray" result="dithered">
          <feFuncA type="discrete" tableValues="0 0 0.15 0.3 0.45 0.6" />
        </feComponentTransfer>
        <feColorMatrix in="dithered" type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.35  0 0 0 0 0.4  0 0 0 1 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#dither-noise)" />
    </svg>
  );
}
