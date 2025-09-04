"use client";
import Link from "next/link";
import { site, nav } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-5xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-2xl tracking-tight">{site.owner}</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map(i => <Link key={i.href} href={i.href} className="opacity-80 hover:opacity-100">{i.label}</Link>)}
          <ThemeToggle />
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center gap-2 text-sm opacity-80">
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3">
            {nav.map(i => <Link key={i.href} href={i.href} className="opacity-90" onClick={()=>setOpen(false)}>{i.label}</Link>)}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
