import type { CSSProperties } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { MechanismNode } from "@/components/ui/MechanismNode";
import { mechanism } from "@/data/site";

const constraintNodes = [
  { label: mechanism.constraints[0], x: 170, y: 88, width: 190, delay: 0 },
  { label: mechanism.constraints[1], x: 170, y: 200, width: 190, delay: 0.1 },
  { label: mechanism.constraints[2], x: 170, y: 312, width: 190, delay: 0.2 },
  { label: mechanism.constraints[3], x: 170, y: 424, width: 190, delay: 0.3 },
];

const interiorNodes = [
  { label: mechanism.interior[0], x: 470, y: 88, width: 164, delay: 0.12 },
  { label: mechanism.interior[1], x: 500, y: 174, width: 164, delay: 0.24 },
  { label: mechanism.interior[2], x: 470, y: 286, width: 164, delay: 0.36 },
  { label: mechanism.interior[3], x: 500, y: 398, width: 164, delay: 0.48 },
];

const outcomeNodes = [
  { label: mechanism.outcomes[0], x: 814, y: 140, width: 170, delay: 0.32 },
  { label: mechanism.outcomes[1], x: 850, y: 260, width: 170, delay: 0.48 },
  { label: mechanism.outcomes[2], x: 810, y: 388, width: 170, delay: 0.64 },
];

function rightEdge(node: { x: number; width: number }) {
  return node.x + node.width / 2;
}

function leftEdge(node: { x: number; width: number }) {
  return node.x - node.width / 2;
}

function curvePath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  bend = 0.38,
) {
  const delta = end.x - start.x;
  const c1 = start.x + delta * bend;
  const c2 = end.x - delta * bend;
  return `M${start.x} ${start.y}C${c1} ${start.y} ${c2} ${end.y} ${end.x} ${end.y}`;
}

const constraintPaths = constraintNodes.map((fromNode, index) =>
  curvePath(
    { x: rightEdge(fromNode), y: fromNode.y },
    { x: leftEdge(interiorNodes[index]), y: interiorNodes[index].y },
    0.34,
  ),
);

const outcomePaths = [
  curvePath(
    { x: rightEdge(interiorNodes[0]), y: interiorNodes[0].y },
    { x: leftEdge(outcomeNodes[0]), y: outcomeNodes[0].y },
    0.36,
  ),
  curvePath(
    { x: rightEdge(interiorNodes[1]), y: interiorNodes[1].y },
    { x: leftEdge(outcomeNodes[1]), y: outcomeNodes[1].y },
    0.34,
  ),
  curvePath(
    { x: rightEdge(interiorNodes[2]), y: interiorNodes[2].y },
    { x: leftEdge(outcomeNodes[2]), y: outcomeNodes[2].y - 14 },
    0.36,
  ),
  curvePath(
    { x: rightEdge(interiorNodes[3]), y: interiorNodes[3].y },
    { x: leftEdge(outcomeNodes[2]), y: outcomeNodes[2].y + 12 },
    0.32,
  ),
];

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
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 520"
              fill="none"
              aria-hidden="true"
            >
              {constraintPaths.map((pathData, index) => (
                <path
                  key={`constraint-path-${index}`}
                  d={pathData}
                  stroke="rgba(58,56,52,0.45)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}
              {outcomePaths.map((pathData, index) => (
                <path
                  key={`outcome-path-${index}`}
                  d={pathData}
                  stroke={index === 3 ? "rgba(93,107,99,0.22)" : "rgba(93,107,99,0.3)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="8 10"
                />
              ))}

              {constraintNodes.map((node) => (
                <circle key={`constraint-${node.label}`} cx={node.x} cy={node.y} r="4" fill="#7E4B3A" />
              ))}
              {interiorNodes.map((node) => (
                <circle key={`interior-${node.label}`} cx={node.x} cy={node.y} r="4" fill="#5D6B63" />
              ))}
              {outcomeNodes.map((node) => (
                <circle
                  key={`outcome-${node.label}`}
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="rgba(93,107,99,0.7)"
                />
              ))}
            </svg>

            {constraintNodes.map((node) => (
              <FadeIn
                key={node.label}
                delay={node.delay}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(node.x / 1000) * 100}%`,
                  top: `${(node.y / 520) * 100}%`,
                } as CSSProperties}
              >
                <MechanismNode label={node.label} variant="constraint" className="w-[190px]" />
              </FadeIn>
            ))}

            {interiorNodes.map((node) => (
              <FadeIn
                key={node.label}
                delay={node.delay}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(node.x / 1000) * 100}%`,
                  top: `${(node.y / 520) * 100}%`,
                } as CSSProperties}
              >
                <MechanismNode label={node.label} variant="interior" className="w-[164px]" />
              </FadeIn>
            ))}

            {outcomeNodes.map((node) => (
              <FadeIn
                key={node.label}
                delay={node.delay}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(node.x / 1000) * 100}%`,
                  top: `${(node.y / 520) * 100}%`,
                } as CSSProperties}
              >
                <MechanismNode label={node.label} variant="outcome" className="w-[170px]" />
              </FadeIn>
            ))}

            <div className="absolute left-[46%] top-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--grid-line)]/80 bg-white/50 px-3 py-2 text-[11px] tracking-[0.16em] text-[var(--ink-muted)] backdrop-blur-sm">
              structure → response
            </div>

            <div className="absolute right-3 top-[17%] max-w-[180px] text-right">
              <p className="eyebrow">Suspension</p>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                越靠近结果，行动越变得稀薄，关系开始以“未完成”的方式存在。
              </p>
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
