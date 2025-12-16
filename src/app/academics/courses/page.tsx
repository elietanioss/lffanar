const courseCategories = [
  { key: "mispce", label: "MISPCE" },
  { key: "csvt", label: "CSVT" },
  { key: "y2", label: "2nd Year" },
  { key: "y3", label: "3rd Year" },
];

export default function CoursesPage() {
  return (
    <section className="glass-panel max-w-3xl">
      <p className="neon-heading mb-3">Academics</p>
      <h1 className="mb-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
        Courses
      </h1>
      <p className="mb-6 text-sm text-slate-300">
        Hard copies will be available very soon! Choose your track or year to
        see the digital course packs when they are published.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {courseCategories.map((cat) => (
          <button
            key={cat.key}
            className="glass-panel card-pop cursor-pointer text-center text-xs font-mono uppercase tracking-[0.18em] text-slate-100 hover:text-primary"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}


