import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { MechanismNode } from "@/components/ui/MechanismNode";
import { mechanism } from "@/data/site";

export function MechanismSection() {
  return (
    <SectionShell id="mechanism" index="07" className="py-24 md:py-32">
      <div className="space-y-12">
        <FadeIn>
          <SectionHeader
            index="07"
            eyebrow="Mechanism"
            title="于是，世界慢慢进入他"
            description="在这部小说里，时代并不只是远远地压在青年身上。它会一点点渗进他的感觉、判断和行动里。"
          />
        </FadeIn>

        <div className="paper-panel relative overflow-hidden rounded-[36px] px-6 py-12 md:px-10 md:py-14">
          <div className="diagram-glow left-12 top-24 h-40 w-40 bg-[rgba(126,75,58,0.22)]" />
          <div className="diagram-glow right-20 top-40 h-44 w-44 bg-[rgba(93,107,99,0.18)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,22,0.04)_1px,transparent_1px),linear-gradient(rgba(24,24,22,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-40" />
          <div className="relative hidden px-4 pb-8 xl:grid xl:grid-cols-[180px_1fr_160px] xl:gap-8">
            <p className="eyebrow">现实困境</p>
            <p className="eyebrow text-center">精神反应</p>
            <p className="eyebrow text-right">迷途状态</p>
          </div>

          <div className="relative hidden min-h-[520px] xl:block">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 520" fill="none">
              <path d="M170 88C310 88 360 76 470 88" stroke="rgba(58,56,52,0.45)" strokeWidth="2" />
              <path d="M170 200C308 200 358 160 470 174" stroke="rgba(58,56,52,0.45)" strokeWidth="2" />
              <path d="M170 312C308 312 350 286 470 286" stroke="rgba(58,56,52,0.45)" strokeWidth="2" />
              <path d="M170 424C306 424 352 404 470 398" stroke="rgba(58,56,52,0.45)" strokeWidth="2" />
              <path d="M560 90C688 118 736 130 810 140" stroke="rgba(93,107,99,0.28)" strokeWidth="2" strokeDasharray="8 10" />
              <path d="M600 198C714 220 750 230 846 260" stroke="rgba(93,107,99,0.28)" strokeWidth="2" strokeDasharray="8 10" />
              <path d="M550 320C694 330 748 354 804 388" stroke="rgba(93,107,99,0.28)" strokeWidth="2" strokeDasharray="8 10" />
              <circle cx="170" cy="88" r="4" fill="#7E4B3A" />
              <circle cx="470" cy="88" r="4" fill="#5D6B63" />
              <circle cx="170" cy="200" r="4" fill="#7E4B3A" />
              <circle cx="470" cy="174" r="4" fill="#5D6B63" />
              <circle cx="170" cy="312" r="4" fill="#7E4B3A" />
              <circle cx="470" cy="286" r="4" fill="#5D6B63" />
              <circle cx="170" cy="424" r="4" fill="#7E4B3A" />
              <circle cx="470" cy="398" r="4" fill="#5D6B63" />
            </svg>

            <div className="absolute left-4 top-10 flex w-[180px] flex-col gap-7">
              {mechanism.constraints.map((label, index) => (
                <FadeIn key={label} delay={0.1 * index}>
                  <MechanismNode label={label} variant="constraint" />
                </FadeIn>
              ))}
            </div>

            <div className="absolute left-[38%] top-8 flex w-[150px] flex-col gap-10">
              {mechanism.interior.map((label, index) => (
                <FadeIn key={label} delay={0.12 * (index + 1)}>
                  <MechanismNode
                    label={label}
                    variant="interior"
                    className={index % 2 === 0 ? "translate-x-0" : "translate-x-10"}
                  />
                </FadeIn>
              ))}
            </div>

            <div className="absolute right-6 top-16 flex w-[150px] flex-col gap-12">
              {mechanism.outcomes.map((label, index) => (
                <FadeIn key={label} delay={0.16 * (index + 2)}>
                  <MechanismNode
                    label={label}
                    variant="outcome"
                    className={index === 1 ? "translate-x-10" : ""}
                  />
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="relative grid gap-8 xl:hidden">
            <div className="space-y-4">
              <p className="eyebrow">现实困境</p>
              <div className="grid gap-3">
                {mechanism.constraints.map((label) => (
                  <MechanismNode key={label} label={label} variant="constraint" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="eyebrow">精神反应</p>
              <div className="grid gap-3">
                {mechanism.interior.map((label) => (
                  <MechanismNode key={label} label={label} variant="interior" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="eyebrow">迷途状态</p>
              <div className="grid gap-3">
                {mechanism.outcomes.map((label) => (
                  <MechanismNode key={label} label={label} variant="outcome" />
                ))}
              </div>
            </div>

            <div className="absolute left-[31%] top-[44%] rounded-full border border-[var(--grid-line)]/80 bg-white/40 px-3 py-2 text-[11px] tracking-[0.16em] text-[var(--ink-muted)] backdrop-blur-sm">
              structure → response
            </div>

            <div className="absolute right-[14%] top-[18%] max-w-[180px] text-right">
              <p className="eyebrow">Suspension</p>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                越靠近结果，行动越变得稀薄，关系开始以“未完成”的方式存在。
              </p>
            </div>
          </div>
        </div>

        <FadeIn delay={0.35} className="mx-auto max-w-3xl text-center">
          <p className="display-title text-3xl leading-[1.6] text-[var(--ink)] md:text-4xl">
            世界并不只是包围着他。
            <br />
            它会慢慢进入他，改变他的迟疑、靠近与错失。
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            {"“困境 -> 冲突 -> 迷途”在这里不是僵硬公式，而更像小说里一圈圈扩散开的波纹。"}
          </p>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
