"use client";
import { motion } from "framer-motion";

export function AnimatedText({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
