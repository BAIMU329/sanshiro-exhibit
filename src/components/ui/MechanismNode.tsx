import { cn } from "@/lib/utils";

type MechanismNodeProps = {
  label: string;
  variant: "constraint" | "interior" | "outcome";
  className?: string;
};

const styles = {
  constraint:
    "rounded-[20px] border border-[var(--grid-line)] bg-[var(--paper-2)] px-5 py-4 text-[var(--ink)] shadow-[0_12px_36px_rgba(24,24,22,0.04)]",
  interior:
    "rounded-full border border-[var(--moss)]/20 bg-[color:rgba(93,107,99,0.10)] px-5 py-3 text-[var(--ink)]",
  outcome:
    "rounded-full border border-[var(--grid-line)] bg-white/50 px-5 py-3 text-[var(--ink-soft)]",
};

export function MechanismNode({
  label,
  variant,
  className,
}: MechanismNodeProps) {
  return (
    <div
      className={cn(
        "text-center text-sm leading-6 md:text-base",
        styles[variant],
        className,
      )}
    >
      {label}
    </div>
  );
}
