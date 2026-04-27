import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { archiveCards } from "@/data/site";

export function ConstraintArchiveSection() {
  return (
    <SectionShell id="constraints" index="04" className="py-24 md:py-32">
      <div className="space-y-14">
        <SectionHeader
          index="04"
          eyebrow="Archive"
          title="有些东西牵住了他"
          description="很多东西最初看上去只是外在条件，但在《三四郎》里，它们会慢慢进入一个人的犹疑、克制与错失。"
        />
        <div className="route-plaque max-w-2xl rounded-[26px] p-5">
          <p className="text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            看上去只是犹豫。再往下看，才会发现牵住他的东西并不只在心里。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
          {archiveCards.map((card, index) => (
            <ArchiveCard key={card.number} {...card} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
