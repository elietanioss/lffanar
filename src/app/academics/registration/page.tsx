const departments = [
  {
    name: "Life & Earth Sciences Department",
    programs: ["BS in Earth & Life Sciences", "BS in Petroleum Geology"],
    contact: "Tina Elias",
    phone: "76 160 443",
  },
  {
    name: "Chemistry‑Biochemistry Department",
    programs: ["BS in Chemistry", "BS in Biochemistry"],
    contact: "Nour Rahme",
    phone: "70 251 233",
  },
  {
    name: "Physics‑Electronics Department",
    programs: ["BS in Physics", "BS in Electronics"],
    contact: "Tarek Fakhry",
    phone: "81 768 807",
  },
  {
    name: "Mathematics‑Statistics Department",
    programs: ["BS in Mathematics", "BS in Statistics"],
    contact: "Nour Charbel",
    phone: "81 655 660",
  },
  {
    name: "Computer Science Department",
    programs: ["BS in Computer Science"],
    contact: "Kamil Bathich",
    phone: "79 148 877",
  },
];

export default function RegistrationPage() {
  return (
    <section className="space-y-8">
      <div className="glass-panel">
        <p className="neon-heading mb-3">Academics</p>
        <h1 className="mb-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
          Registration
        </h1>
        <p className="text-sm text-slate-300">
          Here&apos;s what you need to register at our faculty – contact our
          counselors from different majors for more help.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <button className="glass-panel card-pop cursor-pointer text-xs font-mono uppercase tracking-[0.18em] text-slate-100 hover:text-primary">
            المستندات المطلوبة لتسجيل الطلاب الجدد
          </button>
          <button className="glass-panel card-pop cursor-pointer text-xs font-mono uppercase tracking-[0.18em] text-slate-100 hover:text-primary">
            المستندات المطلوبة لتسجيل الطلاب القدامى
          </button>
          <button className="glass-panel card-pop cursor-pointer text-xs font-mono uppercase tracking-[0.18em] text-slate-100 hover:text-primary">
            2024 طلب التسجيل الأكاديمي – Courses Codes
          </button>
        </div>
      </div>

      <div className="glass-panel">
        <p className="neon-heading mb-4">Departments & counselors</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {departments.map((dept) => (
            <div key={dept.name} className="space-y-2 text-sm text-slate-200">
              <h2 className="font-semibold text-primary">
                {dept.name}
              </h2>
              <ul className="text-xs text-slate-300">
                {dept.programs.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-400">
                Contact:{" "}
                <span className="font-medium text-slate-100">
                  {dept.contact}
                </span>{" "}
                – {dept.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


