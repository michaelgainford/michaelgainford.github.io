const themeClasses = {
  batman: {
    border: "border-slate-800/80",
    bg: "bg-slate-950/60",
    heading: "text-slate-200",
    tag: "border-slate-700/80 bg-slate-900/70 text-slate-300",
    cardBorder: "border-slate-800/80",
    cardHeading: "text-slate-100",
  },
  "iron-man": {
    border: "border-slate-800/80",
    bg: "bg-slate-950/60",
    heading: "text-slate-200",
    tag: "border-slate-700/80 bg-slate-900/70 text-slate-300",
    cardBorder: "border-slate-800/80",
    cardHeading: "text-slate-100",
  },
  deadpool: {
    border: "border-slate-800/80",
    bg: "bg-slate-950/60",
    heading: "text-slate-200",
    tag: "border-slate-700/80 bg-slate-900/70 text-slate-300",
    cardBorder: "border-slate-800/80",
    cardHeading: "text-slate-100",
  },
};

export default function FranchisePillars({ pillars, theme }) {
  const styles = themeClasses[theme] || themeClasses.batman;

  return (
    <section className={`rounded-2xl border ${styles.border} ${styles.bg} p-4 lg:p-6`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className={`text-base uppercase tracking-[0.16em] lg:text-lg ${styles.heading}`}>Core Themes</h3>
        <span className={`rounded-full border px-3 py-1 text-xxs uppercase tracking-[0.14em] ${styles.tag}`}>
          Why It Works
        </span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar.title} className={`rounded-lg border ${styles.cardBorder} bg-slate-950/55 p-4`}>
            <h4 className={`text-sm uppercase tracking-[0.12em] ${styles.cardHeading}`}>{pillar.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-200">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
