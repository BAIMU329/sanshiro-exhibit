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
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -84]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.22]);
  const hazeY = useTransform(scrollYProgress, [0, 1], [0, 54]);
  const trackY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const metaY = useTransform(scrollYProgress, [0, 1], [0, 22]);

  return (
    <SectionShell id="hero" index="01" className="min-h-[100svh]">
      <div ref={ref} className="section-veil relative flex min-h-[100svh] items-end overflow-hidden py-18 md:py-20">
        <motion.div
          style={{ y: hazeY }}
          className="map-haze absolute inset-x-[34%] top-16 bottom-16 rounded-[48px]"
        />
        <motion.div
          style={{ y: trackY }}
          className="hero-rail-perspective absolute inset-x-[6%] bottom-[-4%] top-[22%] opacity-88"
        />
        <div className="hero-city-band absolute inset-x-[10%] top-[13%] h-20 opacity-70" />
        <div className="absolute left-[9%] top-[16%] hidden h-24 w-px bg-[linear-gradient(180deg,transparent,rgba(126,75,58,0.55),transparent)] lg:block" />
        <div className="absolute right-[11%] top-[18%] hidden h-18 w-px bg-[linear-gradient(180deg,transparent,rgba(93,107,99,0.45),transparent)] lg:block" />
        <div className="hero-pressure-field absolute right-[6%] top-[24%] hidden h-[46%] w-[32%] rounded-[40px] lg:block" />

        <div className="relative z-10 grid w-full gap-10 pb-8 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16">
          <motion.aside style={{ y: metaY }} className="hidden lg:block">
            <FadeIn delay={0.08}>
              <div className="hero-meta-column">
                <p className="text-[11px] tracking-[0.26em] text-[var(--ink-muted)] uppercase">1909</p>
                <div className="mt-5 border-l border-[var(--rust)]/30 pl-4">
                  <p className="font-[var(--font-display)] text-xl tracking-[0.3em] text-[var(--rust)]">
                    Lost in Tokyo
                  </p>
                  <p className="mt-4 text-[11px] leading-6 tracking-[0.18em] text-[var(--ink-muted)] uppercase">
                    Kumamoto
                    <br />
                    to Tokyo
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  <p className="text-[11px] tracking-[0.22em] text-[var(--ink-muted)] uppercase">Signal</p>
                  <p className="text-sm leading-7 text-[var(--ink-soft)]/92">
                    熟悉的判断失效，比陌生的街道更让人无措。
                  </p>
                </div>
              </div>
            </FadeIn>
          </motion.aside>

          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="relative space-y-8 lg:space-y-10"
          >
            <FadeIn delay={0.16}>
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-4 text-[var(--rust)] lg:hidden">
                  <span className="h-px w-10 bg-[var(--rust)]/45" />
                  <p className="font-[var(--font-display)] text-xl tracking-[0.35em]">
                    Lost in Tokyo
                  </p>
                </div>
                <h1 className="display-title mt-4 max-w-4xl text-[4.8rem] leading-[0.88] font-semibold md:text-[8rem] xl:text-[9.5rem]">
                  迷途
                  <br />
                  东京
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)] md:text-[1.35rem] md:leading-10">
                  《三四郎》中青年成长的现实困境
                  <br />
                  与精神冲突
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="hero-manifest hero-manifest-strong max-w-[38rem] rounded-[36px] px-6 py-6 md:px-8 md:py-8">
                <p className="display-title text-[2.1rem] leading-[1.28] text-[var(--ink)] md:text-[3rem] md:leading-[1.22]">
                  真正开始迷路的，
                  <br />
                  不是脚步，
                  <br />
                  而是判断世界的方法。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.38} className="max-w-lg pl-1">
              <p className="text-[0.95rem] leading-8 text-[var(--ink-soft)]/92 md:text-[1rem]">
                他到东京以后，先失去的不是故乡，
                而是那种不必犹豫就能判断世界的能力。
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid max-w-3xl items-end gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
                <div className="route-plaque rounded-[24px] p-4 md:p-5">
                  <p className="eyebrow">Route / 1909</p>
                  <div className="mt-3 flex items-center gap-4 text-sm tracking-[0.18em] text-[var(--ink-muted)] uppercase">
                    <span>熊本</span>
                    <span className="hero-route-line h-px flex-1" />
                    <span>东京</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)] md:text-[15px]">
                    从熟人社会进入匿名都市，最先松动的不是方向，而是判断。
                  </p>
                </div>
                <div className="hero-entry-tag rounded-[24px] px-5 py-4">
                  <p className="text-[11px] tracking-[0.22em] text-[var(--ink-muted)] uppercase">
                    Entry
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]/90">
                    人已经在场，心却仍慢半拍。
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <a
                href="#era"
                className="inline-flex items-center gap-4 pt-2 text-sm tracking-[0.24em] text-[var(--ink-soft)] uppercase"
              >
                <span className="h-px w-12 bg-[var(--mist)]" />
                向下进入东京
              </a>
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
