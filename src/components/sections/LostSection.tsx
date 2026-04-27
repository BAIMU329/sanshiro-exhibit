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
          <p className="display-title max-w-4xl text-[2.5rem] leading-[1.55] md:text-[4.4rem] md:leading-[1.45]">
            最后留下的，是迷途。
          </p>
        </FadeIn>
        <FadeIn delay={0.25} className="mt-10 max-w-2xl">
          <p className="display-title text-[1.7rem] leading-[1.55] text-[var(--ink-soft)] md:text-[2.6rem] md:leading-[1.5]">
            它不是失败。
            <br />
            是一个人还没有长成自己时，最诚实的形状。
          </p>
        </FadeIn>
        <FadeIn delay={0.35} className="mt-12">
          <div className="route-plaque max-w-md rounded-[24px] px-5 py-4">
            <p className="eyebrow">迷える羊</p>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]/88">
              旧的确定感已经开始松开，新的自我却还没有长成。
            </p>
          </div>
        </FadeIn>
        <div className="mt-24 h-24 w-40 rounded-[50%] border border-[var(--grid-line)]/55 opacity-25" />
      </div>
    </SectionShell>
  );
}
