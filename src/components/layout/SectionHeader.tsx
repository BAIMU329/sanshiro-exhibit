import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  index,
  title,
  eyebrow,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-xl space-y-4", className)}>
      <div className="eyebrow">
        {index}
        {eyebrow ? ` / ${eyebrow}` : ""}
      </div>
      <h2 className="display-title text-4xl leading-tight font-semibold text-[var(--ink)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-lg text-base leading-8 text-[var(--ink-soft)] md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
