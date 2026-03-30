import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
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
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.16),transparent_70%)]" />
			<Header />
			<main className={globalWrapperFixedWidth}>
				<section className="cinema-flicker w-full max-w-[1800px] rounded-2xl border border-slate-700/70 bg-black/40 p-4 shadow-2xl shadow-black/35 md:p-6 lg:p-8">
					<div className="mx-auto mb-4 w-fit rounded-full border border-amber-300/40 bg-black/60 px-4 py-1 text-xxs uppercase tracking-[0.24em] text-amber-200">
						Now Showing
					</div>
					<div className="flex items-center justify-center gap-3 my-4 title-icon">
						<IconMovies classes="size-5 fill-amber-300 lg:size-8" />
						<H1 text={`Movies Database`} font_sizes={`pt-0!`} other_classes={`mb-0! pb-0! text-slate-100`}/>
					</div>
					<PageIntro 
					  text={pageIntroText}
					  text_colour="text-slate-200" 
					  other_classes="text-xs text-balance text-center leading-5 font-light md:text-sm md:mb-12 xl:pb-4"
					/>

					<div className="grid grid-cols-2 gap-2 mb-6 md:grid-cols-4">
						<div className="rounded-md border border-slate-700/70 bg-black/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Watched</p>
							<p className="mt-1 text-sm font-semibold text-amber-300 lg:text-base">{watchedMoviesLength}</p>
						</div>
						<div className="rounded-md border border-slate-700/70 bg-black/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Watchlist</p>
							<p className="mt-1 text-sm font-semibold text-amber-300 lg:text-base">{unwatchedMoviesLength}</p>
						</div>
						<div className="rounded-md border border-slate-700/70 bg-black/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Database</p>
							<p className="mt-1 text-sm font-semibold text-amber-300 lg:text-base">{watchedMoviesLength + unwatchedMoviesLength}</p>
						</div>
						<div className="rounded-md border border-slate-700/70 bg-black/60 p-3 text-center">
							<p className="text-xxs uppercase tracking-[0.16em] text-slate-400">Source</p>
							<p className="mt-1 text-sm font-semibold text-amber-300 lg:text-base">IMDb</p>
						</div>
					</div>

					<FeaturedMovieSpotlight />

					<div className="flex w-full justify-center gap-3 mb-8 text-xs lg:text-sm tracking-wide uppercase movies-mini-nav max-sm:mt-4 xl:mb-10">
						<a className="rounded-full border border-amber-300/30 bg-black/70 px-4 py-2 text-amber-200 transition-all duration-300 hover:bg-amber-500/20" href="#watched-movies">🎥 Watched</a>
						<a className="rounded-full border border-amber-300/30 bg-black/70 px-4 py-2 text-amber-200 transition-all duration-300 hover:bg-amber-500/20" href="#to-watch">⏰ To Watch</a>
						<a className="rounded-full border border-green-400/35 bg-black/70 px-4 py-2 text-green-200 transition-all duration-300 hover:bg-green-500/20" href="/projects/movies-database/the-matrix">🟩 The Matrix</a>
						<a className="rounded-full border border-amber-400/35 bg-black/70 px-4 py-2 text-amber-200 transition-all duration-300 hover:bg-amber-500/20" href="/projects/movies-database/batman">🦇 Batman</a>
						<a className="rounded-full border border-red-400/35 bg-black/70 px-4 py-2 text-red-200 transition-all duration-300 hover:bg-red-500/20" href="/projects/movies-database/iron-man">🛡️ Iron Man</a>
						<a className="rounded-full border border-rose-400/35 bg-black/70 px-4 py-2 text-rose-200 transition-all duration-300 hover:bg-rose-500/20" href="/projects/movies-database/deadpool">🔴 Deadpool</a>
					</div>

					<MoviesWatched />
					<MoviesToWatch />
				</section>
			</main>
			<Footer />
		</div>
	);
}