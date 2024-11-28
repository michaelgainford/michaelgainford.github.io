import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";
import IconMovies from "@/components/icons/IconMovies";

import DataForMoviesList from "@/data/Data_For_Movies";
DataForMoviesList.sort((a, b) => a.title.localeCompare(b.title));
const watchedMovies = DataForMoviesList.filter((movie) => movie.watched === true);
const unwatchedMovies = DataForMoviesList.filter((movie) => movie.watched === false);
const watchedMoviesLength = watchedMovies.length;
const unwatchedMoviesLength = unwatchedMovies.length;

const pageStyles = "bg-gray-950 text-slate-300";
const watchedMoviesScrollStyles = "max-xl:flex max-xl:flex-no-wrap max-xl:justify-start max-xl:overflow-x-scroll max-xl:snap-x max-xl:snap-mandatory";
const watchedMoviesGridStyles = "xl:grid xl:gap-8 xl:grid-cols-4 xl:gap-8 xl:gap-12 xl:grid-cols-6 2xl:grid-cols-5 3xl:grid-cols-8 4xl:grid-cols-10 5xl:grid-cols-12";
const watchedMoviesSharedStyles = "w-full gap-4 no-scrollbar motion motion-preset-slide-up motion-delay-[600ms]";
const watchedMoviesCombinedStyles = `${watchedMoviesSharedStyles} ${watchedMoviesScrollStyles} ${watchedMoviesGridStyles}`;

const pageIntroText = `This is the list of movies watched by the PP Movie Club. In total, we have watched ${watchedMoviesLength} movies and currently, there are ${unwatchedMoviesLength} movies on the watchlist.`;

export default function PAGE_MOVIES_DATABASE() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={`${mainStyles}`}>
				<div className="flex items-center gap-2 my-8 title-icon">
					<IconMovies classes="size-5 fill-slate-200 lg:size-8"  />
					<H1 text={`Movies Database`} font_sizes={`!pt-0`} other_classes={`!mb-0 !pb-0`}/>
				</div>
				<PageIntro 
				  text={pageIntroText}
				  text_colour={`text-current`} 
				  other_classes={`text-xs text-balance text-center leading-5 font-light md:text-sm md:mb-20 xl:pb-12`}
				/>
				<div className="flex w-full gap-4 mb-8 text-xs lg:text-sm tracking-wide motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 uppercase divide-x divide-gray-800 movies-mini-nav max-sm:justify-center max-sm:mt-8 [&>a]:transition-all [&>a]:duration-300 [&>a]:scroll-smooth xl:mb-16">
					<a className="hover:underline" href="#watched-movies">🎥 Watched</a>
					<a className="pl-3 hover:underline" href="#to-watch">⏰ To Watch</a>
				</div>

				{/* Watched Movies */}
				<div className={watchedMoviesCombinedStyles} id="watched-movies">
					{watchedMovies.map((movie, id) => (
					<div key={id} className="flex flex-col items-center content-center duration-300 ease-in-out border cursor-pointer justify-items-center border-black/80 text-light_colour border-secondary group hover:bg-secondary bg-black/90 relative xl:max-w-[200px] 2xl:max-w-[200px] snap-always snap-center max-xl:mr-12 mb-8">
						<div className="w-full max-w-full movie-poster">
							<Image src={movie.image} className="max-xl:min-w-[200px] xl:min-w-[120px] max-w-[200px] object-cover duration-1000 xl:opacity-50 group-hover:xl:opacity-100 scale-[100%] group-hover:xl:scale-[120%] group-hover:xl:ease-in-out w-full rounded-sm" alt={movie.title} height={300} width={200} />
						</div>
						<div className="w-full transition-all duration-300 xl:opacity-0 movie-info xl:absolute xl:left-0 xl:-bottom-16 group-hover:xl:opacity-100 group-hover:xl:bottom-0">
							<p className="movie-title bg-black/80 w-full px-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center xl:text-sm">{movie.title}</p>
						</div>
					</div>
					))}
				</div>

				{/* To Watch Movies */}
				<div className="w-full py-4 my-8 border-2 rounded-lg xl:py-8 border-slate-950 xl:my-16 motion motion-preset-slide-up motion-delay-700">
					<h2 className="mb-4 text-sm lg:text-lg" id="to-watch">To Watch</h2>
					<div className="min-h-[100px] movies-grid w-full flex flex-nowrap gap-4 max-sm:gap-y-6 xl:gap-12 overflow-x-auto snap-x snap-mandatory no-scrollbar">
						{unwatchedMovies.map((movie, id) => (
						<div key={id} className="flex flex-col items-center content-center duration-300 ease-in-out cursor-pointer gap-2 movie-card justify-items-center text-light_colour border-secondary group hover:bg-secondary snap-always snap-center shrink-0 w-[144px]">
							<div className="w-full max-w-full movie-poster">
								<Image src={movie.image} className="object-cover w-full duration-1000 border-tr-md border-tl-md xl:opacity-50 group-hover:xl:opacity-100 group-hover:ease-in-out !aspect-[2/3]" alt={movie.title} width={144} height={216} />
							</div>
							<div className="w-full py-2 movie-info">
								<p className="movie-title bg-black w-full py-2 px-3 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-xs min-h-[60px] max-w-full flex items-center justify-center h-full line-clamp-3 text-center">
									{movie.title}
								</p>
							</div>
						</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}