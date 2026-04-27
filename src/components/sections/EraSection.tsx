import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";

const milestones = [
  ["1868", "明治维新"],
  ["1890", "帝国大学制度稳定"],
  ["1905", "都市扩张加速"],
  ["1909", "《三四郎》连载"],
];

const statements = [
  "大学开始替青年命名前途，也开始替他们制造比较。",
  "东京不只是首都，它开始要求人学会一种新的分寸。",
  "青年被推到选择面前，却没有同时得到足够稳固的支撑。",
];

export function EraSection() {
  return (
    <SectionShell id="era" index="02" className="py-24 md:py-32">
      <div className="grid gap-12 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-12 2xl:gap-16">
        <FadeIn>
          <div className="route-plaque relative space-y-6 rounded-[28px] p-6">
            <div className="absolute left-0 top-6 h-[calc(100%-3rem)] w-px bg-[var(--mist)]" />
            {milestones.map(([year, label]) => (
              <div key={year} className="relative space-y-1 pl-5">
                <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--rust)]" />
                <p className="eyebrow">{year}</p>
                <p className="text-base text-[var(--ink)]">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-10">
          <FadeIn>
            <SectionHeader
              index="02"
              eyebrow="The Age"
              title="先是时代变了"
              description="《三四郎》的不安并不只属于三四郎自己，它也属于那个刚刚学会现代化、却还没学会安放青年的时代。"
            />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {statements.map((statement, index) => (
              <FadeIn key={statement} delay={0.1 * (index + 1)}>
                <article className="paper-panel relative rounded-[24px] p-6">
                  <div className="absolute left-6 top-0 h-px w-16 bg-[var(--rust)]/60" />
                  <p className="text-base leading-8 text-[var(--ink-soft)]">{statement}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="route-plaque max-w-3xl rounded-[30px] p-8">
              <p className="display-title text-2xl leading-[1.8] text-[var(--ink)] md:text-3xl">
                《三四郎》的迷惘，不只是私人感受。
                <br />
                它是一个时代忽然把青年推到前面时，留下的晃动。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionShell>
  );
}
