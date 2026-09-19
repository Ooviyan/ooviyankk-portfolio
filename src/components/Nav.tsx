"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/data";
import GooeyNav from "@/components/reactbits/GooeyNav";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-foreground">
          {profile.name}
        </Link>

        <div className="hidden sm:block">
          <GooeyNav items={links} initialActiveIndex={-1} />
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-block"
        >
          Say hi
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border text-foreground sm:hidden"
          aria-label="Toggle menu"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} className="text-primary">
                Say hi →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
