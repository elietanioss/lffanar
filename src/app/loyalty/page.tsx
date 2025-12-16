const presidents = [
  "Nour Charbel – President 2021-2022",
  "Elie Habchy – President 2020-2021",
  "Nabil Yaacoub – President 2019-2020",
  "JeanPierre Gabriel – President 2018-2019",
  "Carlos Bathich – President 2017-2018",
  "Jean Nachef – President 2016-2017",
  "Raful Bou Raful – President 2015-2016",
  "Roy Issa – President 2014-2015",
  "Georges Abdallah – President 2013-2014",
  "Paul Abou Zeidan – President 2012-2013",
  "Joe Abi Warde – President 2011-2012",
  "Elie Hadchity – President 2010-2011",
  "Georges Andary – President 2009-2010",
  "Elie Geagea – President 2008-2009",
];

export default function LoyaltyPage() {
  return (
    <section className="glass-panel card-pop max-w-3xl">
      <p className="neon-heading mb-3">Legacy</p>
      <h1 className="mb-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
        The List of Loyalty
      </h1>
      <p className="mb-4 text-sm text-slate-300">
        A tribute to the students who have led the LF Students Club at LU
        Faculty of Sciences II – Fanar across the years.
      </p>
      <ul className="space-y-1 text-sm text-slate-200">
        {presidents.map((entry) => (
          <li key={entry} className="flex items-center gap-2">
            <span className="h-[3px] w-4 rounded-full bg-primary" />
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


