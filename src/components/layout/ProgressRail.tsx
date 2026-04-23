"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sectionOrder } from "@/data/site";
import { cn } from "@/lib/utils";

export function ProgressRail() {
  const [active, setActive] = useState<string>(sectionOrder[0].id);
  const activeSection =
    sectionOrder.find((section) => section.id === active) ?? sectionOrder[0];

  useEffect(() => {
    const sections = sectionOrder
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex xl:right-8">
      <div className="flex flex-col items-end gap-4 rounded-[28px] border border-[var(--grid-line)] bg-white/45 px-3 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3 px-1">
          <motion.span
            key={activeSection.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-[11px] tracking-[0.22em] text-[var(--ink-muted)] uppercase"
          >
            {activeSection.label}
          </motion.span>
          <span className="h-px w-8 bg-[var(--mist)]" />
        </div>
        {sectionOrder.map((section) => {
          const isActive = section.id === active;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-center gap-3"
            >
              <span className="text-[11px] tracking-[0.18em] text-[var(--ink-muted)] opacity-0 transition group-hover:opacity-100">
                {section.label}
              </span>
              <span
                className={cn(
                  "relative block rounded-full border transition-all duration-500",
                  isActive
                    ? "h-3 w-3 border-[var(--rust)] bg-[var(--rust)]"
                    : "h-2 w-2 border-[color:var(--mist)] bg-transparent",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-orbit"
                    className="absolute inset-[-6px] rounded-full border border-[var(--rust)]/25"
                  />
                ) : null}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
