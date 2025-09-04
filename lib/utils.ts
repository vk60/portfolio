import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // @ts-ignore twMerge is optional; fall back to clsx if absent
  return (twMerge ? twMerge(clsx(inputs)) : clsx(inputs)) as string;
}
