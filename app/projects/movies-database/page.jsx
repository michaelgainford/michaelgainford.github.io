import Header from "@/components/header/_Header";
import IconMovies from "@/components/icons/IconMovies";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/_Footer";
import FeaturedMovieSpotlight from "@/components/projects/movies-database/FeaturedMovieSpotlight";
import MoviesWatched from "@/components/projects/movies-database/MoviesWatched";
import MoviesToWatch from "@/components/projects/movies-database/MoviesToWatch";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import { watchedMoviesLength, unwatchedMoviesLength } from "@/variables/ProjectMovies";
const pageStyles = "relative overflow-hidden bg-gray-950 text-slate-300";
const pageIntroText = `This is the list of movies watched by the PP Movie Club. In total, we have watched ${watchedMoviesLength} movies and currently, there are ${unwatchedMoviesLength} movies on the watchlist.`;

export default function Page_MoviesDatabase() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.12),transparent_72%)]" />
			<Header />
			<main className={globalWrapperFixedWidth}>
				<section className="cinema-flicker w-full max-w-[1800px] rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-2xl shadow-black/35 md:p-6 lg:p-8">
					<div className="mx-auto mb-4 w-fit rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1 text-xxs uppercase tracking-[0.24em] text-slate-300">
						Now Showing
					</div>
					<div className="my-4 flex items-center justify-center title-icon">
						<div className="inline-flex items-center gap-3">
							<IconMovies classes="size-5 fill-slate-300 lg:size-7" />
							<h1 className="m-0 text-balance text-center text-3xl leading-tight font-bold tracking-wide text-slate-100 md:text-4xl">
								Movies Database
							</h1>
						</div>
					</div>
					<PageIntro 
					  text={pageIntroText}
					  text_colour="text-slate-200" 
					  other_classes="text-xs text-balance text-center leading-5 font-light md:text-sm md:mb-12 xl:pb-4"
					/>

					<div className="grid grid-cols-2 gap-2 mb-6 md:grid-cols-4">
						<div className="rounded-md border border-slate-800/80 bg-slate-900/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Watched</p>
							<p className="mt-1 text-sm font-semibold text-slate-200 lg:text-base">{watchedMoviesLength}</p>
						</div>
						<div className="rounded-md border border-slate-800/80 bg-slate-900/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Watchlist</p>
							<p className="mt-1 text-sm font-semibold text-slate-200 lg:text-base">{unwatchedMoviesLength}</p>
						</div>
						<div className="rounded-md border border-slate-800/80 bg-slate-900/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Database</p>
							<p className="mt-1 text-sm font-semibold text-slate-200 lg:text-base">{watchedMoviesLength + unwatchedMoviesLength}</p>
						</div>
						<div className="rounded-md border border-slate-800/80 bg-slate-900/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Source</p>
							<p className="mt-1 text-sm font-semibold text-slate-200 lg:text-base">IMDb</p>
						</div>
					</div>

					<FeaturedMovieSpotlight />

					<div className="movies-mini-nav mb-8 max-sm:mt-4 xl:mb-10">
						<div className="flex flex-wrap items-center justify-center gap-2.5">
							<p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Sections</p>
							<a className="rounded-full border border-slate-700/70 bg-slate-900/75 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80" href="#watched-movies">Watched</a>
							<a className="rounded-full border border-slate-700/70 bg-slate-900/75 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80" href="#to-watch">Watchlist</a>
						</div>
						<div className="mt-3 flex flex-wrap items-center justify-center gap-2.5">
							<p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Franchises</p>
							<a className="rounded-full border border-slate-700/70 bg-slate-950/65 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-slate-900/75 hover:text-slate-100" href="/projects/movies-database/the-matrix">The Matrix</a>
							<a className="rounded-full border border-slate-700/70 bg-slate-950/65 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-slate-900/75 hover:text-slate-100" href="/projects/movies-database/batman">Batman</a>
							<a className="rounded-full border border-slate-700/70 bg-slate-950/65 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-slate-900/75 hover:text-slate-100" href="/projects/movies-database/iron-man">Iron Man</a>
							<a className="rounded-full border border-slate-700/70 bg-slate-950/65 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-slate-900/75 hover:text-slate-100" href="/projects/movies-database/deadpool">Deadpool</a>
						</div>
					</div>

					<MoviesWatched />
					<MoviesToWatch />
				</section>
			</main>
			<Footer />
		</div>
	);
}