"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ArchiveCardProps = {
  number: string;
  title: string;
  summary: string;
  textEvidence: string;
  historicalNote: string;
  interpretation: string;
  className?: string;
  defaultOpen?: boolean;
};

export function ArchiveCard({
  number,
  title,
  summary,
  textEvidence,
  historicalNote,
  interpretation,
  className,
  defaultOpen = false,
}: ArchiveCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.article
      layout
      className={cn(
        "paper-panel relative flex min-h-80 cursor-pointer flex-col justify-between rounded-[28px] p-6 transition-colors duration-500 hover:border-[var(--moss)]",
        className,
      )}
      onClick={() => setOpen((value) => !value)}
    >
      <div className="space-y-6">
        <div className="eyebrow">{number}</div>
        <div className="space-y-3">
          <h3 className="display-title text-3xl text-[var(--ink)]">{title}</h3>
          <p className="text-base leading-8 text-[var(--ink-soft)]">{summary}</p>
        </div>
      </div>

      <div className="mt-8 border-t border-[var(--grid-line)] pt-4 text-xs tracking-[0.2em] text-[var(--ink-muted)] uppercase">
        {open ? "收起卡片" : "展开卡片"}
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-6 overflow-hidden border-t border-[var(--grid-line)] pt-6"
          >
            <dl className="space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
              <div>
                <dt className="mb-1 text-[11px] tracking-[0.18em] text-[var(--ink-muted)] uppercase">
                  文本处境
                </dt>
                <dd>{textEvidence}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] tracking-[0.18em] text-[var(--ink-muted)] uppercase">
                  时代背景
                </dt>
                <dd>{historicalNote}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] tracking-[0.18em] text-[var(--ink-muted)] uppercase">
                  为什么重要
                </dt>
                <dd>{interpretation}</dd>
              </div>
            </dl>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
