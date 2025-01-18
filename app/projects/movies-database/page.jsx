import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1Span";
import IconMovies from "@/components/icons/IconMovies";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/_Footer";
import MoviesWatched from "@/components/projects/movies-database/MoviesWatched";
import MoviesToWatch from "@/components/projects/movies-database/MoviesToWatch";
import { watchedMoviesLength, unwatchedMoviesLength } from "@/variables/Data";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
const pageStyles = "bg-gray-950 text-slate-300";
const pageIntroText = `This is the list of movies watched by the PP Movie Club. In total, we have watched ${watchedMoviesLength} movies and currently, there are ${unwatchedMoviesLength} movies on the watchlist.`;

export default function Page_MoviesDatabase() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<div className="flex items-center gap-2 my-8 title-icon">
					<IconMovies classes="size-5 fill-slate-200 lg:size-8" />
					<H1 text={`Movies Database`} font_sizes={`pt-0!`} other_classes={`mb-0! pb-0!`}/>
				</div>
				<PageIntro 
				  text={pageIntroText}
				  text_colour="text-current" 
				  other_classes="text-xs text-balance text-center leading-5 font-light md:text-sm md:mb-20 xl:pb-12"
				/>
				<div className="flex w-full gap-3 mb-8 text-xs lg:text-base tracking-wide uppercase divide-x divide-gray-800 movies-mini-nav max-sm:justify-center max-sm:mt-8 [&>a]:transition-all [&>a]:duration-300 [&>a]:scroll-smooth [&>a]:hover:underline xl:mb-16">
					<a className="pr-3" href="#watched-movies">🎥 Watched</a>
					<a href="#to-watch">⏰ To Watch</a>
				</div>
				<MoviesWatched />
				<MoviesToWatch />
			</main>
			<Footer />
		</div>
	);
}