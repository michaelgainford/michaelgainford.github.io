import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import H1 from "@/components/typography/H1Span";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
const pageStyles = "bg-gradient-to-b from-bg-black-90 text-slate-300";

import DataForMoviesList from "@/components/data/Data_For_Movies";
DataForMoviesList.sort((a, b) => a.title.localeCompare(b.title));
const watchedMovies = DataForMoviesList.filter((movie) => movie.watched === true);
const unwatchedMovies = DataForMoviesList.filter((movie) => movie.watched === false);
const watchedMoviesLength = watchedMovies.length;

export default function PAGE_MOVIES_DATABASE() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={`${mainStyles}`}>
				<H1 text={`Movies Database (${watchedMoviesLength} Watched)`} />
				<div className={`movies-mini-nav flex max-sm:justify-center max-sm:mt-8 w-full mb-8 gap-4 divide-x divide-gray-800 uppercase text-sm tracking-wide`}>
					<a href={`#watched-movies`} className={`movies-mini-nav-item hover:underline duration-300 transition-all scroll-smooth`}>Watched</a>
					<a href={`#to-watch`} className={`movies-mini-nav-item pl-3 hover:underline duration-300 transition-all scroll-smooth`}>To Watch</a>
				</div>
				<div className={`grid w-full grid-cols-2 gap-4 movies-grid sm:grid-cols-3 max-sm:gap-y-6 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-8 xl:gap-12 xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-12`} id={`watched-movies`}>
					{watchedMovies.map((movie, id) => (
					<div key={id} className={`flex flex-col items-center content-center duration-300 ease-in-out border cursor-pointer movie-card justify-items-center border-black/80 text-light_colour border-secondary group hover:bg-secondary bg-black/90 relative  max-w-[200px] overflow-hidden`}>
						<div className={`w-full max-w-full movie-poster`}>
						<Image src={movie.image} className={`max-w-[200px] object-cover duration-1000 border-tr-md border-tl-md lg:opacity-50 group-hover:lg:opacity-100 scale-[120%] group-hover:scale-100 group-hover:ease-in-out w-full`} alt={movie.title} width={200} height={300} />
						</div>
						<div className={`w-full movie-info lg:absolute lg:-bottom-16 opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:bottom-0`}>
						<p className={`movie-title bg-black/70 w-full px-2  ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center`}>{movie.title}</p>
						</div>
					</div>
					))}
				</div>
				<div className={`w-full py-4 xl:py-8 my-8 border-2 rounded-lg border-slate-950 lg:my-16`}>
					<h2 className={`mb-4 text-lg`} id={`to-watch`}>To Watch</h2>
					<div className={`min-h-[100px] movies-grid w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-12 gap-4 max-sm:gap-y-6 md:gap-6 lg:gap-8 xl:gap-12`}>
						{unwatchedMovies.map((movie, id) => (
						<div key={id} className={`flex flex-col items-center content-center duration-300 ease-in-out cursor-pointer movie-card justify-items-center text-light_colour border-secondary group hover:bg-secondary`}>
							<div className={`w-full max-w-full movie-poster`}>
							<Image 
							  src={movie.image} 
							  className={`object-cover duration-1000 border-tr-md border-tl-md lg:opacity-50 group-hover:lg:opacity-100 group-hover:ease-in-out w-full`} 
							  alt={movie.title} 
							  width={200} 
							  height={300} 
							/>
							</div>
							<div className={`w-full movie-info py-2`}>
								<p className={`movie-title bg-black w-full p-2 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 group-hover:xl:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center h-full line-clamp-3`}>
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