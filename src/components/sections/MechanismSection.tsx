import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { MechanismNode } from "@/components/ui/MechanismNode";
import { mechanism } from "@/data/site";

const mechanismRows = [
  {
    constraint: mechanism.constraints[0],
    reaction: mechanism.interior[0],
    bridge: "支撑未断，独立先迟到",
  },
  {
    constraint: mechanism.constraints[1],
    reaction: mechanism.interior[1],
    bridge: "自由被想象，行动却缩回去",
  },
  {
    constraint: mechanism.constraints[2],
    reaction: mechanism.interior[2],
    bridge: "比较越密，内心越容易摇晃",
  },
  {
    constraint: mechanism.constraints[3],
    reaction: mechanism.interior[3],
    bridge: "规则不明说，只能靠误读摸索",
  },
] as const;

const outcomeNotes = [
  {
    label: mechanism.outcomes[0],
    note: "靠近并没有真正抵达，于是关系总在临门处松开。",
  },
  {
    label: mechanism.outcomes[1],
    note: "判断被拖延，想法很多，动作却越来越轻。",
  },
  {
    label: mechanism.outcomes[2],
    note: "最后留下的不是答案，而是一种尚未完成的自我。",
  },
] as const;

function FlowBar({ dashed = false }: { dashed?: boolean }) {
  return (
    <div className="relative flex h-full min-h-[88px] items-center justify-center">
      <div
        className={[
          "absolute left-3 right-3 top-1/2 -translate-y-1/2 border-t",
          dashed
            ? "border-dashed border-[rgba(93,107,99,0.46)]"
            : "border-[rgba(58,56,52,0.34)]",
        ].join(" ")}
      />
      <span className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--umber)]" />
      <span
        className={[
          "absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full",
          dashed ? "bg-[var(--moss)]" : "bg-[var(--ink-soft)]",
        ].join(" ")}
      />
    </div>
  );
}

export function MechanismSection() {
  return (
    <SectionShell id="mechanism" index="07" className="py-24 md:py-32">
      <div className="space-y-12">
        <FadeIn>
          <SectionHeader
            index="07"
            eyebrow="Mechanism"
            title="于是，世界慢慢进入他"
            description="这里不再把困境和迷途画成一张复杂示意图，而是拆成两段更清楚的过程：先渗入，再沉积。"
          />
        </FadeIn>

        <div className="paper-panel relative overflow-hidden rounded-[36px] px-6 py-12 md:px-10 md:py-14">
          <div className="diagram-glow left-12 top-24 h-40 w-40 bg-[rgba(126,75,58,0.2)]" />
          <div className="diagram-glow right-18 top-44 h-44 w-44 bg-[rgba(93,107,99,0.14)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,22,0.04)_1px,transparent_1px),linear-gradient(rgba(24,24,22,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-35" />

          <div className="relative space-y-8">
            <FadeIn delay={0.08}>
              <div className="rounded-[28px] border border-[var(--grid-line)]/80 bg-white/55 p-5 backdrop-blur-sm md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--grid-line)]/80 pb-4">
                  <div>
                    <p className="eyebrow">Phase 01</p>
                    <h3 className="mt-2 text-xl text-[var(--ink)] md:text-2xl">外在困境如何渗入内心</h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-[15px]">
                    三四郎并不是先有抽象的迷惘，后来才遇到现实压力。恰恰相反，是现实条件一步步改变了他的判断方式。
                  </p>
                </div>

                <div className="mt-6 hidden xl:block">
                  <div className="grid grid-cols-[minmax(0,1fr)_84px_minmax(0,0.95fr)] items-center gap-x-4 px-2 pb-4">
                    <p className="eyebrow">现实困境</p>
                    <p className="eyebrow text-center">渗入</p>
                    <p className="eyebrow text-right">精神反应</p>
                  </div>

                  <div className="space-y-4">
                    {mechanismRows.map((row, index) => (
                      <FadeIn
                        key={row.constraint}
                        delay={0.08 * index}
                        className="grid grid-cols-[minmax(0,1fr)_84px_minmax(0,0.95fr)] items-center gap-x-4"
                      >
                        <MechanismNode
                          label={row.constraint}
                          variant="constraint"
                          className="min-h-[88px] px-6 py-5 text-left"
                        />

                        <div className="relative h-full">
                          <FlowBar />
                          <div className="absolute inset-x-0 bottom-1 text-center text-[10px] tracking-[0.14em] text-[var(--ink-muted)]">
                            {row.bridge}
                          </div>
                        </div>

                        <MechanismNode
                          label={row.reaction}
                          variant="interior"
                          className="min-h-[74px] px-6 py-5"
                        />
                      </FadeIn>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 xl:hidden">
                  {mechanismRows.map((row, index) => (
                    <FadeIn key={row.constraint} delay={0.08 * index}>
                      <div className="rounded-[24px] border border-[var(--grid-line)]/80 bg-white/45 p-4">
                        <div className="grid gap-3">
                          <div>
                            <p className="eyebrow mb-2">现实困境</p>
                            <MechanismNode label={row.constraint} variant="constraint" />
                          </div>
                          <div className="rounded-full border border-[var(--grid-line)]/70 bg-[var(--paper)]/90 px-4 py-2 text-center text-xs leading-6 tracking-[0.08em] text-[var(--ink-muted)]">
                            {row.bridge}
                          </div>
                          <div>
                            <p className="eyebrow mb-2">精神反应</p>
                            <MechanismNode label={row.reaction} variant="interior" />
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="rounded-[28px] border border-[var(--grid-line)]/80 bg-[rgba(248,242,232,0.82)] p-5 backdrop-blur-sm md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--grid-line)]/80 pb-4">
                  <div>
                    <p className="eyebrow">Phase 02</p>
                    <h3 className="mt-2 text-xl text-[var(--ink)] md:text-2xl">这些反应如何沉积成“迷途”</h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-[15px]">
                    情绪不会立刻消失，它们会慢慢沉到行动和关系里，最后表现为错失、停滞和未完成。
                  </p>
                </div>

                <div className="mt-6 hidden xl:grid xl:grid-cols-[190px_1fr] xl:items-start xl:gap-6">
                  <div className="rounded-[24px] border border-[var(--grid-line)]/70 bg-white/50 p-5">
                    <p className="eyebrow">沉积说明</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                      羞怯、犹疑、欲望投射与自我分裂，并不是平行摆着的四个词。
                      它们会在时间里叠加，最终把青年推向一种长期悬置的状态。
                    </p>
                  </div>

                  <div className="relative pt-8">
                    <div className="absolute left-[9%] right-[9%] top-4 border-t border-dashed border-[rgba(93,107,99,0.42)]" />
                    <div className="grid grid-cols-3 gap-4">
                      {outcomeNotes.map((item, index) => (
                        <FadeIn key={item.label} delay={0.12 * (index + 1)} className="relative">
                          <div className="absolute left-1/2 top-[-16px] h-4 -translate-x-1/2 border-l border-dashed border-[rgba(93,107,99,0.42)]" />
                          <div className="rounded-[24px] border border-[var(--grid-line)]/80 bg-white/58 p-5 text-center">
                            <MechanismNode label={item.label} variant="outcome" className="min-h-[72px]" />
                            <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{item.note}</p>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 xl:hidden">
                  {outcomeNotes.map((item, index) => (
                    <FadeIn key={item.label} delay={0.12 * (index + 1)}>
                      <div className="rounded-[24px] border border-[var(--grid-line)]/80 bg-white/56 p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 shrink-0">
                            <FlowBar dashed />
                          </div>
                          <div className="flex-1">
                            <MechanismNode label={item.label} variant="outcome" />
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{item.note}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.35} className="mx-auto max-w-3xl text-center">
          <p className="display-title text-3xl leading-[1.6] text-[var(--ink)] md:text-4xl">
            世界并不只是包围着他。
            <br />
            它会先改变他的判断，再慢慢改变他的命运形状。
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            {"这里的机制不是冷冰冰的流程图，而是《三四郎》里现实如何一点点进入精神生活的轨迹。"}
          </p>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
