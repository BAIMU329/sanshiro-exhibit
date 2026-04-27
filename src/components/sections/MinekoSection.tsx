import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";

const signals = [
  { label: "被观看", className: "left-[11%] top-[16%]" },
  { label: "未抵达", className: "right-[10%] top-[28%]" },
  { label: "始终错位", className: "right-[9%] bottom-[15%]" },
];

export function MinekoSection() {
  return (
    <SectionShell id="mineko" index="06" className="py-24 md:py-36">
      <div className="relative">
        <div className="kanji-ghost absolute right-8 top-0 hidden text-[10rem] leading-none xl:block">
          迷
        </div>

        <FadeIn>
          <SectionHeader
            index="06"
            eyebrow="Mineko"
            title="他也开始看不清一个人"
            description="她并不遥远。真正难的是，越靠近，越难确认自己究竟看见了谁。"
            className="relative z-10 max-w-2xl"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 xl:grid-cols-[200px_minmax(0,1fr)] xl:gap-14">
          <div className="hidden xl:flex xl:flex-col xl:justify-between">
            <FadeIn delay={0.12}>
              <div className="route-plaque rounded-[24px] p-5 opacity-92">
                <p className="eyebrow">gaze</p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  越试图靠近她，判断越容易失焦。问题不只是她难懂，而是三四郎还没有足够稳定的目光。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-[24px] border border-[var(--grid-line)]/70 bg-white/36 p-5 opacity-88 backdrop-blur-sm">
                <p className="font-[var(--font-display)] text-lg tracking-[0.24em] text-[var(--rust)]">
                  stray sheep
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  这并不只是调情式称呼。它更像一句判断：
                  他们都还在寻找自己该站的位置。
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mineko-stage relative min-h-[880px] overflow-hidden rounded-[42px] border border-[var(--grid-line)]/70 px-6 py-8 md:px-10 md:py-10">
            <div className="mineko-stage-glow absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-[rgba(126,75,58,0.16)] blur-3xl" />
            <div className="mineko-stage-glow absolute right-[10%] top-[42%] h-48 w-48 rounded-full bg-[rgba(93,107,99,0.12)] blur-3xl" />

            <div className="mineko-axis absolute left-[16%] top-[14%] hidden h-[72%] w-px xl:block" />
            <div className="mineko-axis mineko-axis-dark absolute left-[49%] top-[10%] hidden h-[76%] w-px xl:block" />

            <div className="water-mist absolute inset-x-[8%] top-[16%] h-[480px] rounded-full opacity-90" />
            <div className="mineko-reflection absolute left-[56%] top-[44%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2" />
            <div className="mineko-silhouette absolute left-[58%] top-[42%] h-[280px] w-[170px] -translate-x-1/2 -translate-y-1/2" />
            <div className="mineko-echo absolute left-[54%] top-[47%] h-[300px] w-[210px] -translate-x-1/2 -translate-y-1/2" />
            <div className="mineko-shadow absolute left-[60%] top-[50%] h-[210px] w-[130px] -translate-x-1/2 -translate-y-1/2" />

            <div className="wave-ring" />
            <div className="wave-ring" style={{ width: 342, height: 148, opacity: 0.68 }} />
            <div className="wave-ring" style={{ width: 434, height: 178, opacity: 0.4 }} />

            <div className="mineko-thread absolute left-[22%] right-[16%] top-[48%] hidden xl:block" />
            <div className="mineko-thread absolute left-[28%] right-[22%] top-[58%] hidden xl:block opacity-55" />

            <div className="sheep-mark left-[38%] top-[69%] h-9 w-16" />
            <div className="sheep-mark left-[44%] top-[71%] h-8 w-14" />
            <div className="sheep-mark left-[50%] top-[73%] h-7 w-12" />

            <div className="absolute left-1/2 top-[13%] -translate-x-1/2 text-center">
              <p className="font-[var(--font-display)] text-[0.95rem] tracking-[0.34em] text-[var(--rust)]/70 uppercase">
                mineko
              </p>
            </div>

            <FadeIn delay={0.18} className="absolute left-6 top-6 max-w-[210px] md:left-8 md:top-8">
              <div className="rounded-[24px] border border-[var(--grid-line)]/70 bg-white/40 p-4 backdrop-blur-sm">
                <p className="eyebrow">Misreading</p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  越靠近她，三四郎越发现自己未必真的看见了她。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.24} className="absolute bottom-6 right-6 max-w-[240px] md:bottom-8 md:right-8">
              <div className="rounded-[24px] border border-[var(--grid-line)]/70 bg-white/34 p-4 backdrop-blur-sm">
                <p className="eyebrow">Afterimage</p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  她留下的不是答案，而是一层余影。关系总像看似靠近，却始终隔着水面。
                </p>
              </div>
            </FadeIn>

            <div className="absolute left-[18%] top-[14%] hidden xl:block">
              <p className="font-[var(--font-display)] text-[5rem] leading-none text-[rgba(24,24,22,0.045)]">
                stray
              </p>
            </div>
            <div className="absolute left-[52%] top-[62%] hidden xl:block">
              <p className="font-[var(--font-display)] text-[4.2rem] leading-none text-[rgba(24,24,22,0.038)]">
                sheep
              </p>
            </div>

            {signals.map((signal, index) => (
              <FadeIn
                key={signal.label}
                delay={0.12 * (index + 1)}
                className={`absolute ${signal.className}`}
              >
                <div className="mineko-tag">
                  <span className="h-px w-8 bg-[var(--mist)]" />
                  <p className="text-base font-medium text-[var(--ink-soft)] md:text-lg">
                    {signal.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} className="relative z-10 mt-12 max-w-[42rem] md:ml-[32%]">
          <p className="display-title text-[2rem] leading-[1.55] text-[var(--ink)] md:text-[3rem] md:leading-[1.45]">
            他并不是没有靠近她。
            <br />
            只是每靠近一步，她就更像一层倒影。
          </p>
          <p className="mt-6 max-w-lg text-sm leading-8 text-[var(--ink-soft)]/88 md:text-[1rem]">
            到了这里，误解已经不是偶然失手，而成了关系本身的一部分。
          </p>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
