"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { getAverageMigacriticScore, watchedMovies } from "@/variables/ProjectMovies";
const watchedMoviesScrollStyles = "max-xl:flex max-xl:flex-no-wrap max-xl:justify-start max-xl:overflow-x-scroll max-xl:snap-x max-xl:snap-mandatory";
const watchedMoviesGridStyles = "xl:grid xl:gap-8 xl:grid-cols-4 xl:gap-8 xl:gap-12 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 4xl:grid-cols-10 5xl:grid-cols-12";
const watchedMoviesSharedStyles = "w-full gap-4 no-scrollbar";
const watchedMoviesCombinedStyles = `${watchedMoviesSharedStyles} ${watchedMoviesScrollStyles} ${watchedMoviesGridStyles}`;
const numberFormatter = new Intl.NumberFormat("en-GB");
const PLACEHOLDER_IMAGE = "/placeholder-files/square-template.webp";
const ageRatingSortOrder = ["PG", "12", "15", "18", "NR"];
const selectStyles = "w-full appearance-none rounded-md border border-slate-700/80 bg-slate-950/80 px-3 py-2 pr-12 text-sm text-slate-100 outline-none transition-all focus:border-slate-500";

const sortOptions = {
	"title-asc": (a, b) => a.title.localeCompare(b.title),
	"year-desc": (a, b) => b.year - a.year,
	"duration-desc": (a, b) => b.duration - a.duration,
	"rating-desc": (a, b) => {
		const scoreA = getAverageMigacriticScore(a);
		const scoreB = getAverageMigacriticScore(b);

		if (scoreA === null && scoreB === null) return 0;
		if (scoreA === null) return 1;
		if (scoreB === null) return -1;

		return scoreB - scoreA;
	},
	"rating-asc": (a, b) => {
		const scoreA = getAverageMigacriticScore(a);
		const scoreB = getAverageMigacriticScore(b);

		if (scoreA === null && scoreB === null) return 0;
		if (scoreA === null) return 1;
		if (scoreB === null) return -1;

		return scoreA - scoreB;
	},
};

export default function Component_MoviesWatched() {
	const scrollContainerRef = useRef(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("All");
	const [selectedAgeRatings, setSelectedAgeRatings] = useState([]);
	const [sortBy, setSortBy] = useState("title-asc");
	const [failedImages, setFailedImages] = useState(new Set());

	const genres = useMemo(
		() => ["All", ...new Set(watchedMovies.map((movie) => movie.genre).sort((a, b) => a.localeCompare(b)))],
		[]
	);

	const ageRatings = useMemo(
		() =>
			Array.from(new Set(watchedMovies.map((movie) => movie.ageRating || "NR"))).sort((leftRating, rightRating) => {
				const leftIndex = ageRatingSortOrder.indexOf(leftRating);
				const rightIndex = ageRatingSortOrder.indexOf(rightRating);

				if (leftIndex !== -1 && rightIndex !== -1) {
					return leftIndex - rightIndex;
				}

				if (leftIndex !== -1) {
					return -1;
				}

				if (rightIndex !== -1) {
					return 1;
				}

				return leftRating.localeCompare(rightRating);
			}),
		[]
	);

	const handleAgeRatingToggle = (rating) => {
		setSelectedAgeRatings((previous) => {
			if (previous.includes(rating)) {
				return previous.filter((item) => item !== rating);
			}

			return [...previous, rating];
		});
	};

	const filteredMovies = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();

		return watchedMovies
			.filter((movie) => {
				const matchesSearch =
					query.length === 0 ||
					movie.title.toLowerCase().includes(query) ||
					movie.genre.toLowerCase().includes(query);

				const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
				const movieAgeRating = movie.ageRating || "NR";
				const matchesAgeRating = selectedAgeRatings.length === 0 || selectedAgeRatings.includes(movieAgeRating);

				return matchesSearch && matchesGenre && matchesAgeRating;
			})
			.sort(sortOptions[sortBy]);
	}, [searchTerm, selectedGenre, selectedAgeRatings, sortBy]);

	const averageDuration = useMemo(() => {
		if (filteredMovies.length === 0) {
			return 0;
		}

		const totalDuration = filteredMovies.reduce((acc, movie) => acc + movie.duration, 0);
		return Math.round(totalDuration / filteredMovies.length);
	}, [filteredMovies]);

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
		<section className="relative w-full max-w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70 p-4 lg:p-6" id="watched-movies">
			<div className="mb-5 flex flex-wrap items-center justify-between gap-4">
				<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 lg:text-base">Watched Movies</h2>
				<div className="flex flex-wrap gap-2 text-xxs uppercase tracking-wide text-slate-300">
					<span className="rounded-md border border-slate-700/80 bg-slate-900/70 px-2 py-1">Visible: {numberFormatter.format(filteredMovies.length)}</span>
					<span className="rounded-md border border-slate-700/80 bg-slate-900/70 px-2 py-1">Genres: {genres.length - 1}</span>
					<span className="rounded-md border border-slate-700/80 bg-slate-900/70 px-2 py-1">Avg: {averageDuration} mins</span>
				</div>
			</div>

			<div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-3">
				<input
					type="text"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
					placeholder="Search title or genre"
					className="rounded-md border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-slate-500"
				/>
				<div className="relative">
					<select
						value={selectedGenre}
						onChange={(event) => setSelectedGenre(event.target.value)}
						className={selectStyles}
					>
						{genres.map((genre) => (
							<option key={genre} value={genre}>{genre}</option>
						))}
					</select>
					<svg
						className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
				<div className="relative">
					<select
						value={sortBy}
						onChange={(event) => setSortBy(event.target.value)}
						className={selectStyles}
					>
						<option value="title-asc">Sort: Title (A-Z)</option>
						<option value="year-desc">Sort: Newest First</option>
						<option value="duration-desc">Sort: Longest First</option>
						<option value="rating-desc">Sort: Rating (High to Low)</option>
						<option value="rating-asc">Sort: Rating (Low to High)</option>
					</select>
					<svg
						className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
			</div>

			<div className="mb-6 rounded-md border border-slate-700/80 bg-slate-950/80 p-3">
				<div className="mb-2 flex items-center justify-between gap-3">
					<p className="text-xxs uppercase tracking-[0.14em] text-slate-300">Age Rating Filter</p>
					<button
						type="button"
						onClick={() => setSelectedAgeRatings([])}
						className="rounded-md border border-slate-600/80 px-2 py-1 text-xxs uppercase tracking-wide text-slate-300 transition-all hover:border-slate-500 hover:text-slate-200"
					>
						Clear
					</button>
				</div>
				<div className="flex flex-wrap gap-2">
					{ageRatings.map((rating) => {
						const isSelected = selectedAgeRatings.includes(rating);

						return (
							<label key={rating} className={`inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs uppercase tracking-wide transition-all ${isSelected ? "border-slate-500 bg-slate-800/80 text-slate-100" : "border-slate-600/70 bg-slate-900/50 text-slate-300 hover:border-slate-500"}`}>
								<input
									type="checkbox"
									checked={isSelected}
									onChange={() => handleAgeRatingToggle(rating)}
									className="h-3.5 w-3.5 accent-slate-300"
								/>
								<span>{rating}</span>
							</label>
						);
					})}
				</div>
			</div>

			<div className="relative">
				<button
					onClick={scrollLeft}
					className="absolute left-4 top-[calc(50%-1rem)] -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer xl:hidden"
					aria-label="Scroll left"
				>
					<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
						<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
					</svg>
				</button>

				<button
					onClick={scrollRight}
					className="absolute right-4 top-[calc(50%-1rem)] -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer xl:hidden"
					aria-label="Scroll right"
				>
					<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
						<path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
					</svg>
				</button>

			<div ref={scrollContainerRef} className={watchedMoviesCombinedStyles}>
			{filteredMovies.map((movie, id) => (
				<a
					key={id}
					href={movie.imdb_url}
					target="_blank"
					rel="noreferrer"
					className="flex w-52 shrink-0 flex-col items-center content-center duration-300 ease-in-out border cursor-pointer justify-items-center border-slate-800/80 text-light_colour group bg-slate-950/85 hover:bg-slate-900/85 xl:max-w-[200px] xl:w-auto 2xl:max-w-[200px] snap-always snap-center max-xl:mr-6 mb-8 relative before:pointer-events-none before:transform-gpu before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-slate-500/35 before:opacity-0 before:blur-[28px] before:transition-opacity before:content-[''] hover:before:opacity-100 rounded-sm overflow-hidden"
				>
					<div className="relative w-full max-w-full movie-poster bg-black aspect-[2/3]">
						<Image 
							src={failedImages.has(movie.image) ? PLACEHOLDER_IMAGE : movie.image} 
							className="h-full w-full object-cover duration-1000 xl:opacity-50 xl:group-hover:opacity-100 scale-[100%] xl:group-hover:ease-in-out rounded-xs" 
							alt={movie.title} 
							height={300} 
							width={200}
							onError={() => {
								if (!failedImages.has(movie.image)) {
									setFailedImages(prev => new Set([...prev, movie.image]));
								}
							}}
						/>
						<span className="absolute left-2 top-2 rounded-sm bg-slate-950/85 px-2 py-1 text-xxs tracking-wide text-slate-300">{movie.year}</span>
						<span className="absolute right-2 top-2 rounded-sm bg-slate-950/85 px-2 py-1 text-xxs tracking-wide text-slate-300">{movie.ageRating || "NR"}</span>
					</div>
					<div className="w-full transition-all duration-300 movie-info">
						<p className="movie-title bg-slate-950/70 w-full px-2 py-2 ease-in-out duration-300 text-center text-xs min-h-[60px] max-w-full flex items-center justify-center xl:text-sm line-clamp-2">{movie.title}</p>
						<div className="grid grid-cols-2 text-xxs tracking-wide uppercase text-slate-300 border-t border-slate-800/70">
							<span className="px-2 py-1 text-center border-r border-slate-800/70 truncate">{movie.genre}</span>
							<span className="px-2 py-1 text-center">{movie.duration} mins</span>
												{(() => {
													const averageScore = getAverageMigacriticScore(movie);
													const score = averageScore !== null ? averageScore : "N/A";
													return (
																<div className={`col-span-2 w-full border-t border-slate-800/70 px-2 py-1 text-center text-xxs uppercase tracking-wide text-slate-300/80 ${averageScore === null ? "opacity-50" : ""}`}>
															MIGACRITIC SCORE: {score}
														</div>
													);
												})()}
						</div>
					</div>
				</a>
			))}
			</div>
			</div>
			{filteredMovies.length === 0 && (
				<div className="rounded-lg border border-slate-700/80 bg-slate-900/70 p-4 text-center text-sm text-slate-200">
					No watched movies found for your current filters.
				</div>
			)}
		</section>
	)
}