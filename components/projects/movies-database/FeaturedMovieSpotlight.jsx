"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { watchedMovies } from "@/variables/ProjectMovies";

const ROTATION_INTERVAL = 6000;

export default function Component_FeaturedMovieSpotlight() {
	const featuredMovies = useMemo(() => watchedMovies.slice(0, 12), []);
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

	return (
		<div
			className="mb-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-amber-300/20 bg-black/70 shadow-xl shadow-black/30 lg:grid-cols-[280px_1fr] xl:mb-10 xl:grid-cols-[320px_1fr]"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className="relative min-h-[320px] bg-black">
				<Image
					src={featuredMovie.image}
					alt={featuredMovie.title}
					fill
					sizes="(min-width: 1280px) 320px, (min-width: 1024px) 280px, 100vw"
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
				<div className="absolute left-4 top-4 rounded-full border border-amber-300/40 bg-black/65 px-3 py-1 text-xxs uppercase tracking-[0.18em] text-amber-200">
					Featured Film
				</div>
			</div>
			<div className="flex flex-col justify-between gap-5 p-5 lg:p-7">
				<div>
					<div className="mb-3 flex flex-wrap gap-2 text-xxs uppercase tracking-[0.16em] text-slate-300">
						<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">{featuredMovie.genre}</span>
						<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">{featuredMovie.year}</span>
						<span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">{featuredMovie.duration} mins</span>
					</div>
					<h2 className="text-xl font-semibold uppercase tracking-wide text-slate-100 lg:text-3xl">{featuredMovie.title}</h2>
					<p className="mt-4 max-w-[70ch] text-sm leading-7 text-slate-300 lg:text-base">{featuredMovie.description}</p>
				</div>
				<div className="flex flex-wrap items-center gap-3">
					<a
						href={featuredMovie.imdb_url}
						target="_blank"
						rel="noreferrer"
						className="rounded-full border border-amber-300/30 bg-amber-500/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-amber-200 transition-all hover:bg-amber-500/25"
					>
						View on IMDb
					</a>
					<a
						href="#watched-movies"
						className="rounded-full border border-slate-600 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.16em] text-slate-200 transition-all hover:border-amber-300/40"
					>
						Browse Watched
					</a>
					<div className="ml-auto flex items-center gap-2 max-sm:w-full max-sm:justify-center">
						{featuredMovies.map((movie, index) => (
							<button
								key={`${movie.title}-${index}`}
								type="button"
								onClick={() => setActiveIndex(index)}
								aria-label={`Show ${movie.title}`}
								className={`h-2.5 w-2.5 rounded-full transition-all ${
									index === activeIndex ? "bg-amber-300" : "bg-slate-600 hover:bg-slate-400"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}