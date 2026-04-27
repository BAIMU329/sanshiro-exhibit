import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { QuoteAside } from "@/components/layout/QuoteAside";
import { FadeIn } from "@/components/ui/FadeIn";

const leftColumn = ["地方到东京", "学业与前途", "欲望与迟疑"];
const rightColumn = ["小城到大城", "教育与就业", "选择与延宕"];

export function EchoSection() {
  return (
    <SectionShell id="echo" index="09" className="py-24 md:py-32">
      <div className="relative space-y-14">
        <div className="kanji-ghost absolute right-0 top-0 hidden text-[8rem] leading-none xl:block">
          回声
        </div>
        <QuoteAside
          quote="出口处不该给出过满的答案，而应留下一个仍在震动的问题：为什么青年总是在进入世界时感到迟疑？"
          className="absolute right-0 top-36"
        />
        <FadeIn>
          <SectionHeader
            index="09"
            eyebrow="Echo"
            title="今天再回头看"
            description="《三四郎》并没有因为时间过去而变远。它只是换了一种方式，继续照见今天的青年。"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="route-plaque max-w-2xl rounded-[28px] p-6">
            <p className="display-title text-2xl leading-[1.7] text-[var(--ink)]">
              这不是简单类比。
              <br />
              只是有些青年进入世界时的摇晃，至今仍然熟悉。
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <FadeIn>
            <article className="paper-panel relative rounded-[28px] p-8">
              <span className="absolute left-8 top-0 h-px w-16 bg-[var(--moss)]/70" />
              <p className="eyebrow">《三四郎》</p>
              <ul className="mt-5 space-y-4 text-lg leading-8 text-[var(--ink)]">
                {leftColumn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
          <div className="hidden w-px self-stretch bg-[var(--mist)] md:block" />
          <FadeIn delay={0.12}>
            <article className="paper-panel relative rounded-[28px] p-8">
              <span className="absolute left-8 top-0 h-px w-16 bg-[var(--rust)]/70" />
              <p className="eyebrow">当代青年</p>
              <ul className="mt-5 space-y-4 text-lg leading-8 text-[var(--ink)]">
                {rightColumn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} className="text-center">
          <p className="eyebrow">结构相似，而非完全相同</p>
          <p className="mt-4 display-title text-2xl leading-8 text-[var(--ink-soft)] md:text-3xl md:leading-10">
            时代不同，迷途仍然发生。
          </p>
        </FadeIn>
        <FadeIn delay={0.28}>
          <div className="grid gap-6 border-t border-[var(--grid-line)]/80 pt-8 md:grid-cols-[1.1fr_0.9fr_auto] md:items-end">
            <div className="space-y-3">
              <p className="eyebrow">Afterword</p>
              <p className="text-sm leading-7 text-[var(--ink-soft)]">
                一百多年过去，变化的只是表面形式；那些进入世界时的迟缓、失重与不确定，并没有真正离开。
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href="#hero"
                className="inline-flex items-center gap-4 text-sm tracking-[0.18em] text-[var(--ink-soft)] uppercase transition hover:text-[var(--rust)]"
              >
                <span className="h-px w-12 bg-[var(--mist)]" />
                回到开头
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
