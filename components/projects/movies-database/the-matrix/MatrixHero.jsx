import Image from "next/image";

export default function MatrixHero({ page, stats }) {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-2xl border border-green-400/25 bg-black/70 p-5 shadow-xl shadow-black/30 lg:p-8">
        <span className="mb-4 inline-flex rounded-full border border-green-400/40 bg-green-400/10 px-3 py-1 text-xxs uppercase tracking-[0.18em] text-green-300">
          Reality Distortion Archive
        </span>
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-green-100 lg:text-4xl">{page.title}</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-green-300/90">{page.tagline}</p>
        <p className="mt-5 max-w-[70ch] text-sm leading-7 text-slate-200 lg:text-base">{page.intro}</p>
        <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4">
          <div className="rounded-md border border-green-400/20 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Released</p>
            <p className="mt-1 text-sm font-semibold text-green-300">{page.releaseYear}</p>
          </div>
          <div className="rounded-md border border-green-400/20 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Runtime</p>
            <p className="mt-1 text-sm font-semibold text-green-300">{page.runtimeMinutes}m</p>
          </div>
          <div className="rounded-md border border-green-400/20 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">IMDb</p>
            <p className="mt-1 text-sm font-semibold text-green-300">{page.imdb}</p>
          </div>
          <div className="rounded-md border border-green-400/20 bg-black/55 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Club Rating</p>
            <p className="mt-1 text-sm font-semibold text-green-300">{page.clubRating}/10</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-green-400/25 bg-black/65 p-4 lg:p-6">
        <div className="relative overflow-hidden rounded-lg border border-green-400/20 bg-black/80">
          <Image
            src="/movies-images/the-matrix.webp"
            alt="The Matrix movie poster"
            width={900}
            height={1400}
            className="h-[360px] w-full object-cover object-top lg:h-[430px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black to-transparent p-4">
            <p className="text-xxs uppercase tracking-[0.16em] text-green-300">Directed by</p>
            <p className="text-sm text-slate-100">{page.director}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-green-400/20 bg-black/50 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Trilogy</p>
            <p className="mt-1 text-lg font-semibold text-green-300">{stats.trilogyLength}</p>
          </div>
          <div className="rounded-md border border-green-400/20 bg-black/50 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Quotes</p>
            <p className="mt-1 text-lg font-semibold text-green-300">{stats.quoteCount}</p>
          </div>
          <div className="rounded-md border border-green-400/20 bg-black/50 p-3 text-center">
            <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Cast</p>
            <p className="mt-1 text-lg font-semibold text-green-300">{stats.castLength}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
