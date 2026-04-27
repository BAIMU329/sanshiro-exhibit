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
  const sideY = useTransform(scrollYProgress, [0, 1], [0, 26]);

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

        <div className="relative z-10 grid w-full items-end gap-10 pb-8 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:gap-12">
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="space-y-8"
          >
            <FadeIn delay={0.08}>
              <div className="inline-flex items-center gap-4 text-[var(--rust)]">
                <span className="h-px w-10 bg-[var(--rust)]/45" />
                <p className="font-[var(--font-display)] text-xl tracking-[0.35em]">
                  Lost in Tokyo
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="max-w-4xl space-y-5">
                <h1 className="display-title max-w-3xl text-[4.5rem] leading-[0.9] font-semibold md:text-[7.5rem] xl:text-[8.6rem]">
                  迷途东京
                </h1>
                <p className="max-w-2xl text-xl leading-9 text-[var(--ink-soft)] md:text-[1.7rem] md:leading-[2.8rem]">
                  《三四郎》中青年成长的现实困境
                  <br />
                  与精神冲突
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.28}>
              <div className="hero-manifest max-w-2xl rounded-[28px] p-5 md:p-6">
                <p className="text-lg leading-9 text-[var(--ink)] md:text-[1.35rem] md:leading-10">
                  真正开始迷路的，不是脚步，
                  <br className="hidden md:block" />
                  而是判断世界的方法。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.36} className="max-w-xl">
              <p className="text-base leading-8 text-[var(--ink-soft)] md:text-[1.02rem]">
                他到东京以后，先失去的不是故乡，
                而是那种不必犹豫就能判断世界的能力。
              </p>
            </FadeIn>
            <FadeIn delay={0.46}>
              <div className="grid max-w-3xl gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="route-plaque rounded-[24px] p-4 md:p-5">
                  <p className="eyebrow">Route / 1909</p>
                  <div className="mt-3 flex items-center gap-4 text-sm tracking-[0.18em] text-[var(--ink-muted)] uppercase">
                    <span>熊本</span>
                    <span className="hero-route-line h-px flex-1" />
                    <span>东京</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)] md:text-[15px]">
                    从熟人社会进入匿名都市，最先松动的不是方向，而是原来那种自然判断世界的能力。
                  </p>
                </div>
                <div className="route-plaque rounded-[24px] p-4 md:p-5">
                  <p className="eyebrow">Exhibit Intent</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)] md:text-[15px]">
                    这里想重现的，不是情节本身，而是《三四郎》里那种人已经在场，心却仍慢半拍的感觉。
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.55}>
              <a
                href="#era"
                className="inline-flex items-center gap-4 text-sm tracking-[0.24em] text-[var(--ink-soft)] uppercase"
              >
                <span className="h-px w-12 bg-[var(--mist)]" />
                向下进入东京
              </a>
            </FadeIn>
          </motion.div>

          <motion.aside
            style={{ y: sideY }}
            className="hidden space-y-4 lg:block"
          >
            <FadeIn delay={0.22}>
              <div className="hero-side-panel rounded-[30px] p-5">
                <p className="eyebrow">Transit Log</p>
                <div className="mt-5 space-y-5">
                  <div className="border-l border-[var(--rust)]/35 pl-4">
                    <p className="text-xs tracking-[0.22em] text-[var(--ink-muted)] uppercase">1908-1909</p>
                    <p className="mt-2 text-base leading-7 text-[var(--ink)]">
                      上京不只是地理移动，而是生活坐标突然改写。
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-[20px] border border-[var(--grid-line)]/80 bg-white/48 p-4">
                      <p className="text-[11px] tracking-[0.18em] text-[var(--ink-muted)] uppercase">Signal 01</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                        熟悉的判断失效，比陌生的街道更让人无措。
                      </p>
                    </div>
                    <div className="rounded-[20px] border border-[var(--grid-line)]/80 bg-white/42 p-4">
                      <p className="text-[11px] tracking-[0.18em] text-[var(--ink-muted)] uppercase">Signal 02</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                        东京像一张不断扩张的线路图，而三四郎先学会的不是抵达，而是迟疑。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </motion.aside>
        </div>
      </div>
    </SectionShell>
  );
}
