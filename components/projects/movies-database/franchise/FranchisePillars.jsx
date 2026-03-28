const themeClasses = {
  batman: {
    border: "border-amber-400/20",
    bg: "bg-black/60",
    heading: "text-amber-200",
    tag: "border-amber-400/30 bg-amber-500/10 text-amber-300",
    cardBorder: "border-amber-400/15",
    cardHeading: "text-amber-200",
  },
  "iron-man": {
    border: "border-red-400/20",
    bg: "bg-black/60",
    heading: "text-red-200",
    tag: "border-red-400/30 bg-red-500/10 text-red-300",
    cardBorder: "border-red-400/15",
    cardHeading: "text-amber-300",
  },
  deadpool: {
    border: "border-rose-400/20",
    bg: "bg-black/60",
    heading: "text-rose-200",
    tag: "border-rose-400/30 bg-rose-500/10 text-rose-300",
    cardBorder: "border-rose-400/15",
    cardHeading: "text-rose-200",
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
          <article key={pillar.title} className={`rounded-lg border ${styles.cardBorder} bg-black/45 p-4`}>
            <h4 className={`text-sm uppercase tracking-[0.12em] ${styles.cardHeading}`}>{pillar.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-200">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
