import { QuoteAside } from "@/components/layout/QuoteAside";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";

const phrases = [
  { label: "被观看", className: "left-[12%] top-[24%]" },
  { label: "不可把握", className: "right-[11%] top-[20%]" },
  { label: "似乎靠近", className: "left-[9%] bottom-[22%]" },
  { label: "始终错位", className: "right-[9%] bottom-[19%]" },
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
            description="她并不只是一个人物。她更像一种让人不断靠近、又不断失去把握的存在。"
            className="relative z-10"
          />
        </FadeIn>

        <div className="mt-16 grid items-start gap-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-14">
          <div className="space-y-5">
            <FadeIn delay={0.12}>
              <div className="route-plaque rounded-[24px] p-5">
                <p className="eyebrow">gaze</p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  她既像人物，也像一种气候。人越试图靠近她，就越暴露出自己的判断仍未成形。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="route-plaque rounded-[24px] p-5">
                <p className="eyebrow">distance</p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  水面、倒影、语言里的暗示，都让接近看起来更容易，也让真正的理解更难确认。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.28}>
              <div className="rounded-[24px] border border-[var(--grid-line)]/80 bg-white/42 p-5">
                <p className="font-[var(--font-display)] text-lg tracking-[0.24em] text-[var(--rust)]">
                  stray sheep
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  这并不只是调情式称呼。它更像一句温柔却锋利的判断：
                  他们都还没有真正找到自己要站的位置。
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="relative min-h-[760px] rounded-[36px] border border-[var(--grid-line)]/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(255,255,255,0.16))] px-5 py-8 md:px-10 md:py-10">
            <QuoteAside
              quote="在这里，情感不再只是情感。它也考验一个青年能否真正看见他人，又能否真正看见自己。"
              className="absolute right-8 top-8 max-w-52"
            />

            <div className="mineko-thread absolute left-[14%] right-[14%] top-[46%] hidden xl:block" />
            <div className="mineko-thread absolute left-[28%] right-[22%] top-[58%] hidden xl:block opacity-55" />
            <div className="water-mist absolute inset-x-[11%] top-20 h-[460px] rounded-full" />
            <div className="mineko-reflection absolute left-[52%] top-[45%] h-[360px] w-[560px] -translate-x-1/2 -translate-y-1/2" />
            <div className="ambient-float ambient-pulse absolute left-[52%] top-[45%] h-[330px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[rgba(93,107,99,0.18)] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78),rgba(200,194,184,0.18),transparent_74%)] shadow-[0_30px_90px_rgba(24,24,22,0.06)]" />
            <div className="absolute left-[52%] top-[45%] h-[220px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,rgba(24,24,22,0.16),rgba(24,24,22,0.03),transparent)] opacity-35 blur-md" />
            <div className="wave-ring" />
            <div className="wave-ring" style={{ width: 320, height: 138, opacity: 0.7 }} />
            <div className="wave-ring" style={{ width: 410, height: 170, opacity: 0.46 }} />
            <div className="sheep-mark left-[34%] top-[68%] h-9 w-16" />
            <div className="sheep-mark left-[40%] top-[70%] h-8 w-14" />
            <div className="sheep-mark left-[46%] top-[72%] h-7 w-12" />

            <div className="absolute left-8 top-8 max-w-[180px] rounded-[24px] border border-[var(--grid-line)]/80 bg-white/45 p-4">
              <p className="eyebrow">Misreading</p>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                越靠近她，三四郎越发现自己不是在理解她，而是在试图理解自己对她的理解。
              </p>
            </div>

            <div className="absolute bottom-8 right-8 max-w-[220px] rounded-[24px] border border-[var(--grid-line)]/80 bg-white/40 p-4">
              <p className="eyebrow">Afterimage</p>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                她留下的不是确定答案，而是一层余影，使关系始终停留在“似乎懂了”与“其实没有”之间。
              </p>
            </div>

            <div className="absolute left-1/2 top-[15%] -translate-x-1/2 text-center">
              <p className="font-[var(--font-display)] text-[1.05rem] tracking-[0.36em] text-[var(--rust)]/75 uppercase">
                mineko
              </p>
            </div>

            {phrases.map((phrase, index) => (
              <FadeIn
                key={phrase.label}
                delay={0.14 * (index + 1)}
                className={`absolute ${phrase.className}`}
              >
                <div className="mineko-tag">
                  <span className="h-px w-8 bg-[var(--mist)]" />
                  <p className="text-base font-medium text-[var(--ink-soft)] md:text-lg">
                    {phrase.label}
                  </p>
                </div>
              </FadeIn>
            ))}

            <div className="absolute left-1/2 top-[33%] hidden -translate-x-[10%] xl:block">
              <p className="font-[var(--font-display)] text-[4.8rem] leading-none text-[rgba(24,24,22,0.05)]">
                stray
              </p>
            </div>
            <div className="absolute left-1/2 top-[58%] hidden translate-x-[2%] xl:block">
              <p className="font-[var(--font-display)] text-[4.2rem] leading-none text-[rgba(24,24,22,0.045)]">
                sheep
              </p>
            </div>
          </div>
        </div>

        <FadeIn delay={0.3} className="relative z-10 mt-10 max-w-2xl md:ml-[30%]">
          <p className="display-title text-3xl leading-[1.6] text-[var(--ink)] md:text-4xl">
            他并不是不曾靠近她。
            <br />
            他只是始终无法确认，自己靠近的究竟是她，还是自己的投射。
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            到了这里，关系已经不再只是关系。它开始暴露一个青年究竟如何理解他人，也如何在理解他人的过程中误解自己。
          </p>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
