export default function Home() {
  return (
    <section className="glass-panel card-pop max-w-3xl">
      <p className="neon-heading mb-3">Welcome</p>
      <h1 className="mb-4 text-2xl font-semibold text-slate-50 sm:text-3xl">
        Lebanese Forces Students Club – LU Faculty of Sciences II, Fanar
      </h1>
      <p className="mb-3 text-sm text-slate-300">
        Welcome to our faculty! It is one of the first faculties of the Lebanese
        University, founded by Decree No. 2883 of December 16, 1959.
      </p>
      <p className="mb-4 text-sm text-slate-300">
        Our faculty offers courses and programs leading to degrees in{" "}
        <span className="text-secondary">
          Mathematics, Computer Science, Physics, Chemistry, Earth and Life
          Sciences, Biochemistry, Statistics, and Electronics
        </span>
        .
      </p>
      <div className="mt-6 flex flex-col gap-3 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 sm:flex-row sm:items-center">
        <span className="text-slate-400">Administration Tel</span>
        <span className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-primary shadow-md shadow-black/70">
          01 – 680 248
        </span>
      </div>
    </section>
  );
}
