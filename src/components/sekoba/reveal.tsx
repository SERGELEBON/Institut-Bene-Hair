"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  amount?: number;
};

/**
 * Apparition au scroll — identique à l'original :
 * motion.div initial={opacity:0, y:24/26} + whileInView + viewport once.
 */
export default function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.6,
  amount = 0.2,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: amount }}
      transition={{ duration: duration, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
}
