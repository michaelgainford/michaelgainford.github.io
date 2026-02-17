"use client";

import Image from "next/image";
import { useRef } from "react";
import { watchedMovies } from "@/variables/ProjectMovies";
const watchedMoviesScrollStyles = "max-xl:flex max-xl:flex-no-wrap max-xl:justify-start max-xl:overflow-x-scroll max-xl:snap-x max-xl:snap-mandatory";
const watchedMoviesGridStyles = "xl:grid xl:gap-8 xl:grid-cols-4 xl:gap-8 xl:gap-12 xl:grid-cols-6 2xl:grid-cols-5 3xl:grid-cols-8 4xl:grid-cols-10 5xl:grid-cols-12";
const watchedMoviesSharedStyles = "w-full gap-4 no-scrollbar";
const watchedMoviesCombinedStyles = `${watchedMoviesSharedStyles} ${watchedMoviesScrollStyles} ${watchedMoviesGridStyles}`;

export default function Component_MoviesWatched() {
	const scrollContainerRef = useRef(null);

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: -240, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: 240, behavior: 'smooth' });
		}
	};

	return (
		<div className="relative w-full max-w-full overflow-hidden">
			<button
				onClick={scrollLeft}
				className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer xl:hidden"
				aria-label="Scroll left"
			>
				<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
					<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
				</svg>
			</button>

			<button
				onClick={scrollRight}
				className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer xl:hidden"
				aria-label="Scroll right"
			>
				<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
					<path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
				</svg>
			</button>

			<div ref={scrollContainerRef} className={watchedMoviesCombinedStyles} id="watched-movies">
			{watchedMovies.map((movie, id) => (
				<div key={id} className="flex flex-col items-center content-center duration-300 ease-in-out border cursor-pointer justify-items-center border-black/80 text-light_colour border-secondary group hover:bg-secondary bg-black/90 xl:max-w-[200px] 2xl:max-w-[200px] snap-always snap-center max-xl:mr-12 mb-8 relative before:pointer-events-none before:transform-gpu before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-amber-500/60 before:opacity-0 before:blur-[34px] before:transition-opacity before:content-[''] hover:before:opacity-100">
					<div className="w-full max-w-full movie-poster">
						<Image src={movie.image} className="max-xl:min-w-[200px] xl:min-w-[120px] max-w-[200px] object-cover duration-1000 xl:opacity-50 xl:group-hover:opacity-100 scale-[100%] xl:group-hover:ease-in-out w-full rounded-xs" alt={movie.title} height={300} width={200} />
					</div>
					<div className="w-full transition-all duration-300 xl:opacity-0 movie-info xl:absolute xl:left-0 xl:-bottom-16 xl:group-hover:opacity-100 xl:group-hover:bottom-0">
						<p className="movie-title bg-black/80 w-full px-2 ease-in-out duration-300 xl:opacity-50 xl:group-hover:opacity-100 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center xl:text-sm">{movie.title}</p>
					</div>
				</div>
			))}
			</div>
		</div>
	)
}