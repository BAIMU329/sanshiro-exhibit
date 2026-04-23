"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/layout/SectionShell";

export function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const hazeY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const plaqueY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <SectionShell id="hero" index="01" className="min-h-[100svh]">
      <div ref={ref} className="section-veil relative flex min-h-[100svh] items-end py-20">
        <motion.div
          style={{ y: hazeY }}
          className="map-haze absolute inset-x-[34%] top-16 bottom-16 rounded-[48px]"
        />
        <div className="kanji-ghost ambient-drift absolute right-8 top-32 hidden text-[10rem] leading-none xl:block 2xl:text-[11rem]">
          東京
        </div>
        <div className="absolute left-4 top-10 h-[2px] w-[calc(100%-7rem)] origin-left rotate-[34deg] bg-[linear-gradient(90deg,rgba(107,91,82,0.9),rgba(107,91,82,0.15))] lg:left-12" />
        <motion.div
          style={{ y: plaqueY }}
          className="route-plaque absolute right-2 top-8 hidden w-56 rounded-[24px] p-4 2xl:right-6 2xl:top-16 2xl:w-64 2xl:rounded-[28px] 2xl:p-5 xl:block"
        >
          <p className="eyebrow">Route / 1909</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink-soft)]">
            <p className="flex items-center justify-between">
              <span>熊本</span>
              <span className="h-px w-16 bg-[var(--mist)]" />
              <span>东京</span>
            </p>
            <p>从熟人社会进入匿名都市，真正开始迷路的，是判断世界的方法。</p>
          </div>
        </motion.div>
        <motion.div
          style={{ y: plaqueY }}
          className="route-plaque absolute bottom-18 right-8 hidden max-w-[15rem] rounded-[22px] p-4 2xl:bottom-24 2xl:right-24 2xl:max-w-xs 2xl:rounded-[26px] 2xl:p-5 xl:block"
        >
          <p className="font-[var(--font-display)] text-lg tracking-[0.24em] text-[var(--rust)]">
            sanshiro
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
            这不是把观点排成网页，
            而是试着把《三四郎》里那种缓慢、迟疑、难以言明的晃动重新放到眼前。
          </p>
        </motion.div>

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 max-w-2xl space-y-8 pb-10"
        >
          <FadeIn delay={0.1}>
            <p className="font-[var(--font-display)] text-xl tracking-[0.35em] text-[var(--rust)]">
              Lost in Tokyo
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="display-title max-w-xl text-6xl leading-none font-semibold md:text-8xl">
              迷途东京
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="max-w-xl text-2xl leading-10 text-[var(--ink-soft)]">
              《三四郎》中青年成长的现实困境
              <br />
              与精神冲突
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="max-w-sm">
            <p className="text-base leading-8 text-[var(--ink-soft)]">
              他从熊本来到东京。表面上只是一次升学，
              其实更像是被推入一个速度更快、规则更隐蔽、人与人更难靠近的世界。
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <a
              href="#era"
              className="inline-flex items-center gap-4 text-sm tracking-[0.2em] text-[var(--ink-soft)] uppercase"
            >
              <span className="h-px w-12 bg-[var(--mist)]" />
              向下进入东京
            </a>
          </FadeIn>
        </motion.div>
      </div>
    </SectionShell>
  );
}
