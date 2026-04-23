"use client";

import { motion } from "framer-motion";

type SceneWindowProps = {
  title: string;
  keyword: string;
  quote: string;
  description: string;
  className?: string;
};

export function SceneWindow({
  title,
  keyword,
  quote,
  description,
  className,
}: SceneWindowProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className={`paper-panel group relative overflow-hidden rounded-[24px] p-6 ${className ?? ""}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-y-6 right-6 w-px bg-gradient-to-b from-transparent via-[var(--mist)]/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--rust)]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="eyebrow">{title}</p>
          <h3 className="display-title text-2xl text-[var(--ink)]">{keyword}</h3>
        </div>
        <p className="text-base leading-7 text-[var(--ink)]/80 transition duration-500 group-hover:text-[var(--ink)]">
          {quote}
        </p>
        <p className="max-h-0 overflow-hidden text-sm leading-7 text-[var(--ink-soft)] transition-all duration-500 group-hover:max-h-40">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
