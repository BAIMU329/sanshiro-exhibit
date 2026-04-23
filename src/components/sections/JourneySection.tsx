"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { QuoteAside } from "@/components/layout/QuoteAside";
import { FadeIn } from "@/components/ui/FadeIn";

export function JourneySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end start"],
  });
  const mapY = useTransform(scrollYProgress, [0, 1], [32, -18]);
  const mapScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.03]);
  const detailY = useTransform(scrollYProgress, [0, 1], [16, -12]);

  return (
    <SectionShell id="journey" index="03" className="py-24 md:py-32">
      <div
        ref={ref}
        className="relative grid items-center gap-16 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1.15fr)_360px]"
      >
        <div className="kanji-ghost absolute right-8 top-16 hidden text-[6.5rem] leading-none 2xl:right-6 2xl:top-0 2xl:text-[8rem] xl:block">
          入京
        </div>
        <QuoteAside
          quote="真正被放大的不是东京，而是他与东京之间那一层忽然出现的生疏。"
          className="absolute right-2 top-44 2xl:right-0 2xl:top-32"
        />
        <motion.div
          style={{ y: mapY, scale: mapScale }}
          className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-[var(--grid-line)] bg-white/30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(93,107,99,0.12),transparent_22%),linear-gradient(90deg,rgba(24,24,22,0.08)_1px,transparent_1px),linear-gradient(rgba(24,24,22,0.08)_1px,transparent_1px)] bg-[size:auto,88px_88px,88px_88px] opacity-70" />
          <div className="absolute left-[8%] top-[16%] rounded-full bg-white/50 px-4 py-2 text-[11px] tracking-[0.18em] text-[var(--ink-muted)] backdrop-blur-sm">
            LOCAL → CAPITAL
          </div>
          <div className="absolute left-[18%] top-[68%] h-4 w-4 rounded-full bg-[var(--moss)]" />
          <div className="absolute left-[67%] top-[32%] h-5 w-5 rounded-full bg-[var(--rust)]" />
          <div className="diagram-glow left-[14%] top-[60%] h-28 w-28 bg-[rgba(93,107,99,0.18)]" />
          <div className="diagram-glow left-[60%] top-[22%] h-36 w-36 bg-[rgba(126,75,58,0.18)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 700" fill="none">
            <path
              d="M190 500C280 470 340 420 410 360C520 266 570 256 684 220"
              stroke="url(#journeyLine)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="16 10"
            />
            <defs>
              <linearGradient id="journeyLine" x1="190" y1="500" x2="684" y2="220">
                <stop stopColor="#5D6B63" />
                <stop offset="1" stopColor="#7E4B3A" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div
            style={{ y: detailY }}
            className="route-plaque absolute right-8 top-8 w-52 rounded-[28px] p-5"
          >
            <p className="eyebrow">Tokyo / 확대</p>
            <p className="text-sm leading-7 text-[var(--ink-soft)]">
              东京区域被放大后，空间与关系的密度突然增加。
            </p>
          </motion.div>
          <motion.div
            style={{ y: detailY }}
            className="route-plaque absolute bottom-8 left-8 max-w-[240px] rounded-[24px] p-5"
          >
            <p className="eyebrow">threshold</p>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
              这不是简单的移动，而是从“知道怎么生活”进入“必须学习如何判断”。
            </p>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: detailY }} className="space-y-5">
          <FadeIn>
            <SectionHeader
              index="03"
              eyebrow="Journey"
              title="然后他进入东京"
              description="离开故乡之后最先松动的，往往不是情感，而是一个人原本很自然的生活感。"
            />
          </FadeIn>
          {[
            "离开熟人社会",
            "进入匿名都市",
            "开始不知道怎样才算恰当地行动",
          ].map((item, index) => (
            <FadeIn key={item} delay={0.12 * (index + 1)}>
              <article className="paper-panel relative rounded-[24px] p-5">
                <span className="absolute left-5 top-0 h-px w-12 bg-[var(--moss)]/70" />
                <p className="text-lg leading-8 text-[var(--ink)]">{item}</p>
              </article>
            </FadeIn>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
