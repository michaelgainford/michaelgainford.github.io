import Image from "next/image";

const themeClasses = {
  batman: {
    border: "border-amber-400/25",
    cardBg: "bg-black/70",
    badge: "border-amber-400/40 bg-amber-500/10 text-amber-300",
    title: "text-amber-100",
    meta: "text-amber-300/90",
    body: "text-slate-200",
    statValue: "text-amber-300",
  },
  "iron-man": {
    border: "border-red-400/25",
    cardBg: "bg-black/70",
    badge: "border-red-400/40 bg-red-500/10 text-red-300",
    title: "text-amber-100",
    meta: "text-red-300/90",
    body: "text-slate-200",
    statValue: "text-amber-300",
  },
  deadpool: {
    border: "border-rose-400/30",
    cardBg: "bg-black/70",
    badge: "border-rose-400/40 bg-rose-500/10 text-rose-200",
    title: "text-rose-100",
    meta: "text-rose-300/90",
    body: "text-slate-200",
    statValue: "text-rose-200",
  },
};

export default function FranchiseHero({ page, stats, theme }) {
  const styles = themeClasses[theme] || themeClasses.batman;

  return (
    <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <div className={`rounded-2xl border ${styles.border} ${styles.cardBg} p-5 shadow-xl shadow-black/30 lg:p-8`}>
        <span className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xxs uppercase tracking-[0.18em] ${styles.badge}`}>
          {page.badge}
        </span>
        <h2 className={`text-2xl font-semibold uppercase tracking-wide lg:text-4xl ${styles.title}`}>{page.title}</h2>
        <p className={`mt-3 text-sm uppercase tracking-[0.2em] ${styles.meta}`}>{page.tagline}</p>
        <p className={`mt-5 max-w-[70ch] text-sm leading-7 lg:text-base ${styles.body}`}>{page.intro}</p>
        <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4">
          <div className="rounded-md border border-white/10 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Released</p>
            <p className={`mt-1 text-sm font-semibold ${styles.statValue}`}>{page.releaseYear}</p>
          </div>
          <div className="rounded-md border border-white/10 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Runtime</p>
            <p className={`mt-1 text-sm font-semibold ${styles.statValue}`}>{page.runtimeMinutes}m</p>
          </div>
          <div className="rounded-md border border-white/10 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">IMDb</p>
            <p className={`mt-1 text-sm font-semibold ${styles.statValue}`}>{page.imdb}</p>
          </div>
          <div className="rounded-md border border-white/10 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Club Rating</p>
            <p className={`mt-1 text-sm font-semibold ${styles.statValue}`}>{page.clubRating}/10</p>
          </div>
        </div>
      </div>

      <div className={`rounded-2xl border ${styles.border} ${styles.cardBg} p-4 lg:p-6`}>
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/80">
          <Image
            src={page.heroImage}
            alt={`${page.title} poster`}
            width={900}
            height={1400}
            sizes="(min-width: 1024px) 42vw, 100vw"
            priority
            className="h-[360px] w-full object-cover object-top lg:h-[430px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black to-transparent p-4">
            <p className="text-xxs uppercase tracking-[0.16em] text-slate-300">Directed by</p>
            <p className="text-sm text-slate-100">{page.director}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-white/10 bg-black/50 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Films</p>
            <p className={`mt-1 text-lg font-semibold ${styles.statValue}`}>{stats.filmCount}</p>
          </div>
          <div className="rounded-md border border-white/10 bg-black/50 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Quotes</p>
            <p className={`mt-1 text-lg font-semibold ${styles.statValue}`}>{stats.quoteCount}</p>
          </div>
          <div className="rounded-md border border-white/10 bg-black/50 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Cast</p>
            <p className={`mt-1 text-lg font-semibold ${styles.statValue}`}>{stats.castLength}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
