import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  index: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  index,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-grid relative min-h-screen items-stretch border-b border-[var(--grid-line)]/70",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/28 to-transparent" />
      <div className="relative hidden border-r border-[var(--grid-line)]/70 lg:block">
        <span className="absolute left-8 top-12 text-xs tracking-[0.24em] text-[var(--ink-muted)]">
          {index}
        </span>
      </div>
      <div className="section-main relative">
        <span className="eyebrow mb-6 inline-flex lg:hidden">{index}</span>
        {children}
      </div>
      <div className="hidden border-l border-[var(--grid-line)]/70 xl:block" />
    </section>
  );
}
