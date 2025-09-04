import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
};

export function Button({ href, onClick, children, className, variant = "solid" }: Props) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-transform duration-150 active:scale-[0.98]";
  const styles = {
    solid: "bg-brand text-white shadow-glow hover:shadow-soft",
    outline: "border border-brand/50 text-brand hover:bg-brand/10",
    ghost: "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
  }[variant];
  const cls = cn(base, styles, className);
  return href ? <Link href={href} className={cls}>{children}</Link> : <button onClick={onClick} className={cls}>{children}</button>;
}
