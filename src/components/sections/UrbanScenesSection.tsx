"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { QuoteAside } from "@/components/layout/QuoteAside";
import { SceneWindow } from "@/components/ui/SceneWindow";
import { FadeIn } from "@/components/ui/FadeIn";
import { urbanScenes } from "@/data/site";

const offsets = [
  "xl:translate-y-10",
  "xl:-translate-y-8",
  "xl:translate-y-20",
  "xl:translate-y-0",
  "xl:-translate-y-12",
];

export function UrbanScenesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end start"],
  });
  const introY = useTransform(scrollYProgress, [0, 1], [24, -12]);
  const gridY = useTransform(scrollYProgress, [0, 1], [36, -24]);

  return (
    <SectionShell
      id="urban"
      index="05"
      className="bg-[radial-gradient(circle_at_center,rgba(24,24,22,0.06),transparent_48%),var(--paper)] py-24 md:py-32"
    >
      <div ref={ref} className="relative space-y-14">
        <div className="kanji-ghost absolute right-0 top-0 hidden text-[9rem] leading-none xl:block">
          都市
        </div>
        <motion.div
          style={{ y: gridY }}
          className="pointer-events-none absolute inset-x-[8%] top-36 hidden h-[520px] rounded-[40px] border border-[var(--grid-line)]/50 bg-[linear-gradient(90deg,rgba(24,24,22,0.04)_1px,transparent_1px),linear-gradient(rgba(24,24,22,0.04)_1px,transparent_1px)] bg-[size:180px_180px,180px_180px] opacity-50 xl:block"
        />
        <QuoteAside
          quote="都市最迷人的地方，不是它让人看见了什么，而是它总让人差一点才能真正进入。"
          className="absolute right-0 top-40"
        />
        <motion.div style={{ y: introY }} className="space-y-6">
          <FadeIn>
            <SectionHeader
              index="05"
              eyebrow="Urban Scenes"
              title="城市开始试探他"
              description="东京不是一个单纯的地点。它更像一张密网，让人不断靠近、迟疑、误读，又无法真正退出。"
            />
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="route-plaque max-w-2xl rounded-[28px] p-6">
              <p className="text-base leading-8 text-[var(--ink-soft)]">
                电车、池边、音乐会、校园与散步，这些场景并不是平行展开的事件，
                而像一组不断闪现的窗景。三四郎总在其中，却很少真正属于其中。
              </p>
            </div>
          </FadeIn>
        </motion.div>

        <motion.div style={{ y: gridY }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {urbanScenes.map((scene, index) => (
            <SceneWindow
              key={scene.title}
              {...scene}
              className={offsets[index] ?? ""}
            />
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
