import { site } from "@/content/site";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm opacity-70">© {new Date().getFullYear()} {site.owner}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {site.links.github && <Link href={site.links.github} aria-label="GitHub" className="opacity-80 hover:opacity-100"><Github size={18} /></Link>}
          {site.links.linkedin && <Link href={site.links.linkedin} aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><Linkedin size={18} /></Link>}
          {site.links.email && <Link href={`mailto:${site.links.email}`} aria-label="Email" className="opacity-80 hover:opacity-100"><Mail size={18} /></Link>}
        </div>
      </div>
    </footer>
  );
}
