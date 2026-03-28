export default function MatrixPillars({ pillars }) {
  return (
    <section className="rounded-2xl border border-green-400/20 bg-black/60 p-4 lg:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-base uppercase tracking-[0.16em] text-green-200 lg:text-lg">Core Themes</h3>
        <span className="rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xxs uppercase tracking-[0.14em] text-green-300">
          Why It Endures
        </span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-lg border border-green-400/15 bg-black/45 p-4">
            <h4 className="text-sm uppercase tracking-[0.12em] text-green-200">{pillar.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-200">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
