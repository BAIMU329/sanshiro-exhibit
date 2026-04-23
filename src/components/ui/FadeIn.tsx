"use client";

import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  style?: CSSProperties;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  style,
}: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      style={style}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: easeOutSoft }}
    >
      {children}
    </motion.div>
  );
}
