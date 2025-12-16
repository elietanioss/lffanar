"use client";

import { motion, Variants } from "framer-motion";

export default function Home() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="glass-panel card-pop max-w-3xl"
    >
      <motion.p variants={item} className="neon-heading mb-3">Welcome</motion.p>
      <motion.h1 variants={item} className="mb-4 text-2xl font-semibold text-slate-50 sm:text-3xl">
        Lebanese Forces Students Club – LU Faculty of Sciences II, Fanar
      </motion.h1>
      <motion.p variants={item} className="mb-3 text-sm text-slate-300">
        Welcome to our faculty! It is one of the first faculties of the Lebanese
        University, founded by Decree No. 2883 of December 16, 1959.
      </motion.p>
      <motion.p variants={item} className="mb-4 text-sm text-slate-300">
        Our faculty offers courses and programs leading to degrees in{" "}
        <span className="text-secondary">
          Mathematics, Computer Science, Physics, Chemistry, Earth and Life
          Sciences, Biochemistry, Statistics, and Electronics
        </span>
        .
      </motion.p>
      <motion.div variants={item} className="mt-6 flex flex-col gap-3 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 sm:flex-row sm:items-center">
        <span className="text-slate-400">Administration Tel</span>
        <span className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-primary shadow-md shadow-black/70">
          01 – 680 248
        </span>
      </motion.div>
    </motion.section>
  );
}
