import { cn } from "@/lib/utils";

export function Section({ id, title, subtitle, children, className }: { id?: string, title: string, subtitle?: string, children: React.ReactNode, className?: string }) {
  return (
    <section id={id} className={cn("mx-auto max-w-5xl py-16", className)}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1 opacity-80">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
