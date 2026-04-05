"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { getAverageMigacriticScore, watchedMovies } from "@/variables/ProjectMovies";

const ROTATION_INTERVAL = 6000;

export default function Component_FeaturedMovieSpotlight() {
	const featuredMovies = useMemo(() => {
		const topRatedMovies = [...watchedMovies]
			.map((movie) => ({
				movie,
				score: getAverageMigacriticScore(movie),
			}))
			.filter(({ score }) => score !== null)
			.sort((a, b) => b.score - a.score)
			.slice(0, 12)
			.map(({ movie }) => movie);

		if (topRatedMovies.length > 0) {
			return topRatedMovies;
		}

		return watchedMovies.slice(0, 12);
	}, []);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (featuredMovies.length <= 1 || isPaused) {
			return undefined;
		}

		const intervalId = window.setInterval(() => {
			setActiveIndex((currentIndex) => (currentIndex + 1) % featuredMovies.length);
		}, ROTATION_INTERVAL);

		return () => window.clearInterval(intervalId);
	}, [featuredMovies.length, isPaused]);

	const featuredMovie = featuredMovies[activeIndex] ?? watchedMovies[0];
	const featuredMovieScore = getAverageMigacriticScore(featuredMovie);

	return (
		<div
			className="mb-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-xl shadow-black/30 lg:grid-cols-[200px_1fr] xl:mb-10"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className="relative mx-auto w-full max-w-[200px] aspect-[2/3] bg-black lg:mx-0">
				<Image
					src={featuredMovie.image}
					alt={featuredMovie.title}
					fill
					className="object-cover"
					sizes="200px"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
				<div className="absolute left-4 top-4 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xxs uppercase tracking-[0.18em] text-slate-300">
					Featured Movie
				</div>
			</div>
			<div className="flex flex-col justify-between gap-5 p-5 lg:p-7">
				<div>
					<div className="mb-3 flex flex-wrap gap-2 text-xxs uppercase tracking-[0.16em] text-slate-300">
						<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">{featuredMovie.genre}</span>
						<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">{featuredMovie.year}</span>
						<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">{featuredMovie.duration} mins</span>
						<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">Rating: {featuredMovieScore !== null ? featuredMovieScore : "N/A"}</span>
					</div>
					<h2 className="text-xl font-semibold uppercase tracking-wide text-slate-100 lg:text-3xl">{featuredMovie.title}</h2>
					<p className="mt-4 max-w-[70ch] text-sm leading-7 text-slate-300 lg:text-base">{featuredMovie.description}</p>
				</div>
				<div className="flex justify-end max-sm:justify-center">
					<div className="flex items-center gap-2">
						{featuredMovies.map((movie, index) => (
							<button
								key={`${movie.title}-${index}`}
								type="button"
								onClick={() => setActiveIndex(index)}
								aria-label={`Show ${movie.title}`}
								className={`h-2.5 w-2.5 rounded-full transition-all ${
									index === activeIndex ? "bg-slate-300" : "bg-slate-600 hover:bg-slate-500"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}