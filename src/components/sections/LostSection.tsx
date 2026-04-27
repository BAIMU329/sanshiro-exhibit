import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";

export function LostSection() {
  return (
    <SectionShell id="lost" index="08" className="py-24 md:py-32">
      <div className="relative flex min-h-[70svh] flex-col items-center justify-center text-center">
        <div className="kanji-ghost absolute right-0 top-0 hidden text-[8rem] leading-none xl:block">
          羊
        </div>
        <FadeIn>
          <p className="display-title text-4xl leading-[1.7] md:text-6xl">
            最后留下的，是迷途。
          </p>
        </FadeIn>
        <FadeIn delay={0.25} className="mt-10 max-w-2xl">
          <p className="text-lg leading-9 text-[var(--ink-soft)] md:text-2xl md:leading-10">
            它不是失败。
            <br />
            是一个人还没有长成自己时，最诚实的形状。
          </p>
        </FadeIn>
        <FadeIn delay={0.35} className="mt-10">
          <div className="route-plaque rounded-[24px] px-5 py-4">
            <p className="eyebrow">迷える羊</p>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
              旧的确定感已经开始松开，新的自我却还没有长成。
            </p>
          </div>
        </FadeIn>
        <div className="mt-20 h-24 w-40 rounded-[50%] border border-[var(--grid-line)]/70 opacity-30" />
      </div>
    </SectionShell>
  );
}
