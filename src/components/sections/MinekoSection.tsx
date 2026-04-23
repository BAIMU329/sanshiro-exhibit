import { QuoteAside } from "@/components/layout/QuoteAside";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";

const phrases = [
  { label: "被观看", className: "left-[14%] top-[28%]" },
  { label: "不可把握", className: "right-[10%] top-[24%]" },
  { label: "似乎靠近", className: "left-[10%] bottom-[28%]" },
  { label: "始终错位", className: "right-[8%] bottom-[24%]" },
];

export function MinekoSection() {
  return (
    <SectionShell id="mineko" index="06" className="py-24 md:py-36">
      <div className="relative min-h-[920px]">
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

        <QuoteAside
          quote="在这里，情感不再只是情感。它也考验一个青年能否真正看见他人，又能否真正看见自己。"
          className="absolute right-0 top-56"
        />

        <div className="relative mt-20 min-h-[560px]">
          <div className="water-mist absolute inset-x-[16%] top-8 h-[420px] rounded-full" />
          <div className="ambient-float ambient-pulse absolute left-1/2 top-[44%] h-[280px] w-[480px] -translate-x-1/2 rounded-[999px] border border-[rgba(93,107,99,0.18)] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),rgba(200,194,184,0.18),transparent_72%)] shadow-[0_30px_90px_rgba(24,24,22,0.06)]" />
          <div className="absolute left-1/2 top-[44%] h-[190px] w-[120px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(24,24,22,0.14),rgba(24,24,22,0.02),transparent)] opacity-35 blur-md" />
          <div className="wave-ring" />
          <div className="wave-ring" style={{ width: 320, height: 138, opacity: 0.65 }} />
          <div className="wave-ring" style={{ width: 380, height: 160, opacity: 0.45 }} />
          <div className="sheep-mark left-[32%] top-[62%] h-9 w-16" />
          <div className="sheep-mark left-[38%] top-[64%] h-8 w-14" />
          <div className="sheep-mark left-[44%] top-[66%] h-7 w-12" />

          {phrases.map((phrase, index) => (
            <FadeIn
              key={phrase.label}
              delay={0.15 * (index + 1)}
              className={`absolute ${phrase.className}`}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--mist)]" />
                <p className="text-lg font-medium text-[var(--ink-soft)] md:text-xl">
                  {phrase.label}
                </p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.18} className="route-plaque absolute left-6 top-[24%] hidden max-w-[220px] rounded-[22px] p-4 lg:block">
            <p className="eyebrow">gaze</p>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
              她既像人物，也像一种气候，使三四郎不断在靠近与误解之间来回摆动。
            </p>
          </FadeIn>

          <FadeIn delay={0.28} className="route-plaque absolute right-10 top-[58%] hidden max-w-[220px] rounded-[22px] p-4 lg:block">
            <p className="eyebrow">distance</p>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
              水面让接近看起来更容易，也让真正的理解变得更远。
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="relative z-10 mt-8 max-w-xl md:ml-[32%]">
          <p className="display-title text-3xl leading-[1.6] text-[var(--ink)] md:text-4xl">
            他并不是不曾靠近她。
            <br />
            他只是始终无法确认，自己是否真正理解了她。
          </p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            到了这里，关系已经不再只是关系。
            它开始暴露一个青年究竟如何理解他人，也如何误解自己。
          </p>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
