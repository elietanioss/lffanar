export default function ContactPage() {
  return (
    <section className="glass-panel max-w-3xl">
      <p className="neon-heading mb-3">Join / Contact</p>
      <h1 className="mb-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
        Get in touch with the LF Students Club
      </h1>
      <p className="mb-4 text-sm text-slate-300">
        Want to join the club, volunteer, or just ask a question about life at
        the LU Faculty of Sciences II – Fanar? Reach out and we&apos;ll connect
        you with the right people.
      </p>
      <ul className="mb-4 space-y-2 text-sm text-slate-200">
        <li className="glass-panel card-pop cursor-pointer">
          <span className="font-semibold text-secondary">
            Facebook page
          </span>{" "}
          – message us directly for quick replies.
        </li>
        <li className="glass-panel card-pop cursor-pointer">
          <span className="font-semibold text-secondary">
            On‑campus administration
          </span>{" "}
          – Tel: 01‑680 248
        </li>
      </ul>
      <p className="text-xs text-slate-400">
        The glowing connection sphere in the background represents you joining
        the network of students, counselors and alumni that make up the LF
        Students Club.
      </p>
    </section>
  );
}


