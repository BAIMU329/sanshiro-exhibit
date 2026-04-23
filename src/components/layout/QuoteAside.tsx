import { cn } from "@/lib/utils";

type QuoteAsideProps = {
  quote: string;
  className?: string;
};

export function QuoteAside({ quote, className }: QuoteAsideProps) {
  return (
    <aside
      className={cn(
        "hidden max-w-44 border-l border-[var(--rust)]/70 pl-4 text-sm leading-6 text-[var(--ink-soft)] xl:block",
        className,
      )}
    >
      {quote}
    </aside>
  );
}
